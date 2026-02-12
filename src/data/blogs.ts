import type { ComponentType } from "react";

export type BlogPost = {
    title: string;
    slug: string;
    component: ComponentType;
    cover: string;
    alt: string;
    excerpt: string;
    date: string;
    categories: string[];
    isActive: boolean;
};

import { meta as howIBecame } from "@/features/blog/posts/how-i-became/meta";
import { meta as reactQna } from "@/features/blog/posts/react-qna/meta";
import { meta as lorryTracking } from "@/features/blog/posts/lorry-tracking/meta";

export const blogs: BlogPost[] = [
    howIBecame,
    reactQna,
    lorryTracking,
];
