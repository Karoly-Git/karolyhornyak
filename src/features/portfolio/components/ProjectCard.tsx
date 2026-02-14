import type { Project } from "@/data/projects";

type ProjectCardProps = Project;

export default function ProjectCard({
    name,
    src,
    alt,
    description,
    category,
    stack,
    liveDemoUrl,
    gitHubUrl,
    isRepoPrivate,
}: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="img-container">
                <img src={src} alt={alt} />
                <h5>{category}</h5>
            </div>

            <h3>{name}</h3>
            <p>{stack}</p>
            <p>{description}</p>

            <div className="button-container">
                <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn demo-btn"
                >
                    Live Demo
                </a>

                {!isRepoPrivate && (
                    <a
                        href={gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github-btn"
                    >
                        GitHub
                    </a>
                )}
            </div>
        </div>
    );
}
