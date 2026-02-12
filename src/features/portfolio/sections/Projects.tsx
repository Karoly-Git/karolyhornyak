import { useState, useRef } from "react";
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
    const gridRef = useRef<HTMLDivElement | null>(null);

    const sectionInView = useInView(sectionRef, {
        once: true,
        amount: 0.1,
    });

    const activeProjects = projects.filter((p) => p.isActive);
    const [visibleCount, setVisibleCount] = useState<number>(3);

    const allVisible = visibleCount >= activeProjects.length;

    const handleToggle = () => {
        if (allVisible) {
            setVisibleCount(3);
            sectionRef.current?.scrollIntoView({ behavior: "smooth" });
        } else {
            const nextCount = visibleCount + 3;
            setVisibleCount(nextCount);

            setTimeout(() => {
                const grid = gridRef.current;

                if (grid && grid.children && grid.children[visibleCount]) {
                    (grid.children[visibleCount] as HTMLElement).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 150);
        }
    };

    return (
        <section id="projects" ref={sectionRef}>
            <m.h2
                initial={{ opacity: 0, y: 40 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
            >
                Featured Projects
            </m.h2>

            <m.p
                className="projects-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 }}
            >
                A selection of my work, built with precision, usability, and performance in mind
            </m.p>

            <m.div
                ref={gridRef}
                className="project-grid premium-grid"
                variants={containerVariants}
                initial="hidden"
                animate={sectionInView ? "show" : "hidden"}
            >
                {activeProjects.slice(0, visibleCount).map((project) => (
                    <m.div key={project.name} variants={itemVariants}>
                        <ProjectCard {...project} />
                    </m.div>
                ))}
            </m.div>

            <m.div
                className="show-more-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <button className="show-more-btn" onClick={handleToggle}>
                    {allVisible ? "Show less" : "Show more"}
                </button>
            </m.div>
        </section>
    );
}
