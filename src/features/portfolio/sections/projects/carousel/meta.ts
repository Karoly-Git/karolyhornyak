import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Image Carousel",
    slug: "carousel",
    component: ProjectComponent,
    cover,
    alt: "Carousel",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["HTML", "CSS", "JS"],
    liveDemoUrl: "https://karoly-git.github.io/img-carousel/",
    gitHubUrl: "https://github.com/Karoly-Git/gomoku",
    isGitHubRepoPrivate: false,
    isActive: false,
};
