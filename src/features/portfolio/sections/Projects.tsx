import { useRef } from "react";
import { motion as m, useInView, type Variants } from "framer-motion";
import ProjectCard from "@/features/portfolio/components/ProjectCard";
import { projects } from "@/data/projects";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function Projects() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const sectionInView = useInView(sectionRef, {
        once: true,
        amount: 0.1,
    });

    const activeProjects = projects.filter((p) => p.isActive);

    return (
        <section id="projects" ref={sectionRef}>
            <div className="container">
                <m.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9 }}
                >
                    Recent Projects
                </m.h2>

                <div className="content">
                    <m.h3
                        className="projects-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, delay: 0.15 }}
                    >
                        Side projects and practical applications built with modern web tools
                    </m.h3>

                    <m.div
                        className="project-grid premium-grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate={sectionInView ? "show" : "hidden"}
                    >
                        {activeProjects.map((project) => (
                            <m.div key={project.name} variants={itemVariants}>
                                <ProjectCard {...project} />
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    );
}
