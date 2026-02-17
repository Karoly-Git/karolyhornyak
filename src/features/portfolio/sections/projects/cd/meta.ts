import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Company Directory",
    slug: "companydirectory",
    component: ProjectComponent,
    cover,
    alt: "Company Directory",
    excerpt: "Short description of the project.",
    date: "2025",
    labels: ["HTML", "jQuery", "CSS", "PHP"],
    liveDemoUrl: "https://karolyhornyak.com/company-directory/",
    gitHubUrl:
        "https://github.com/Karoly-Git/karolyHornyak/tree/main/project2",
    isGitHubRepoPrivate: false,
    isActive: false,
};
