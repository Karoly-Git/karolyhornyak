import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogs";
import type { Project } from "@/data/projects";

type CardProps =
    | { variant: "blog"; data: BlogPost }
    | { variant: "project"; data: Project };

export default function Card(props: CardProps) {
    const { variant, data } = props;

    // Normalize fields
    const image =
        variant === "blog" ? data.cover : data.src;

    const title =
        variant === "blog" ? data.title : data.name;

    const description =
        variant === "blog" ? data.excerpt : data.description;

    const date =
        variant === "blog" ? data.date : undefined;

    const badges =
        variant === "blog"
            ? data.categories
            : data.stack.split(", ");

    return (
        <div className="card">
            <div className="card-img">
                <img src={image} alt={data.alt} />
            </div>

            {date && <p className="card-date">{date}</p>}

            {badges?.length > 0 && (
                <div className="card-badges">
                    {badges.map((badge) => (
                        <span key={badge} className="card-badge">
                            {badge}
                        </span>
                    ))}
                </div>
            )}

            <h3 className="card-title">{title}</h3>

            <p className="card-description">{description}</p>

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

                    {!data.isRepoPrivate && (
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
