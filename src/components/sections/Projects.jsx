import React, { useState, useEffect } from "react";
import { motion as m, useInView } from "framer-motion";
import ProjectCard from "../ProjectCard";
import { projects } from "../../data/projects";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Projects({ projectsRef }) {
    const sectionInView = useInView(projectsRef, {
        triggerOnce: true,
        threshold: 0.1,
    });

    const activeProjects = projects.filter((p) => p.isActive);

    return (
        <section id="pro" ref={projectsRef}>
            <m.h2
                className="projects-title"
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
                A curated selection of my work — crafted with precision, usability, and performance in mind.
            </m.p>

            <m.div
                className="project-grid premium-grid"
                variants={containerVariants}
                initial="hidden"
                animate={sectionInView ? "show" : ""}
            >
                {activeProjects.map((project, index) => (
                    <m.div key={index} variants={itemVariants}>
                        <ProjectCard {...project} />
                    </m.div>
                ))}
            </m.div>
        </section>
    );
}
