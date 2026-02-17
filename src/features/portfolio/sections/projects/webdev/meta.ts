import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/data/projects.data";

export const meta: Project = {
    title: "WebDevMe",
    slug: "webdev",
    component: ProjectComponent,
    cover,
    alt: "WDM",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["React", "JavaScript", "Node.js", "Sass"],
    liveDemoUrl: "https://webdevme.co.uk/",
    gitHubUrl: "https://github.com/Karoly-Git/portfolio",
    isGitHubRepoPrivate: false,
    isActive: false,
};
