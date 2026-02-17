import { Link } from "react-router-dom";
import type { BlogPost } from "@/features/portfolio/blog/blogs.data";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

type CardProps =
    | { variant: "blog"; data: BlogPost }
    | { variant: "project"; data: Project };

export default function Card(props: CardProps) {
    const { variant, data } = props;

    const image = data.cover;
    const title = data.title;
    const excerpt = data.excerpt;
    const date = data.date;
    const labels = data.labels;

    return (
        <div className="card">
            {/* MAIN CLICKABLE AREA */}
            <Link
                to={`/${variant}/${data.slug}`}
                className="card-main-link"
            >
                <div className="card-image">
                    <img src={image} alt={data.alt} />
                </div>

                <div className="card-content">
                    {date && <span className="card-date">{date}</span>}

                    {labels?.length > 0 && (
                        <div className="card-labels">
                            {labels.map((label) => (
                                <span key={label} className="card-badge">
                                    {label}
                                </span>
                            ))}
                        </div>
                    )}

                    <h3 className="card-title">{title}</h3>

                    <p className="card-excerpt">{excerpt}</p>
                </div>
            </Link>

            {/* ACTION BUTTONS (NOT INSIDE LINK) */}
            {variant === "project" && (
                <div className="card-actions">
                    <button
                        type="button"
                        className="btn secondary"
                        onClick={() =>
                            window.open(
                                data.liveDemoUrl,
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                    >
                        Live Demo
                    </button>

                    {!data.isGitHubRepoPrivate && (
                        <button
                            type="button"
                            className="btn secondary"
                            onClick={() =>
                                window.open(
                                    data.gitHubUrl,
                                    "_blank",
                                    "noopener,noreferrer"
                                )
                            }
                        >
                            GitHub
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
