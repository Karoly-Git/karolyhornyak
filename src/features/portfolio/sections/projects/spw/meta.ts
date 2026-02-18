import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Photography Studio",
    slug: "spw",
    cover: "/images/projects/spw.webp",
    alt: "SPW",
    excerpt:
        "A fully responsive photography studio Progressive Web App built with React, Node.js, and Sass.",
    date: `2023 - ${new Date().getFullYear()}`,
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://www.sparklingwillowphotography.co.uk/",
    gitHubUrl:
        "https://github.com/Karoly-Git/sparkling-willow-photography",
    isGitHubRepoPrivate: false,
    isActive: true,
};
