import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ title, cover, alt, excerpt, date, readTime, slug }) {
    return (
        <div className="blog-card">
            <div className="blog-img">
                <img src={cover} alt={alt} />
            </div>

            <div className="blog-content">
                <p className="blog-meta">
                    <span>{date}</span> • <span>{readTime} min read</span>
                </p>

                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>

                <Link to={`/blog/${slug}`} className="blog-read-btn">
                    Read More →
                </Link>
            </div>
        </div>
    );
}
