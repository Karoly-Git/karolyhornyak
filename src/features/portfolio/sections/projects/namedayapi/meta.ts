import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/namedayapi.webp";

export const meta: Project = {
    title: "Name Day API",
    slug: "namedayapi",
    cover,
    alt: "Name Day API",
    excerpt:
        "A production-ready REST API delivering structured name day data with filtering by month, date, and country, featuring rate limiting and OpenAPI documentation.",
    info: "Public REST API",
    labels: ["Node.js", "Express.js", "REST API", "Swagger / OpenAPI", "Rate Limiting", "Heroku"],
    liveDemoUrl: "https://karoly-git.github.io/name-day-frontend/",
    gitHubUrl: "https://github.com/Karoly-Git/name-day-backend",
    isGitHubRepoPrivate: false,
    isActive: true,
};