import PortfolioReact from "../components/pages/blog/posts/PortfolioReact";
import DesignTips from "../components/pages/blog/posts/DesignTips";

export const blogs = [
    {
        title: "How I Built My Portfolio with React",
        slug: "portfolio-react",
        component: PortfolioReact,
        cover: "/images/blog/react-portfolio.jpg",
        alt: "React portfolio screenshot",
        excerpt: "A deep dive into how I built and optimized my personal portfolio...",
        date: "Feb 2025",
        readTime: 6,
        isActive: true
    },
    {
        title: "Design Tips for Developers",
        slug: "design-tips",
        component: DesignTips,
        cover: "/images/blog/design-tips.jpg",
        alt: "UI example",
        excerpt: "Simple design rules that instantly improve your UI...",
        date: "Jan 2025",
        readTime: 4,
        isActive: true
    }
];
