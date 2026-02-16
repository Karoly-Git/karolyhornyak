import type { ComponentType } from "react";


export interface Project {
    title: string;
    slug: string;
    component: ComponentType;
    cover: string;
    alt: string;
    excerpt: string;
    date: string,
    labels: string[];
    liveDemoUrl: string;
    gitHubUrl: string;
    isGitHubRepoPrivate?: boolean;
    isActive: boolean;
}

import { meta as namedayapi } from "@/features/portfolio/sections/projects/namedayapi/meta";
import { meta as gazetteer } from "@/features/portfolio/sections/projects/gazetteer/meta";


export const projects: Project[] = [
    namedayapi,
    gazetteer
];