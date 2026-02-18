import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/dmf.webp";

export const meta: Project = {
    title: "DMF Plumbing & Heating",
    slug: "dmf",
    cover,
    alt: "DMF",
    excerpt:
        "A responsive React + Node.js service Progressive Web App showcasing plumbing and heating services.",
    info: "Freelance client project",
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://dmfplumbingandheating.com/",
    gitHubUrl: "https://github.com/Karoly-Git/dmf-plumbing",
    isGitHubRepoPrivate: false,
    isActive: true,
};
