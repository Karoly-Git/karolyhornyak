import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/weather.webp";

export const meta: Project = {
    title: "Weather Info",
    slug: "weather",
    cover,
    alt: "Weather Info",
    excerpt: "Short description of the project.",
    info: "2025",
    labels: ["HTML", "CSS", "JS"],
    liveDemoUrl: "https://karoly-git.github.io/weather-app/",
    gitHubUrl: "https://github.com/Karoly-Git/weather-app",
    isGitHubRepoPrivate: false,
    isActive: false,
};
