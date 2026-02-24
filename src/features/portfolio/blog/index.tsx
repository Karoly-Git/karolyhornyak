import { useRef, useEffect } from "react";

import { blogs } from "./blogs.data";

import Card from "@/shared/components/card";

export default function Blog() {
    const blogRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activePosts = blogs
        .filter((b) => b.isActive)
        .sort((a, b) =>
            new Date(b.info.replace(/(\d+)(st|nd|rd|th)/, "$1")).getTime() -
            new Date(a.info.replace(/(\d+)(st|nd|rd|th)/, "$1")).getTime()
        );

    return (
        <section id="blog" ref={blogRef}>
            <div className="container">
                <h2>Blogs</h2>

                <div className="content">
                    <h3 className="subtitle">
                        Thoughts & insights
                    </h3>

                    <div className="grid">
                        {activePosts.map((post) => (
                            <div key={post.slug}>
                                <Card
                                    variant="blog"
                                    data={post}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}