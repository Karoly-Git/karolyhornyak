import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/data/projects.data";

export const meta: Project = {
    title: "Weather Info",
    slug: "weather",
    component: ProjectComponent,
    cover,
    alt: "Weather Info",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["HTML", "CSS", "JS"],
    liveDemoUrl: "https://karoly-git.github.io/weather-app/",
    gitHubUrl: "https://github.com/Karoly-Git/weather-app",
    isGitHubRepoPrivate: false,
    isActive: false,
};
