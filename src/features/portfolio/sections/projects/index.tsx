import { projects } from "@/features/portfolio/sections/projects/projects.data";
import Card from "@/shared/components/card";

import "../sections.scss";
import "./projects.scss";

export default function Projects() {
    const activeProjects = projects.filter((p) => p.isActive);

    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>

                <div className="content">
                    <h3 className="subtitle">
                        Side projects and practical applications built with
                        modern web tools
                    </h3>

                    <div className="grid">
                        {activeProjects.map((project) => (
                            <div key={project.slug}>
                                <Card
                                    variant="project"
                                    data={project}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}