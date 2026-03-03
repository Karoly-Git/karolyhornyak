import { useEffect } from "react";
import PostNavigation from "@/features/navigation/post-navigation";
import { meta } from "./meta";

import "@/features/portfolio/sections/projects/projects.scss";

export default function Mary() {
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
                        A detailed project overview is currently in development and will be published soon.
                    </p>
                    <p>
                        This section will outline the architecture, technical decisions, and
                        implementation strategy behind the project.
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
