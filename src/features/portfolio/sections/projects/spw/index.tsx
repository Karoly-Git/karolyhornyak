import { useEffect } from "react";
import "@/features/portfolio/blog/blogs.styles.scss";
import PostNavigation from "@/features/navigation/post-navigation/PostNavigation";
import { meta } from "./meta";

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
            <article className="post">
                <h1 className="title">{meta.title}</h1>

                <p className="meta">{meta.excerpt}</p>

                <section>
                    <h2>The Project</h2>
                    <p>
                        This project was a complete redesign and rebuild of a professional
                        photography studio website. The goal was to transform the existing
                        platform into a modern, elegant, and performance-focused Progressive Web App.
                    </p>
                    <p>
                        Photography is visual storytelling — the website needed to reflect
                        that quality while remaining fast, responsive, and easy to navigate.
                    </p>
                </section>

                <section>
                    <h2>Client Feedback</h2>
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
                    <h2>Architecture & Structure</h2>
                    <p>
                        The application was built using React with Vite for fast development
                        and optimised builds. The structure follows a modular component-based architecture.
                    </p>

                    <p>
                        Key structural decisions:
                    </p>

                    <p>
                        • Dedicated pages (Home, Portfolio, Booking, Testimonials, FAQ, etc.)<br />
                        • Reusable components (navigation, sliders, modals, layout sections)<br />
                        • Utility-driven data handling for photos, FAQs, and testimonials<br />
                        • Organised image directory structure for large portfolio management<br />
                        • Sass modular styling system for maintainability
                    </p>

                    <p>
                        The project is deployed via Firebase Hosting, ensuring fast
                        and reliable global delivery.
                    </p>
                </section>

                <section>
                    <h2>Handling a Large Photography Portfolio</h2>
                    <p>
                        One of the main technical challenges was managing hundreds of high-quality images
                        across multiple categories including newborn, maternity, family,
                        wedding, and engagement sessions.
                    </p>

                    <p>
                        To maintain performance without sacrificing quality, I implemented:
                    </p>

                    <p>
                        • Image compression strategies<br />
                        • Lazy loading techniques<br />
                        • Clean routing for album navigation<br />
                        • Structured folder organisation for scalability
                    </p>

                    <p>
                        The result is a visually rich experience with strong performance metrics.
                    </p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <p>
                        • Fully responsive across all devices<br />
                        • Progressive Web App support<br />
                        • Portfolio categorisation system<br />
                        • Review slider component<br />
                        • Booking & contact functionality<br />
                        • SEO-friendly structure<br />
                        • Clean UI focused on imagery
                    </p>
                </section>

                <section>
                    <h2>Outcome</h2>
                    <p>
                        This project represents a real-world business transformation —
                        not just a design refresh. The platform supports an active
                        photography studio and reflects the brand’s professionalism and personality.
                    </p>

                    <p>
                        It demonstrates my ability to deliver production-ready React applications,
                        structure scalable projects, and translate client vision into
                        technical implementation.
                    </p>
                </section>

                <section>
                    <h2>Live Project</h2>
                    <p>
                        <a
                            href={meta.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Live Website
                        </a>
                    </p>

                    {!meta.isGitHubRepoPrivate && (
                        <p>
                            <a
                                href={meta.gitHubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View GitHub Repository
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
