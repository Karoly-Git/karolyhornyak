import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/bankholiday.webp";

export const meta: Project = {
    title: "UK Bank Holidays",
    slug: "bankholiday",
    cover,
    alt: "Bank Holiday",
    excerpt:
        "A fast React and Vite application that fetches official UK bank holiday data and presents it in a clean, responsive interface.",
    info: "API-driven frontend application",
    labels: ["React", "Vite", "JavaScript", "CSS"],
    liveDemoUrl: "https://karoly-git.github.io/bank-holidays-uk/",
    gitHubUrl: "https://github.com/Karoly-Git/bank-holidays-uk",
    isGitHubRepoPrivate: false,
    isActive: true,
};
