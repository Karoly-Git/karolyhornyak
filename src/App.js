import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion as m, AnimatePresence } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../src/styles/styles.css";
import "../src/styles/links.css";
import "../src/styles/assets.css";
import "../src/styles/reviews.css";
import "../src/styles/resume.css";
import "../src/styles/projects.css";
import "../src/styles/modal.css";

import Loader from "./components/Loader";
import SocialLinks from "./components/SocialLinks";
import NavLinks from "./components/navigation/NavLinks";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
import Reviews from "./components/sections/Reviews";
import Projects from "./components/sections/Projects";

import ScrollUp from "./components/ScrollUp";

import Blog from "./components/pages/blog/Blog";
import { blogs } from "./data/blogs"; // ← IMPORT BLOG DATA

const contentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Remove loader once app + children mount
  useLayoutEffect(() => setIsLoading(false), []);

  // Show/hide header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrollingUp(prevScrollPos > currentScroll);
      setPrevScrollPos(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Router>
      <div className="App">
        <AnimatePresence>
          {isLoading ? (
            <Loader />
          ) : (
            <m.div
              key="content"
              variants={contentVariants}
              initial="initial"
              animate="animate"
            >
              <ScrollUp />

              {/* HEADER */}
              <header className={isScrollingUp ? "header-show" : "header-hide"}>
                <nav>
                  <NavLinks
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    resumeRef={resumeRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                  />
                </nav>
              </header>

              {/* ROUTES */}
              <Routes>
                {/* HOME PAGE */}
                <Route
                  path="/"
                  element={
                    <main>
                      <Hero />
                      <About aboutRef={aboutRef} />
                      <Reviews />
                      <Skills skillsRef={skillsRef} />
                      <Resume resumeRef={resumeRef} />
                      <Projects projectsRef={projectsRef} />
                      <Contact contactRef={contactRef} />
                    </main>
                  }
                />

                {/* BLOG LIST PAGE */}
                <Route path="/blog" element={<Blog />} />

                {/* INDIVIDUAL BLOG PAGES (each uses its own component) */}
                {blogs.map((post) => (
                  <Route
                    key={post.slug}
                    path={`/blog/${post.slug}`}
                    element={<post.component />} // ← loads the correct post component
                  />
                ))}
              </Routes>

              {/* FOOTER */}
              <footer>
                <nav>
                  <NavLinks
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    resumeRef={resumeRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                  />
                  <SocialLinks />
                </nav>
                <p>&copy; 2020 – {new Date().getFullYear()} Karoly Hornyak</p>
              </footer>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
