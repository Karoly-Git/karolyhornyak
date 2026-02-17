import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Form Submit Now",
    slug: "formsubmitnow",
    component: ProjectComponent,
    cover,
    alt: "Form Submit Now",
    excerpt:
        "A plug-and-play contact form API that lets developers send form submissions directly to email—no backend required.",
    date: "2025",
    labels: ["HTML", "CSS", "JavaScript", "Node.js"],
    liveDemoUrl: "https://karoly-git.github.io/form-submit-now/",
    gitHubUrl: "https://github.com/Karoly-Git/form-submit-now",
    isGitHubRepoPrivate: false,
    isActive: true,
};
