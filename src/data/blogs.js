import HowIStartedProgramming from "../components/pages/blog/posts/HowIStartedProgramming/HowIStartedProgramming";

import PortfolioReact from "../components/pages/blog/posts/PortfolioReact";
import DesignTips from "../components/pages/blog/posts/DesignTips";

import how_i_started_programming from "../components/pages/blog/posts/HowIStartedProgramming/how-i-started-programming.jpg";

export const blogs = [
    {
        title: "How I Started Programming",
        slug: "how-i-started-programming",
        component: HowIStartedProgramming,
        cover: how_i_started_programming,
        alt: "Journey into programming and automation",
        excerpt: "An honest story about automation, a 20-year detour, rediscovering programming, and becoming a full-stack developer...",
        date: "Dec 2025",
        categories: ["sparks", "career"],
        isActive: true
    },
    {
        title: "How I Built My Portfolio with React",
        slug: "portfolio-react",
        component: PortfolioReact,
        cover: "/images/blog/react-portfolio.jpg",
        alt: "React portfolio screenshot",
        excerpt: "A deep dive into how I built and optimized my personal portfolio...",
        date: "Feb 2025",
        categories: ["react", "tutorial", "frontend"],
        isActive: false
    },
    {
        title: "Design Tips for Developers",
        slug: "design-tips",
        component: DesignTips,
        cover: "/images/blog/design-tips.jpg",
        alt: "UI example",
        excerpt: "Simple design rules that instantly improve your UI...",
        date: "Jan 2025",
        categories: ["design", "ui"],
        isActive: false
    }
];
