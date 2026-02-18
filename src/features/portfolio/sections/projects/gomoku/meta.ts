import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/gomoku.webp";

export const meta: Project = {
    title: "Gomoku",
    slug: "gomoku",
    cover,
    alt: "Gomoku",
    excerpt: "Short description of the project.",
    info: "2025",
    labels: ["HTML", "Sass", "JavaScript", "React"],
    liveDemoUrl: "https://karoly-git.github.io/gomoku/",
    gitHubUrl: "https://github.com/Karoly-Git/gomoku",
    isGitHubRepoPrivate: false,
    isActive: false,
};
