import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/cd.webp";

export const meta: Project = {
    title: "Company Directory",
    slug: "cd",
    cover,
    alt: "Company Directory",
    excerpt: "Short description of the project.",
    info: "2025",
    labels: ["HTML", "jQuery", "CSS", "PHP"],
    liveDemoUrl: "https://karolyhornyak.com/company-directory/",
    gitHubUrl:
        "https://github.com/Karoly-Git/karolyHornyak/tree/main/project2",
    isGitHubRepoPrivate: false,
    isActive: false,
};
