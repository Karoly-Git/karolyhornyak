import cover from "./cover.webp";
import Post from "./index";
import type { BlogPost } from "@/data/blogs";

export const meta: BlogPost = {
    title: "20 Common React Theoretical Questions",
    slug: "20-common-react-theoretical-questions",
    component: Post,
    cover,
    alt: "20 Common React theoretical questions explained",
    excerpt:
        "A curated list of 20 common React theoretical questions with explanations to help you master core concepts.",
    date: "13th December 2025",
    categories: ["react", "frontend", "Q&A"],
    isActive: false,
};
