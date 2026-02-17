import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/data/projects.data";

export const meta: Project = {
    title: "Gomoku",
    slug: "gomoku",
    component: ProjectComponent,
    cover,
    alt: "Gomoku",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["HTML", "Sass", "JavaScript", "React"],
    liveDemoUrl: "https://karoly-git.github.io/gomoku/",
    gitHubUrl: "https://github.com/Karoly-Git/gomoku",
    isGitHubRepoPrivate: false,
    isActive: false,
};
