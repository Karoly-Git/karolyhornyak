import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/mary.webp";

export const meta: Project = {
    title: "Mary's Dressmaking Workshop",
    slug: "mary",
    cover,
    alt: "Mary",
    excerpt:
        "A handcrafted business website designed to showcase bespoke dressmaking services and provide an elegant, accessible client experience.",
    info: "Freelance client project",
    labels: ["React", "Vite", "JavaScript", "Sass", "Node.js"],
    liveDemoUrl: "https://www.maryvarrodaja.hu/",
    gitHubUrl: "https://github.com/Karoly-Git/mary-varrodaja-vite",
    isGitHubRepoPrivate: false,
    isActive: true,
};
