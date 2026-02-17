import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Sewing Workshop",
    slug: "mary",
    component: ProjectComponent,
    cover,
    alt: "Mary",
    excerpt:
        "A multilingual tailoring Progressive Web App built with React, Node.js, and Sass.",
    date: "2025",
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://www.maryvarrodaja.hu/",
    gitHubUrl: "https://github.com/Karoly-Git/mary-varrodaja-vite",
    isGitHubRepoPrivate: false,
    isActive: true,
};
