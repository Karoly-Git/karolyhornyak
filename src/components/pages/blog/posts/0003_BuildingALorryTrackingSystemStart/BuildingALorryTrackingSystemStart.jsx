import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PostNavigation from "../../postnavigation/PostNavigation";

export default function BuildingALorryTrackingSystemStart() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* SEO / Social Sharing */}
            <Helmet>
                <title>
                    New Project Begins: Building a Real-Time Lorry Tracking System
                </title>
                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="New Project Begins: Building a Real-Time Lorry Tracking System"
                />
                <meta
                    property="og:description"
                    content="Starting a new full-stack project to build a real-time lorry tracking system and replace handwritten logs on a busy production site."
                />
                <meta
                    property="og:url"
                    content="https://karolyhornyak.co.uk/blog/building-a-lorry-tracking-system-start"
                />
                <meta
                    property="og:image"
                    content="https://karolyhornyak.co.uk/static/media/building_a_lorry_tracking_system_start.94a468f8b0afaf889e0a.webp"
                />
                <meta property="og:site_name" content="Karoly Hornyak" />
                <meta
                    name="description"
                    content="New project begins: building a real-time lorry tracking system to improve operational visibility and replace manual processes."
                />
            </Helmet>

            <article className="blog-post">
                <h1 className="blog-title">
                    New Project Begins: I'm Building a Real-Time Lorry Tracking System
                </h1>

                <p className="blog-meta">
                    Starting a new full-stack project to solve a real operational
                    problem on a busy production site.
                </p>

                <section>
                    <h2>The Problem on Site</h2>
                    <p>
                        On a busy production site in London, lorries arrive
                        continuously to collect finished goods. Once a lorry
                        checks in, it moves through several stages on site —
                        waiting, loading, and eventually checking out.
                    </p>
                    <p>
                        Despite how critical this process is, there was no
                        reliable system in place to track lorries after
                        check-in.
                    </p>
                    <p>
                        At the same time, it’s essential to closely monitor each
                        collection — where a lorry is on site, what stage of
                        loading it’s at, and how long it has been there — due to
                        limited space and tight turnaround times.
                    </p>
                </section>

                <section>
                    <h2>Handwritten Notes and Constant Interruptions</h2>
                    <p>
                        Right now, status updates are handwritten (if they’re
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
                        Without a reliable tracking system, it’s difficult to
                        monitor loading times, spot delays, or consistently
                        ensure compliance with the required two-hour turnaround
                        window.
                    </p>
                    <p>
                        There’s no clear visibility, no accurate timestamps, and
                        no dependable historical data. Decisions are often made
                        based on assumptions rather than facts.
                    </p>
                </section>

                <section>
                    <h2>What I’m Building</h2>
                    <p>
                        I’m building a full-stack web application that provides
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
                        The goal isn’t just to build an app. It’s about reducing
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
                    <h2>What’s Next</h2>
                    <p>
                        The project is currently under active development. I’ll
                        be sharing progress, design decisions, and lessons
                        learned as it evolves.
                    </p>
                    <p>
                        Feedback and insights are always welcome.
                    </p>
                </section>

                <PostNavigation title="New Project Begins: I'm Building a Real-Time Lorry Tracking System" />
            </article>
        </>
    );
}
