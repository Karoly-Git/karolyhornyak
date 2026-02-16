import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/data/projects.data";

export const meta: Project = {
    title: "Name Day API",
    slug: "gazetteer",
    component: ProjectComponent,
    cover,
    alt: "Name Day API",
    excerpt:
        "A simple REST API that provides name day information for the entire year, with filtering options by month, date, and country.",
    date: "2025",
    labels: ["Node.js", "Express.js", "JSON", "Swagger", "GitHub", "Heroku"],
    liveDemoUrl: "https://karoly-git.github.io/name-day-frontend/",
    gitHubUrl: "https://github.com/Karoly-Git/name-day-backend",
    isGitHubRepoPrivate: false,
    isActive: true,
};