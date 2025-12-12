import HowIStartedProgramming from "../components/pages/blog/posts/HowIStartedProgramming/HowIStartedProgramming";
import PortfolioReact from "../components/pages/blog/posts/PortfolioReact";
import DesignTips from "../components/pages/blog/posts/DesignTips";

export const blogs = [
    {
        title: "How I Started Programming",
        slug: "how-i-started-programming",
        component: HowIStartedProgramming,
        cover: "/images/blog/how-i-started-programming.jpg",
        alt: "Early journey into programming and automation",
        excerpt: "An honest story about automation, a 20-year detour, rediscovering programming, and the moment I realised this was what I wanted to do for the rest of my life.",
        date: "Dec 2025",
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
        isActive: false
    }
];
