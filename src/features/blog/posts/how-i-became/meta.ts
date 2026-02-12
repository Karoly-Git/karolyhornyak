import cover from "./cover.webp";
import Post from "./index";
import type { BlogPost } from "@/data/blogs";

export const meta: BlogPost = {
    title: "How I Became a Full-Stack Developer",
    slug: "how-i-became-a-full-stack-developer",
    component: Post,
    cover,
    alt: "Journey into programming and becoming a full-stack developer",
    excerpt:
        "A surprising story about early years, a 15-year detour, rediscovering programming, and becoming a full-stack developer.",
    date: "4th November 2025",
    categories: ["sparks", "career"],
    isActive: true,
};
