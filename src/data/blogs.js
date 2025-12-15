import HowIBecomeAFullStackDeveloper from "../components/pages/blog/posts/HowIBecomeAFullStackDeveloper/HowIBecomeAFullStackDeveloper";
import how_i_become_a_full_stack_developer from "../components/pages/blog/posts/HowIBecomeAFullStackDeveloper/how_i_become_a_full_stack_developer.webp";

import React_QandA_2025_12_13 from "../components/pages/blog/posts/React_QandA_2025_12_13/React_QandA_2025_12_13";
import react_QandA_2025_12_13 from "../components/pages/blog/posts/React_QandA_2025_12_13/react_QandA_2025_12_13.webp";

export const blogs = [
    {
        title: "How I Become a Full-Stack Developer",
        slug: "how-i-become-a-full-stack-developer",
        component: HowIBecomeAFullStackDeveloper,
        cover: how_i_become_a_full_stack_developer,
        alt: "Journey into programming and becoming a full-stack developer",
        excerpt:
            "A surprising story about early years, a 15-year detour, rediscovering programming, and becoming a full-stack developer.",
        date: "4th November 2025",
        categories: ["sparks", "career"],
        isActive: true
    },
    {
        title: "20 Common React Theoretical Questions",
        slug: "20-common-react-theoretical-questions-2025-12-13",
        component: React_QandA_2025_12_13,
        cover: react_QandA_2025_12_13,
        alt: "20 Common React theoretical questions explained",
        excerpt:
            "A curated list of 20 common React theoretical questions with explanations to help you master core concepts.",
        date: "13th December 2025",
        categories: ["react", "frontend", "Q&A"],
        isActive: true
    }
];
