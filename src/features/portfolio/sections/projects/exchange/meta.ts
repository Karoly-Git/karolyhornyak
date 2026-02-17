import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Exchange Rate",
    slug: "exchange",
    component: ProjectComponent,
    cover,
    alt: "Exchange",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    liveDemoUrl: "https://karoly-git.github.io/napiarfolyam/",
    gitHubUrl: "https://github.com/Karoly-Git/napiarfolyam",
    isGitHubRepoPrivate: false,
    isActive: false,
};
