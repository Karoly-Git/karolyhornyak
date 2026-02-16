import cover from "./cover.webp";
import PostComponent from "./index";
import type { BlogPost } from "@/data/blogs.data";

export const meta: BlogPost = {
    title: "New Project: Building a Lorry Tracking System",
    slug: "building-a-lorry-tracking-system-start",
    component: PostComponent,
    cover,
    alt: "Real-time lorry tracking dashboard for production site operations",
    excerpt:
        "I am starting a new project which is a real-time lorry tracking full-stack web application to replace handwritten logs and improve visibility on a busy production site.",
    date: "17th December 2025",
    categories: ["projects", "full-stack", "systems"],
    isActive: true,
};
