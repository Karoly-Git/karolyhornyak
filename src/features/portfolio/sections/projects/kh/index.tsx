import { useEffect } from "react";
import PostNavigation from "@/features/navigation/post-navigation";
import { meta } from "./meta";

import "@/features/portfolio/sections/projects/projects.scss";

export default function Kh() {
    useEffect(() => {
        window.scrollTo(0, 0);

        const baseUrl = window.location.origin;
        const fullUrl = `${baseUrl}/project/${meta.slug}`;
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
                    <h2>Project Overview</h2>
                    <p>
                        This portfolio is a production-grade React Single Page Application
                        designed to showcase projects, client work, and technical capabilities
                        in a clear and performance-focused environment.
                    </p>
                    <p>
                        The platform was engineered not only as a presentation layer,
                        but as a scalable foundation that reflects modern frontend
                        architecture and deployment practices.
                    </p>
                </section>

                <section>
                    <h2>Architecture & Structure</h2>
                    <p>
                        The application is built using a feature-driven architecture,
                        separating domain logic into distinct modules such as navigation,
                        portfolio sections, and shared components.
                    </p>
                    <p>
                        Projects and blog posts are dynamically generated using
                        Vite’s <code>import.meta.glob</code>, enabling automatic
                        route creation and route-level code splitting without manual configuration.
                    </p>
                    <p>
                        This structure ensures maintainability, scalability, and
                        clean separation of concerns as the platform evolves.
                    </p>
                </section>

                <section>
                    <h2>Performance & Code Splitting</h2>
                    <p>
                        Each project and blog entry is lazy-loaded using dynamic imports,
                        reducing the initial bundle size and improving time-to-interactive.
                    </p>
                    <p>
                        Route-based code splitting ensures that users only download
                        the JavaScript required for the current page, significantly
                        optimising load performance.
                    </p>
                    <p>
                        Additional optimisations include structured asset management,
                        image compression, and Progressive Web App caching strategies.
                    </p>
                </section>

                <section>
                    <h2>Progressive Web App</h2>
                    <p>
                        The portfolio is configured as a Progressive Web App using Workbox.
                        Service workers enable asset precaching, runtime caching strategies,
                        and offline capability.
                    </p>
                    <p>
                        Careful configuration ensures compatibility with Firebase Hosting
                        and proper SPA navigation fallback behaviour across all routes.
                    </p>
                </section>

                <section>
                    <h2>Deployment & Tooling</h2>
                    <p>
                        The application is built with Vite for fast development and
                        optimised production bundling, and deployed via Firebase Hosting
                        for global delivery and reliable uptime.
                    </p>
                    <p>
                        TypeScript enforces type safety across project metadata,
                        routing logic, and component boundaries, strengthening long-term maintainability.
                    </p>
                </section>

                <section>
                    <h2>What This Project Represents</h2>
                    <p>
                        This project represents my approach to building production-ready
                        frontend applications: prioritising performance, scalability,
                        and architectural clarity from the outset.
                    </p>
                    <p>
                        It serves both as a professional portfolio and as a demonstration
                        of modern frontend engineering principles in practice.
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
