import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/data/projects.data";

export const meta: Project = {
    title: "Massage Salon",
    slug: "talpak",
    component: ProjectComponent,
    cover,
    alt: "Talpak",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["React", "JavaScript", "Node.js", "Sass"],
    liveDemoUrl: "https://talpak.hu/",
    gitHubUrl: "https://github.com/Karoly-Git/talpak",
    isGitHubRepoPrivate: true,
    isActive: false,
};
