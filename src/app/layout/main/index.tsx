import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import About from "@/features/portfolio/sections/about";
import Contact from "@/features/portfolio/sections/contact";
import Hero from "@/features/portfolio/sections/hero";
import Projects from "@/features/portfolio/sections/projects";
import Resume from "@/features/portfolio/sections/resume";
import Reviews from "@/features/portfolio/sections/reviews";
import Skills from "@/features/portfolio/sections/skills";

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
