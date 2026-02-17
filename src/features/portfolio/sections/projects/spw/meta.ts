import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Photography Studio",
    slug: "spw",
    component: ProjectComponent,
    cover,
    alt: "SPW",
    excerpt:
        "A fully responsive photography studio Progressive Web App built with React, Node.js, and Sass.",
    date: "2025",
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://www.sparklingwillowphotography.co.uk/",
    gitHubUrl:
        "https://github.com/Karoly-Git/sparkling-willow-photography",
    isGitHubRepoPrivate: false,
    isActive: true,
};
