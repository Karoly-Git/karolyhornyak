import { useEffect } from "react";
import PostNavigation from "@/features/navigation/post-navigation";
import { meta } from "./meta";

import "@/features/portfolio/blog/blogs.scss";

export default function CiCdFirebaseCaseStudy() {
    useEffect(() => {
        window.scrollTo(0, 0);

        const baseUrl = window.location.origin;
        const fullUrl = `${baseUrl}/blog/${meta.slug}`;
        const imageUrl = `${baseUrl}${meta.cover}`;

        document.title = meta.title;

        updateMetaTag("name", "description", meta.excerpt);

        updateMetaTag("property", "og:locale", "en_GB");
        updateMetaTag("property", "og:type", "article");
        updateMetaTag("property", "og:title", meta.title);
        updateMetaTag("property", "og:description", meta.excerpt);
        updateMetaTag("property", "og:url", fullUrl);
        updateMetaTag("property", "og:image", imageUrl);
        updateMetaTag("property", "og:site_name", "Karoly Hornyak");
    }, []);

    return (
        <>
            <article className="blog-post">
                <h1 className="title">{meta.title}</h1>

                <p className="meta">
                    CI/CD implementation using GitHub Actions and
                    Firebase Hosting — including the exact errors that broke the
                    build and how I fixed them.
                </p>

                <section>
                    <h2>The Goal</h2>
                    <p>
                        A wanted my portfolio to deploy automatically every time
                        I pushed to the <code>main</code> branch.
                    </p>
                    <p>
                        The stack:
                    </p>
                    <ul>
                        <li>React (Vite + TypeScript)</li>
                        <li>GitHub Actions</li>
                        <li>Firebase Hosting</li>
                    </ul>
                    <p>
                        Push → Build → Deploy
                    </p>
                </section>

                <section>
                    <h2>First Failure — TypeScript Build Error</h2>

                    <p>
                        My original build script ran:
                    </p>

                    <pre>
                        <code>"tsc -b && vite build"</code>
                    </pre>

                    <p>
                        The CI pipeline failed immediately with:
                    </p>

                    <pre>
                        <code>
                            {`Error: src/features/portfolio/blog/index.tsx(5,18):
TS2307: Cannot find module '@/shared/components/card'
or its corresponding type declarations.

Error: Process completed with exit code 2.`}
                        </code>
                    </pre>

                    <p>
                        Locally everything worked. CI (Linux) insisted the file
                        didn’t exist.
                    </p>

                    <p>
                        My first assumption was that the standalone TypeScript build
                        step was too strict in the CI environment. So I simplified the
                        script to:
                    </p>

                    <pre>
                        <code>"vite build"</code>
                    </pre>

                    <p>
                        I pushed the change, expecting the problem to disappear.
                        It didn’t.
                    </p>

                    <p>
                        The build still failed — just later in the process — which told
                        me the issue wasn’t TypeScript itself.
                    </p>

                    <p>
                        At that point, I restored the original build structure and
                        shifted focus away from the build command and toward the file
                        system differences between Windows and Linux.
                    </p>
                </section>

                <section>
                    <h2>Second Failure — Vite Build (ENOENT)</h2>
                    <p>
                        After simplifying the build script to only:
                    </p>

                    <pre>
                        <code>"vite build"</code>
                    </pre>

                    <p>
                        The error changed, but didn’t disappear:
                    </p>

                    <pre>
                        <code>
                            {`[vite-plugin-pwa:build] There was an error during the build:

Could not load 
/home/runner/work/karolyhornyak/karolyhornyak/src/shared/components/card 
(imported by src/features/portfolio/blog/index.tsx): 
ENOENT: no such file or directory`}
                        </code>
                    </pre>

                    <p>
                        This was the key clue.
                    </p>
                </section>

                <section>
                    <h2>The Real Problem — Linux Case Sensitivity & Git Tracking</h2>

                    <p>
                        The actual issue wasn’t TypeScript.
                        It wasn’t Vite.
                        It wasn’t Firebase.
                    </p>

                    <p>
                        At some point during development, the file had been renamed from:
                    </p>

                    <pre>
                        <code>Card.tsx</code>
                    </pre>

                    <p>
                        to:
                    </p>

                    <pre>
                        <code>card.tsx</code>
                    </pre>

                    <p>
                        On Windows, this appears identical because the file system is
                        case-insensitive. But Git does not automatically detect
                        casing-only changes unless explicitly forced.
                    </p>

                    <p>
                        So even though my local folder showed:
                    </p>

                    <pre>
                        <code>card.tsx</code>
                    </pre>

                    <p>
                        Git was still tracking the file internally as:
                    </p>

                    <pre>
                        <code>Card.tsx</code>
                    </pre>

                    <p>
                        I confirmed this by running:
                    </p>

                    <pre>
                        <code>
                            {`git ls-files src/shared/components`}
                        </code>
                    </pre>

                    <p>
                        The result revealed the truth:
                    </p>

                    <pre>
                        <code>
                            {`src/shared/components/Card.tsx
src/shared/components/card.scss
src/shared/components/scroll-up.tsx
...`}
                        </code>
                    </pre>

                    <p>
                        That uppercase <code>Card.tsx</code> was the problem.
                    </p>

                    <p>
                        My import used:
                    </p>

                    <pre>
                        <code>@/shared/components/card</code>
                    </pre>

                    <p>
                        Windows didn’t care.
                        Linux absolutely did.
                    </p>

                    <p>
                        GitHub Actions runs on:
                    </p>

                    <pre>
                        <code>ubuntu-latest</code>
                    </pre>

                    <p>
                        Which enforces strict case sensitivity. So in CI,
                        <code>Card.tsx</code> and <code>card.tsx</code> are two different files.
                    </p>

                    <p>
                        The fix required forcing Git to properly register the casing change
                        using a two-step rename:
                    </p>

                    <pre>
                        <code>
                            {`git mv src/shared/components/Card.tsx src/shared/components/card_temp.tsx
git commit -m "Temp rename to force casing change"

git mv src/shared/components/card_temp.tsx src/shared/components/card.tsx
git commit -m "Rename to lowercase card.tsx"
git push`}
                        </code>
                    </pre>

                    <p>
                        After that push, the CI pipeline turned green immediately.
                    </p>

                    <p>
                        A small casing difference — invisible on Windows —
                        was breaking the entire Linux build.
                    </p>
                </section>

                <section>
                    <h2>Environment Consistency — Node Version</h2>
                    <p>
                        Another lesson was aligning Node versions.
                    </p>
                    <p>
                        I was running Node 24 locally while CI used Node 18.
                        I standardized both environments to Node 20 (LTS) to
                        eliminate version-related inconsistencies.
                    </p>
                </section>

                <section>
                    <h2>Final Result</h2>
                    <p>
                        The final workflow:
                    </p>

                    <ul>
                        <li>Checkout repository</li>
                        <li>Install Node 20</li>
                        <li>Install dependencies</li>
                        <li>Build with Vite</li>
                        <li>Deploy to Firebase</li>
                    </ul>

                    <p>
                        Now every push to <code>main</code> triggers an
                        automatic production deployment.
                    </p>

                    <p>
                        The pipeline is stable, predictable, and production-ready.
                    </p>
                </section>

                <section>
                    <h2>Key Takeaways</h2>
                    <ul>
                        <li>CI environments are not Windows</li>
                        <li>Linux is case-sensitive</li>
                        <li>Align Node versions across environments</li>
                        <li>Keep build pipelines simple</li>
                        <li>Let CI catch production bugs early</li>
                    </ul>

                    <p>
                        What started as a “simple deployment setup”
                        turned into a valuable DevOps lesson.
                    </p>
                </section>
            </article>

            <PostNavigation />
        </>
    );
}

function updateMetaTag(
    attr: "name" | "property",
    key: string,
    content: string
) {
    let element = document.querySelector(`meta[${attr}="${key}"]`);

    if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
    }

    element.setAttribute("content", content);
}