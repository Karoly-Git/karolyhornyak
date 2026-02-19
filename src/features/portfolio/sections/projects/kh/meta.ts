import type { Project } from "@/features/portfolio/sections/projects/projects.data";
import cover from "@/assets/images/projects/kh.webp";

export const meta: Project = {
    title: "Karoly Hornyak | Full-Stack Developer",
    slug: "kh",
    cover,
    alt: "Karoly Hornyak | Full-Stack Developer",
    excerpt: "A performance-focused developer portfolio built as a Progressive Web App, designed to showcase projects and technical expertise with speed and clarity.",
    info: "Personal portfolio",
    labels: ["React", "TypeScript", "PWA", "Firebase"],
    liveDemoUrl: "https://karolyhornyak.com/",
    gitHubUrl: "https://github.com/Karoly-Git/karolyhornyak",
    isGitHubRepoPrivate: false,
    isActive: true,
};

/**
 * 
 * labels: [
  // Core
  "React",
  "TypeScript",
  "Vite",

  // Routing & Architecture
  "React Router",
  "Dynamic Routing",
  "Code Splitting",
  "Feature-Driven Architecture",

  // PWA
  "PWA",
  "Workbox",
  "Service Workers",

  // Deployment
  "Firebase Hosting",

  // UI & UX
  "Framer Motion",
  "Sass",

  // Performance
  "Lazy Loading",
  "Image Optimization"
]

 */
