import cover from "./cover.webp";
import ProjectComponent from "./index";
import type { Project } from "@/features/portfolio/sections/projects/projects.data";

export const meta: Project = {
    title: "Gazetteer",
    slug: "gazetteer",
    component: ProjectComponent,
    cover,
    alt: "Gazetteer App",
    excerpt:
        "An interactive world explorer that lets users view real-time country data—including weather, news, borders, population, photos, and currency—powered by multiple public APIs and an interactive Leaflet map.",
    date: "2025",
    labels: ["HTML", "CSS", "JavaScript", "PHP", "Leaflet.js", "APIs"],
    liveDemoUrl: "https://transferstation.co.uk/gazetteer/",
    gitHubUrl: "https://github.com/Karoly-Git/gazetteer",
    isGitHubRepoPrivate: false,
    isActive: true,
};
