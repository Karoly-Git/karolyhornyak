import HowIStartedProgramming from "../components/pages/blog/posts/HowIStartedProgramming/HowIStartedProgramming";
import how_i_started_programming from "../components/pages/blog/posts/HowIStartedProgramming/how-i-started-programming.jpg";

import ReactTheoreticalInterviewQuestions from "../components/pages/blog/posts/ReactTheoreticalInterviewQuestions/ReactTheoreticalInterviewQuestions";
import react_theoretical_interview_questions from "../components/pages/blog/posts/ReactTheoreticalInterviewQuestions/react-theoretical-interview-questions.jpg";

export const blogs = [
    {
        title: "How I Started Programming",
        slug: "how-i-started-programming",
        component: HowIStartedProgramming,
        cover: how_i_started_programming,
        alt: "Journey into programming and automation",
        excerpt: "An honest story about automation, a 15-year detour, rediscovering programming, and becoming a full-stack developer.",
        date: "Nov 2025",
        categories: ["sparks", "career"],
        isActive: true
    },
    {
        title: "10 Most Common React Theoretical Interview Questions",
        slug: "10-most-common-react-theoretical-interview-questions",
        component: ReactTheoreticalInterviewQuestions,
        cover: react_theoretical_interview_questions,
        alt: "Common React theoretical interview questions explained",
        excerpt: "A curated list of the 10 most common React theoretical interview questions, with clear explanations to help you master core concepts and ace frontend interviews.",
        date: "Dec 2025",
        categories: ["react", "frontend", "interviews"],
        isActive: true
    }
];
