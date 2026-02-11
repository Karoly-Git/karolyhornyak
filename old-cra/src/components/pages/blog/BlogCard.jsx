import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({
    title,
    cover,
    alt,
    excerpt,
    date,
    slug,
    categories = []
}) {
    return (
        <div className="blog-card">
            <div className="blog-img">
                <img src={cover} alt={alt} />
            </div>

            <div className="blog-content">
                <p className="blog-meta">
                    <span>{date}</span>
                </p>

                {/* Categories, later make reusable element as it's the same in posts */}
                {categories.length > 0 && (
                    <div className="blog-categories">
                        {categories.map(category => (
                            <span
                                key={category}
                                className="blog-category"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                )}

                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>

                <Link to={`/blog/${slug}`} className="blog-read-btn">
                    Read More →
                </Link>
            </div>
        </div>
    );
}
