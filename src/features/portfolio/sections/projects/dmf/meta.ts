import cover from "./cover.webp";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Plumbing & Heating",
    slug: "plumbingandheating",
    cover,
    alt: "DMF",
    excerpt:
        "A responsive React + Node.js service Progressive Web App showcasing plumbing and heating services.",
    date: `2024 - ${new Date().getFullYear()}`,
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://dmfplumbingandheating.com/",
    gitHubUrl: "https://github.com/Karoly-Git/dmf-plumbing",
    isGitHubRepoPrivate: false,
    isActive: true,
};
