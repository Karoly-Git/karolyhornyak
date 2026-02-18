import { useEffect } from "react";
import PostNavigation from "@/features/navigation/post-navigation/PostNavigation";
import "@/features/portfolio/blog/blogs.styles.scss";
import { meta } from "./meta";

export default function LorryTrackingPartOne() {
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
            <article className="post">
                <h1 className="title">{meta.title}</h1>

                <p className="meta">
                    Starting a new full-stack project to solve a real operational
                    problem on a busy production site.
                </p>

                <section>
                    <h2>The Problem on Site</h2>
                    <p>
                        On a busy industrial production site in London, lorries arrive
                        continuously to collect finished goods. Once a lorry
                        checks in at the weighbridge, it moves through several stages on site —
                        waiting, loading, and eventually checking out.
                    </p>
                    <p>
                        Despite how critical this process is, there was no
                        reliable system in place to track lorries after
                        check-in.
                    </p>
                    <p>
                        At the same time, it's essential to closely monitor each
                        collection — where a lorry is on site, what stage of
                        loading it's at, and how long it has been there — due to
                        limited space and tight turnaround times.
                    </p>
                </section>

                <section>
                    <h2>Handwritten Notes and Constant Interruptions</h2>
                    <p>
                        Right now, status updates are handwritten (if they're
                        recorded at all). On such a fast-paced site, these
                        updates are often missed, incomplete, or outdated.
                    </p>
                    <p>
                        As a result, supervisors and managers frequently have to
                        interrupt staff via radio, mobile phone, or face-to-face
                        just to get verbal updates on where things stand.
                    </p>
                </section>

                <section>
                    <h2>Why This Becomes a Bigger Issue</h2>
                    <p>
                        Without a reliable tracking system, it's difficult to
                        monitor loading times, spot delays, or consistently
                        ensure compliance with the required two-hour turnaround
                        window.
                    </p>
                    <p>
                        There's no clear visibility, no accurate timestamps, and
                        no dependable historical data. Decisions are often made
                        based on assumptions rather than facts.
                    </p>
                </section>

                <section>
                    <h2>What I'm Building</h2>
                    <p>
                        I'm building a full-stack web application that provides
                        real-time visibility by tracking each vehicle from
                        check-in through loading to check-out.
                    </p>
                    <p>
                        Every status change is logged with clear timestamps and
                        accountability, supported by role-based access so that
                        staff, supervisors, and managers each see what they
                        need.
                    </p>
                    <p>
                        The system also includes alerts when loading time is
                        approaching the maximum allowed window, along with
                        statistics, reports, and operational metrics.
                    </p>
                </section>

                <section>
                    <h2>More Than Just an App</h2>
                    <p>
                        The goal isn't just to build an app. It's about reducing
                        interruptions and manual guesswork, improving
                        transparency, and creating reliable data for better
                        operational decision-making.
                    </p>
                    <p>
                        This project reflects the kind of problems I enjoy
                        working on most — real-world systems with practical
                        constraints that require thoughtful solutions.
                    </p>
                </section>

                <section>
                    <h2>What's Next</h2>
                    <p>
                        The project is currently under active development. I'll
                        be sharing progress, design decisions, and lessons
                        learned as it evolves.
                    </p>
                    <p>Feedback and insights are always welcome.</p>
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
