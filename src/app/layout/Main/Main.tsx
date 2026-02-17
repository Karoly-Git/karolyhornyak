import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import About from "@/features/portfolio/sections/about/About";
import Contact from "@/features/portfolio/sections/contact/Contact";
import Hero from "@/features/portfolio/sections/hero/Hero";
import Projects from "@/features/portfolio/sections/projects/Projects";
import Resume from "@/features/portfolio/sections/resume/Resume";
import Reviews from "@/features/portfolio/sections/reviews/Reviews";
import Skills from "@/features/portfolio/sections/skills/Skills";

import "@/features/portfolio/portfolio.styles.scss";

export default function Main() {
    const location = useLocation();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const id = location.state?.scrollTo;

        if (id) {
            const el = document.getElementById(id);

            if (el) {
                // 🔥 INSTANT jump — no animation
                el.scrollIntoView({
                    behavior: "auto",
                    block: "start",
                });
            }

            // Clear state so it doesn't trigger again
            navigate(location.pathname, {
                replace: true,
                state: {},
            });
        }
    }, [location, navigate]);

    return (
        <main>
            <Hero />
            <About />
            <Reviews />
            <Skills />
            <Resume />
            <Projects />
            <Contact />
        </main>
    );
}
