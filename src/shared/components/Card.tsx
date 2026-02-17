import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogs.data";
import type { Project } from "@/data/projects.data";

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
        <Link to={`/${variant}/${data.slug}`} className="card">
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

                {variant === "project" && (
                    <div
                        className="card-actions"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <a
                            href={data.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn secondary"
                        >
                            Live Demo
                        </a>

                        {!data.isGitHubRepoPrivate && (
                            <a
                                href={data.gitHubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn secondary"
                            >
                                GitHub
                            </a>
                        )}
                    </div>
                )}
            </div>
        </Link>
    );
}
