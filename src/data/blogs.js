import HowIBecameAFullStackDeveloper from "../components/pages/blog/posts/0001_HowIBecameAFullStackDeveloper/HowIBecameAFullStackDeveloper";
import how_i_became_a_full_stack_developer from "../components/pages/blog/posts/0001_HowIBecameAFullStackDeveloper/how_i_became_a_full_stack_developer.webp";

import React_QandA from "../components/pages/blog/posts/0002_React_QandA/React_QandA";
import react_QandA from "../components/pages/blog/posts/0002_React_QandA/react_QandA.webp";

import BuildingALorryTrackingSystemStart from "../components/pages/blog/posts/0003_BuildingALorryTrackingSystemStart/BuildingALorryTrackingSystemStart";
import building_a_lorry_tracking_system_start from "../components/pages/blog/posts/0003_BuildingALorryTrackingSystemStart/building_a_lorry_tracking_system_start.webp";

export const blogs = [
    {
        title: "How I Became a Full-Stack Developer",
        slug: "how-i-became-a-full-stack-developer",
        component: HowIBecameAFullStackDeveloper,
        cover: how_i_became_a_full_stack_developer,
        alt: "Journey into programming and becoming a full-stack developer",
        excerpt:
            "A surprising story about early years, a 15-year detour, rediscovering programming, and becoming a full-stack developer.",
        date: "4th November 2025",
        categories: ["sparks", "career"],
        isActive: true
    },
    {
        title: "20 Common React Theoretical Questions",
        slug: "20-common-react-theoretical-questions",
        component: React_QandA,
        cover: react_QandA,
        alt: "20 Common React theoretical questions explained",
        excerpt:
            "A curated list of 20 common React theoretical questions with explanations to help you master core concepts.",
        date: "13th December 2025",
        categories: ["react", "frontend", "Q&A"],
        isActive: true
    },
    {
        title: "New project: Building a Lorry Tracking System",
        slug: "building-a-lorry-tracking-system-start",
        component: BuildingALorryTrackingSystemStart,
        cover: building_a_lorry_tracking_system_start,
        alt: "Real-time lorry tracking dashboard for production site operations",
        excerpt:
            "I am starting a new project which is a real-time lorry tracking full-stack web application to replace handwritten logs and improve visibility on a busy production site.",
        date: "17th December 2025",
        categories: ["projects", "full-stack", "systems"],
        isActive: true
    }
];
