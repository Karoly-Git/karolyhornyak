import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/fsn.webp";

export const meta: Project = {
    title: "Form Submit Now",
    slug: "fsn",
    cover,
    alt: "Form Submit Now",
    excerpt:
        "A plug-and-play form submission API that enables developers to send contact form data directly to email without building a backend service.",
    info: "Developer utility API",
    labels: ["HTML", "CSS", "JavaScript", "Node.js"],
    liveDemoUrl: "https://karoly-git.github.io/form-submit-now/",
    gitHubUrl: "https://github.com/Karoly-Git/form-submit-now",
    isGitHubRepoPrivate: false,
    isActive: true,
};
