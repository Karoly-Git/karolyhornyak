import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/dog.webp";

export const meta: Project = {
    title: "Watch Dogs",
    slug: "dog",
    cover,
    alt: "Watch Dogs",
    excerpt: "Short description of the project.",
    info: "2025",
    labels: ["HTML", "CSS", "JS"],
    liveDemoUrl: "https://karoly-git.github.io/watch-dog-photos/",
    gitHubUrl: "https://github.com/Karoly-Git/watch-dog-photos",
    isGitHubRepoPrivate: false,
    isActive: false,
};
