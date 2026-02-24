import type { BlogPost } from "@/features/portfolio/blog/blogs.data";
import cover from "@/assets/images/blogs/ci-cd-case-study.webp";

export const meta: BlogPost = {
    title: "From Zero to Production: CI/CD with Firebase (and a Linux Surprise)",
    slug: "ci-cd-firebase-case-study",
    cover,
    alt: "CI/CD pipeline setup with GitHub Actions and Firebase Hosting",
    excerpt:
        "A real-world case study of setting up CI/CD with GitHub Actions and Firebase Hosting — including debugging Node versions, TypeScript builds, and a tricky Linux case-sensitivity issue.",
    info: "24th February 2026",
    labels: ["DevOps", "CI/CD", "Firebase", "GitHub Actions"],
    isActive: true,
};