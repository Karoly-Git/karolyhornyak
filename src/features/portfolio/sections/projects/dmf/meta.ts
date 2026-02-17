import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Plumbing & Heating",
    slug: "plumbingandheating",
    component: ProjectComponent,
    cover,
    alt: "DMF",
    excerpt:
        "A responsive React + Node.js service Progressive Web App showcasing plumbing and heating services.",
    date: "2025",
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://dmfplumbingandheating.com/",
    gitHubUrl: "https://github.com/Karoly-Git/dmf-plumbing",
    isGitHubRepoPrivate: false,
    isActive: true,
};
