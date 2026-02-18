import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/spw.webp";

export const meta: Project = {
    title: "Sparkling Willow Photography",
    slug: "spw",
    cover,
    alt: "SPW",
    excerpt:
        "A fully responsive photography business platform built as a Progressive Web App, designed to showcase portfolios and support client bookings.",
    info: "Freelance client project",
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://www.sparklingwillowphotography.co.uk/",
    gitHubUrl:
        "https://github.com/Karoly-Git/sparkling-willow-photography",
    isGitHubRepoPrivate: false,
    isActive: true,
};
