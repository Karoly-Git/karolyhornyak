import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Bank Holiday",
    slug: "bankholiday",
    component: ProjectComponent,
    cover,
    alt: "Bank Holiday",
    excerpt:
        "A fast React + Vite app that fetches official UK bank-holiday data and displays it in a clear, responsive interface.",
    date: "2025",
    labels: ["React", "Vite", "JavaScript", "CSS"],
    liveDemoUrl: "https://karoly-git.github.io/bank-holidays-uk/",
    gitHubUrl: "https://github.com/Karoly-Git/bank-holidays-uk",
    isGitHubRepoPrivate: false,
    isActive: true,
};
