import About from "@/features/portfolio/sections/About";
import Contact from "@/features/portfolio/sections/Contact";
import Hero from "@/features/portfolio/sections/Hero";
//import Projects from "@/features/portfolio/sections/Projects";
import Resume from "@/features/portfolio/sections/Resume";
import Reviews from "@/features/portfolio/sections/Reviews";
import Skills from "@/features/portfolio/sections/Skills";

import "@/features/portfolio/portfolio.styles.scss";

export default function Main() {
    return (
        <main>
            <Hero />
            <About />
            <Reviews />
            <Skills />
            <Resume />
            {/*<Projects />*/}
            <Contact />
        </main>
    )
}

