import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Slider",
    slug: "slider",
    component: ProjectComponent,
    cover,
    alt: "Slider",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["HTML", "CSS", "JS"],
    liveDemoUrl: "https://karoly-git.github.io/review-slider/",
    gitHubUrl: "https://github.com/Karoly-Git/review-slider",
    isGitHubRepoPrivate: false,
    isActive: false,
};
