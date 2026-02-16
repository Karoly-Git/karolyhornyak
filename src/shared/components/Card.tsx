import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogs.data";
import type { Project } from "@/data/projects.data";

type CardProps =
    | { variant: "blog"; data: BlogPost }
    | { variant: "project"; data: Project };

export default function Card(props: CardProps) {
    const { variant, data } = props;

    // Normalize fields
    const image = data.cover;

    const title = data.title;

    const excerpt = data.excerpt;

    const date = data.date;

    const labels = data.labels;

    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt={data.alt} />
            </div>

            {date && <p className="card-date">{date}</p>}

            {labels?.length > 0 && (
                <div className="card-labels">
                    {labels.map((badge) => (
                        <span key={badge} className="card-badge">
                            {badge}
                        </span>
                    ))}
                </div>
            )}

            <h3 className="card-title">{title}</h3>

            <p className="card-excerpt">{excerpt}</p>

            {/* BLOG ACTION */}
            {variant === "blog" && (
                <Link
                    to={`/blog/${data.slug}`}
                    className="btn"
                >
                    Read More →
                </Link>
            )}

            {/* PROJECT ACTION */}
            {variant === "project" && (
                <div className="button-container">
                    <a
                        href={data.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        Live Demo
                    </a>

                    {!data.isGitHubRepoPrivate && (
                        <a
                            href={data.gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
