import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PostNavigation from "../../postnavigation/PostNavigation";

export default function HowIBecameAFullStackDeveloper() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* SEO / Social Sharing */}
            <Helmet>
                <title>How I Became a Full-Stack Developer</title>
                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="How I Became a Full-Stack Developer" />
                <meta
                    property="og:description"
                    content="A surprising story about early years and a 15-year detour, rediscovering programming, and becoming a full-stack developer."
                />
                <meta
                    property="og:url"
                    content="https://karolyhornyak.com/blog/how-i-became-a-full-stack-developer"
                />
                <meta
                    property="og:image"
                    content="https://karolyhornyak.com/static/media/how_i_became_a_full_stack_developer.5968537a064932e38844.webp"
                />
                <meta property="og:site_name" content="Karoly Hornyak" />
                <meta name="description" content="An unexpected journey into programming, a 15-year detour, and becoming a full-stack developer." />
            </Helmet>

            <article className="blog-post">
                <h1 className="blog-title">How I Became a Full-Stack Developer</h1>

                <p className="blog-meta">
                    An unexpected journey into programming, a detour, rediscovery, and finding my real path.
                </p>

                <section>
                    <h2>Automating the Boring Stuff</h2>
                    <p>
                        Thinking back, I’ve always been drawn to automating the boring stuff. Long before I ever
                        considered becoming a developer, I found myself looking for ways to make repetitive tasks
                        faster, cleaner, and less painful.
                    </p>
                    <p>
                        One moment stands out clearly. At the university, where I studied mechanical engineering, we were
                        given a technical iteration assignment — for non-engineers, that basically means doing the same
                        set of calculations over and over until the final value lands within a very narrow acceptable range.
                    </p>
                    <p>
                        Instead of grinding through endless recalculations like everyone else, I built an Excel
                        sheet with custom formulas that handled the entire process automatically. What normally
                        took students hours or even days suddenly took me about an hour.
                    </p>
                    <p>
                        I probably don’t need to mention how popular I became after that — or how much extra money
                        I made helping my classmates finish the same assignment. Let’s just say automation paid
                        off in more ways than one.
                    </p>
                    <p>
                        Looking back now, that was probably my first real experience of thinking like a developer —
                        spotting repetition, reducing error, and building a simple system instead of doing manual work.
                    </p>
                </section>

                <section>
                    <h2>A Long Detour</h2>
                    <p>
                        For the next fifteen years, I didn’t think about a
                        programming career. My professional journey took me across several different fields. That
                        decade and a half was full of adventures, changes, and life happening. But let’s fast-forward to 2018,
                        when I had already been living in the UK for three years and, after holding various positions, had
                        just started working as a production supervisor.
                    </p>
                    <p>
                        It didn’t take long to realise just how painfully inefficient everything was. Procedures,
                        documentation, daily processes — all of it was extremely paper-heavy and error-prone.
                        Excel was everywhere, but used in a way that made work harder instead of easier.
                    </p>
                    <p>
                        It felt like we weren’t using computers to support our work — we were working for the computer.
                    </p>
                </section>

                <section>
                    <h2>Hitting the Limits of Excel</h2>
                    <p>
                        I started creating Excel macros to make my own job easier, and for a while, that helped.
                        But very quickly I reached the limits of what spreadsheets could realistically do. I
                        needed something more flexible, more reliable, and more professional.
                    </p>
                    <p>
                        That was the point where I started looking for better tools — not just to save time, but to
                        reduce errors and make processes more robust.
                    </p>
                </section>

                <section>
                    <h2>Learning to Code — For Real</h2>
                    <p>
                        During my search, I quickly realized there was no ready-to-use tool.
                        The only real solution was programming — so I dived into it. What I learned was mostly self-taught; however, to deepen my
                        knowledge, I searched for training opportunities and came across a company called{" "}
                        <a
                            href="https://programozaskarrier.hu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Programming & Career
                        </a>.
                        They offered a one-year frontend web developer training programme, and it immediately felt like
                        the right choice. I enrolled, committed fully, and successfully completed the programme.
                        That year became one of the most intense learning periods of my life.
                    </p>
                    <p>
                        I learned the fundamentals of Python, Django, JavaScript, HTML, CSS, SQL, Git, GitHub, React,
                        and a bit of Node.js with Express.
                    </p>
                    <p>
                        Somewhere along the way, something clicked. Programming didn’t just make sense — it felt right.
                    </p>
                </section>

                <section>
                    <h2>When It Became Obvious</h2>
                    <p>
                        As my understanding grew, so did my ideas. Suddenly, I couldn’t stop thinking about all
                        the applications I could build to make everyday work easier.
                    </p>
                    <p>
                        Another fantastic thing was that, unlike many other professions, making mistakes didn’t hurt
                        anyone physically or financially. If I broke something, I could simply delete the code and try
                        again. I did this several times, and failing and trying again was an excellent way to learn how to code.
                    </p>
                    <p>
                        As I started building more and more complex applications, I realized that frontend development alone wasn’t
                        enough — everything eventually needs a backend. So I searched for another training program and
                        enrolled in, and completed, a one-year full-stack development program at{" "}
                        <a
                            href="https://itcareerswitch.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            IT Career Switch
                        </a>,
                        where I gained in-depth experience with both front-end and back-end technologies, including React, Redux,
                        Bootstrap, PHP, Python, Node.js, REST API, PostgreSQL, MariaDB, Git & GitHub, Jest, Mocha, and jQuery.
                    </p>
                </section>

                <section>
                    <h2>All In</h2>
                    <p>
                        After all this, there was no doubt left. This wasn’t just a hobby; it was a career change — a
                        direction that finally felt right.
                    </p>
                    <p>
                        This is where Part 1 ends. I’ll share Part 2 soon, where things will start getting very real.                    </p>
                </section>

                <PostNavigation title="How I Became a Full-Stack Developer" />
            </article>
        </>
    );
}
