import { useEffect } from "react";
import PostNavigation from "@/features/navigation/post-navigation";
import { meta } from "./meta";

import "@/features/portfolio/sections/projects/projects.scss";

export default function Spw() {
    useEffect(() => {
        window.scrollTo(0, 0);

        const baseUrl = window.location.origin;
        const fullUrl = `${baseUrl}/projects/${meta.slug}`;
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
            <article className="project-post">
                <h1 className="title">{meta.title}</h1>

                <p className="meta">{meta.excerpt}</p>

                <section>
                    <h2>How It Started</h2>
                    <p>
                        Sparkling Willow Photography was my first freelance client project.
                        The original website had been built by the client using GoDaddy’s
                        website builder. While it served its purpose initially, it began to
                        feel increasingly unprofessional as the business grew.
                    </p>
                    <p>
                        With client bookings increasing and day-to-day operations becoming
                        more demanding, there was simply no time to properly maintain,
                        redesign, or optimise the platform. As photographers and business owners —
                        not developers — they needed a professional solution that would
                        handle the technical side reliably and allow them to focus on their work.
                    </p>
                    <p>
                        The site no longer reflected the quality of the photography or the
                        professionalism of the brand, making it clear that a more robust,
                        scalable approach was necessary.
                    </p>
                    <p>
                        The objective became clear: build a modern, scalable, and
                        performance-focused website that would elevate the brand
                        and support long-term business growth.
                    </p>
                </section>

                <section>
                    <h2>The First Version – Server-Side Rendering</h2>
                    <p>
                        The first implementation used a Node.js backend with Handlebars
                        for server-side rendering. At the time, this approach made sense:
                        it allowed fast initial development, dynamic templates, and
                        straightforward deployment.
                    </p>
                    <p>
                        However, as the portfolio grew and new feature ideas emerged,
                        limitations started to appear. The structure became harder to
                        maintain, UI updates required more template coordination,
                        and the image-heavy nature of the site demanded a more flexible
                        frontend architecture.
                    </p>
                </section>

                <section>
                    <h2>The Turning Point – Rebuilding with React</h2>
                    <p>
                        Instead of continuously patching the original architecture,
                        I decided to rebuild the project using React. The first rebuild
                        was created using the standard <code>npx create-react-app</code> setup,
                        which allowed me to move to a fully component-based frontend
                        architecture.
                    </p>
                    <p>
                        This transition introduced reusable UI components, cleaner state
                        management, and a more maintainable project structure compared
                        to the earlier template-driven approach.
                    </p>
                    <p>
                        As the project matured, I later migrated the application to Vite.
                        The improved build speed, better development experience, and
                        more efficient production bundling made it a natural evolution.
                    </p>
                    <p>
                        Each iteration refined the architecture and strengthened the
                        long-term scalability of the platform.
                    </p>
                </section>

                <section>
                    <h2>Managing a Large Photography Portfolio</h2>
                    <p>
                        One of the main technical challenges was handling hundreds of
                        high-resolution images across multiple categories such as newborn,
                        maternity, family, weddings, and engagement sessions.
                    </p>
                    <p>
                        Performance optimisation became a priority. I implemented structured
                        folder organisation, image compression strategies, lazy loading,
                        and clean routing for album navigation.
                    </p>
                    <p>
                        The result is a visually rich website that maintains strong
                        performance and smooth interaction across devices.
                    </p>
                </section>

                <section>
                    <h2>Architecture & Deployment</h2>
                    <p>
                        The final version of the application is built with React and Vite,
                        styled using modular Sass architecture, and structured into
                        clearly separated components, layouts, and utility-driven data layers.
                    </p>
                    <p>
                        The project is deployed via Firebase Hosting, ensuring fast
                        global delivery and reliable uptime.
                    </p>
                </section>

                <section>
                    <h2>Client Impact</h2>
                    <blockquote>
                        “Karoly redesigned my business website from the ground up,
                        transforming it into a modern and professional platform I’m proud to share.
                        He was responsive, flexible with changes, and contributed valuable
                        suggestions throughout the process. The final result aligned perfectly
                        with my vision.”
                        <br /><br />
                        <strong>— Nicky, Sparkling Willow Photography</strong>
                    </blockquote>
                </section>

                <section>
                    <h2>What This Project Represents</h2>
                    <p>
                        This project represents more than just a website redesign.
                        It marks the beginning of my freelance journey and demonstrates
                        my ability to evolve architecture when requirements grow.
                    </p>
                    <p>
                        It shows my approach to building production-ready applications:
                        starting pragmatically, recognising limitations, and improving
                        the technical foundation when necessary.
                    </p>
                </section>

                <section>
                    <h2>Live Project</h2>

                    <p>
                        You can view the live website here:
                        <br />
                        <a
                            href={meta.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {meta.liveDemoUrl}
                        </a>
                    </p>

                    {!meta.isGitHubRepoPrivate && meta.gitHubUrl && (
                        <p>
                            Explore the source code on GitHub:
                            <br />
                            <a
                                href={meta.gitHubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {meta.gitHubUrl}
                            </a>
                        </p>
                    )}
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
