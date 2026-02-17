import { useRef } from "react";
import { motion as m, useInView, type Variants } from "framer-motion";

import { projects } from "@/features/portfolio/sections/projects/projects.data";
import Card from "@/shared/components/Card";

import "./projects.scss";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
};

export default function Projects() {
    const sectionRef = useRef<HTMLElement | null>(null);

    const inView = useInView(sectionRef, {
        once: true,
        amount: 0.15,
    });

    const activeProjects = projects.filter((p) => p.isActive);

    return (
        <section id="projects" ref={sectionRef}>
            <div className="container">
                <m.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </m.h2>

                <div className="content">
                    <m.h3
                        className="subtitle"
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Side projects and practical applications built with modern web tools
                    </m.h3>

                    <m.div
                        className="grid"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                    >
                        {activeProjects.map((project) => (
                            <m.div key={project.slug} variants={itemVariants}>
                                <Card variant="project" data={project} />
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    );
}
