import { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import myCV from "@/assets/documents/cv/myCV_v8.docx";

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
    }
};

export default function Resume() {
    const h2Ref = useRef<HTMLHeadingElement | null>(null);
    const summaryRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);
    const educationRef = useRef<HTMLElement | null>(null);

    const h2InView = useInView(h2Ref, { once: true });
    const summaryInView = useInView(summaryRef, { once: true });
    const experienceInView = useInView(experienceRef, { once: true, amount: 0.1 });
    const projectsInView = useInView(projectsRef, { once: true, amount: 0.1 });
    const educationInView = useInView(educationRef, { once: true, amount: 0.1 });

    return (
        <section id="resume">
            <div className="container">
                <m.h2
                    ref={h2Ref}
                    initial="initial"
                    animate={h2InView ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Resume
                </m.h2>

                <div className="content">
                    <div className="columns">
                        <div className="column-left">

                            <m.article
                                ref={summaryRef}
                                initial="initial"
                                animate={summaryInView ? "animate" : "initial"}
                                variants={contentVariants}
                            >
                                <h3>Professional Summary</h3>
                                <p>
                                    Full-Stack Developer with 3+ years of experience building
                                    scalable, mobile-first web applications and API-driven systems.
                                </p>
                                <p>
                                    Strong expertise in JavaScript, React, Node.js, and MySQL.
                                    Experienced in code reviews, troubleshooting, Agile workflows,
                                    and delivering maintainable solutions from concept to deployment.
                                </p>
                            </m.article>

                            <article>
                                <h3>Technical Skills</h3>
                                <ul>
                                    <li><strong>Frontend:</strong> HTML5, CSS3, Sass, Bootstrap, JavaScript (ES6+), React, jQuery</li>
                                    <li><strong>Backend:</strong> Node.js, Express.js, PHP, Python, REST APIs</li>
                                    <li><strong>Databases:</strong> MySQL, MongoDB, SQL</li>
                                    <li><strong>DevOps & Tools:</strong> Git, GitHub, VPS, Firebase, Heroku, Hostinger</li>
                                    <li><strong>Methodologies:</strong> Agile workflows, mobile-first development, CRUD architecture</li>
                                </ul>
                            </article>

                            <m.article
                                className="experience"
                                ref={experienceRef}
                                initial="initial"
                                animate={experienceInView ? "animate" : "initial"}
                                variants={contentVariants}
                            >
                                <h3>Professional Experience</h3>

                                <div className="job">
                                    <h4>Full-Stack Web Developer · Self-Employed / Contract</h4>
                                    <h5>2022 - 2025 · London </h5>
                                    <ul>
                                        <li>Designed and deployed scalable full-stack applications using React, Node.js, PHP, and SQL databases.</li>
                                        <li>Built mobile-first responsive interfaces ensuring cross-browser compatibility.</li>
                                        <li>Developed RESTful APIs and integrated third-party services.</li>
                                        <li>Managed projects end-to-end from architecture to deployment.</li>
                                        <li>Delivered projects on time while maintaining high client satisfaction.</li>
                                        <li>Collaborated with clients through iterative development cycles.</li>
                                    </ul>
                                </div>
                            </m.article>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="column-right">

                            {/* PROJECTS */}
                            <m.article
                                ref={projectsRef}
                                initial="initial"
                                animate={projectsInView ? "animate" : "initial"}
                                variants={contentVariants}
                            >
                                <h3>Key Projects</h3>

                                <div className="job">
                                    <h4>SPW Photography Studio - Progressive Web App (2022)</h4>
                                    <p>React, Node.js, Sass</p>
                                </div>

                                <div className="job">
                                    <h4>DMF Plumbing & Heating - Service Web Application (2023)</h4>
                                    <p>React, Node.js, Sass</p>
                                </div>

                                <div className="job">
                                    <h4>Mary Sewing Workshop - Multilingual Web App (2023)</h4>
                                    <p>React, Vite, Node.js</p>
                                </div>

                                <div className="job">
                                    <h4>Name Day API - REST API Service (2024)</h4>
                                    <p>Node.js, REST API</p>
                                </div>

                                <div className="job">
                                    <h4>FSN - Form Submit Now (2024)</h4>
                                    <p>HTML, CSS, JavaScript, Node.js</p>
                                </div>

                                <div className="job">
                                    <h4>Company Directory - Study Project (2025)</h4>
                                    <p>Mobile-first CRUD Application</p>
                                </div>

                                <div className="job">
                                    <h4>Gazetteer - Study Project (2025)</h4>
                                    <p>Integrated Geonames, OpenWeather & API Ninjas</p>
                                </div>
                            </m.article>

                            {/* EDUCATION */}
                            <m.article
                                className="education"
                                ref={educationRef}
                                initial="initial"
                                animate={educationInView ? "animate" : "initial"}
                                variants={contentVariants}
                            >
                                <h3>Education</h3>

                                <div className="degree">
                                    <h4>Udemy Courses (2025)</h4>
                                    <p>Modern PHP · React & Next.js · Redux</p>
                                </div>

                                <div className="degree">
                                    <h4>IT Career Switch Ltd (2024)</h4>
                                    <p>500+ hours full-stack development training</p>
                                </div>

                                <div className="degree">
                                    <h4>Programming & Career Ltd (2021)</h4>
                                    <p>200+ hours web development training</p>
                                </div>

                                <div className="degree">
                                    <h4>BSc Mechanical Engineering · University of Szeged</h4>
                                    <p>GPA: 4.04 / 5</p>
                                </div>
                            </m.article>

                            <article>
                                <h3>Additional Information</h3>
                                <ul>
                                    <li>Eligible to work in the UK</li>
                                    <li>Available for full-time, contract, or freelance roles</li>
                                </ul>
                            </article>

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
            </div>
        </section>
    );
}
