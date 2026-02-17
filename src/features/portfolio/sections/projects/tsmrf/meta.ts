import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/data/projects.data";

export const meta: Project = {
    title: "Transfer Station Apps",
    slug: "tsmrf",
    component: ProjectComponent,
    cover,
    alt: "TS & MRF",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["React", "JavaScript", "Node.js", "Sass"],
    liveDemoUrl: "https://transferstation.co.uk/",
    gitHubUrl: "https://github.com/Karoly-Git/transferstation",
    isGitHubRepoPrivate: false,
    isActive: false,
};
