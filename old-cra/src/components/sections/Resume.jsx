import React, { useRef, useState, useEffect } from "react";
import myCV from "../../documents/myCV_v8.docx";
import { motion as m, useInView } from "framer-motion";

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Resume({ resumeRef }) {
    const h2Ref = useRef(null);
    const introRef = useRef(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);

    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        intro: false,
        experience: false,
        education: false
    });

    const h2InView = useInView(h2Ref, { triggerOnce: true });
    const introInView = useInView(introRef, { triggerOnce: true });
    const experienceInView = useInView(experienceRef, { triggerOnce: true, threshold: 0.1 });
    const educationInView = useInView(educationRef, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated(p => ({ ...p, h2: true }));
        }
        if (introInView && !hasAnimated.intro) {
            setHasAnimated(p => ({ ...p, intro: true }));
        }
        if (experienceInView && !hasAnimated.experience) {
            setHasAnimated(p => ({ ...p, experience: true }));
        }
        if (educationInView && !hasAnimated.education) {
            setHasAnimated(p => ({ ...p, education: true }));
        }
    }, [h2InView, introInView, experienceInView, educationInView, hasAnimated]);

    return (
        <section id="resume" ref={resumeRef}>
            <div id="resume-content">
                <m.h2
                    ref={h2Ref}
                    initial="initial"
                    animate={hasAnimated.h2 ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Experience
                </m.h2>

                <m.p
                    className="intro-text"
                    ref={introRef}
                    initial="initial"
                    animate={hasAnimated.intro ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Full-stack developer with 3+ years of experience building scalable,
                    mobile-first web applications and API-driven systems. Strong background
                    in JavaScript, React, Node.js, and SQL-based databases, with hands-on
                    experience delivering maintainable solutions from concept to deployment.
                </m.p>

                <div className="columns">
                    {/* LEFT COLUMN */}
                    <div className="column-left">
                        <m.article
                            className="experience"
                            ref={experienceRef}
                            initial="initial"
                            animate={hasAnimated.experience ? "animate" : "initial"}
                            variants={contentVariants}
                        >
                            <h3>Professional Experience</h3>

                            <div className="job">
                                <h4>Full-Stack Web Developer · Self-Employed / Contract</h4>
                                <p>2022 – 2025 · London / Remote</p>
                                <ul>
                                    <li>Designed, developed, and deployed full-stack web applications using React, Node.js, PHP, and SQL-based databases.</li>
                                    <li>Built mobile-first, responsive user interfaces with HTML, CSS, Sass, and Bootstrap.</li>
                                    <li>Developed RESTful APIs and integrated third-party services to extend functionality.</li>
                                    <li>Translated client requirements into secure, maintainable, and high-performance solutions.</li>
                                    <li>Managed projects end-to-end, from architecture and development to deployment and maintenance.</li>
                                    <li>Delivered multiple client projects on time, incorporating iterative feedback.</li>
                                </ul>
                            </div>

                            <div className="job non-it">
                                <h4>Production Supervisor</h4>
                                <p>2018 – Present · London</p>
                                <ul>
                                    <li>Oversee daily operations, production targets, safety compliance, and equipment maintenance.</li>
                                </ul>
                            </div>

                            <div className="job non-it">
                                <h4>Head of Sales Department</h4>
                                <p>2014 – 2015 · Budapest</p>
                                <ul>
                                    <li>Led a 50-person team, improved efficiency, and managed B2B sales operations.</li>
                                </ul>
                            </div>

                            <div className="job non-it">
                                <h4>Site Operations Manager</h4>
                                <p>2009 – 2013 · Szeged</p>
                                <ul>
                                    <li>Managed multi-site operations, supervised teams, ensured regulatory compliance, and improved efficiency.</li>
                                </ul>
                            </div>
                        </m.article>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="column-right">
                        <m.article
                            className="education"
                            ref={educationRef}
                            initial="initial"
                            animate={hasAnimated.education ? "animate" : "initial"}
                            variants={contentVariants}
                        >
                            <h3>Education & Training</h3>

                            <div className="degree">
                                <h4>Full-Stack Web Development Training</h4>
                                <p>IT Career Switch Ltd · 2024</p>
                                <p>500+ hours covering React, Node.js, REST APIs, databases, authentication, and deployment.</p>
                            </div>

                            <div className="degree">
                                <h4>Web Development Training</h4>
                                <p>Programming & Career Ltd · 2021</p>
                                <p>HTML, CSS, JavaScript, Python, Node.js, databases, and responsive design.</p>
                            </div>

                            <div className="degree">
                                <h4>Continuous Learning</h4>
                                <p>Udemy · 2025</p>
                                <p>Modern PHP · React & Next.js · Redux</p>
                            </div>

                            <div className="degree non-it">
                                <h4>BSc Mechanical Engineering</h4>
                                <p>University of Szeged · Hungary</p>
                            </div>
                        </m.article>
                    </div>
                </div>

                <a
                    className="btn"
                    href={myCV}
                    download="Karoly Hornyak CV.docx"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}
