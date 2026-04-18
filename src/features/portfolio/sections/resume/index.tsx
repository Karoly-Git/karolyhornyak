import { useRef } from "react";
import myCV from "@/assets/documents/cv/myCV_v8.docx";

import "../sections.scss";
import "./resume.scss";

export default function Resume() {
    const h2Ref = useRef<HTMLHeadingElement | null>(null);
    const summaryRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLElement | null>(null);
    const projectsRef = useRef<HTMLElement | null>(null);
    const educationRef = useRef<HTMLElement | null>(null);

    return (
        <section id="resume">
            <div className="container">
                <h2 ref={h2Ref}>Resume</h2>

                <div className="content">
                    <div className="columns">
                        <div className="column-left">
                            <article ref={summaryRef}>
                                <h3>Professional Summary</h3>

                                <p>
                                    Full-Stack Developer with experience building scalable,
                                    mobile-first web applications and API-driven systems.
                                </p>

                                <p>
                                    Proficient in JavaScript, TypeScript, React, and Node.js,
                                    with a strong focus on writing clean, maintainable code
                                    and delivering end-to-end solutions.
                                </p>

                                <p>
                                    Experienced in collaborating with clients, contributing
                                    to code reviews, and resolving technical issues in
                                    fast-paced environments.
                                </p>
                            </article>

                            <article>
                                <h3>Technical Skills</h3>

                                <ul>
                                    <li>
                                        <strong>Frontend:</strong> React, Redux,
                                        Next.js, TypeScript, JavaScript, HTML,
                                        CSS, Sass
                                    </li>
                                    <li>
                                        <strong>Backend:</strong> Node.js,
                                        Express.js, Python
                                    </li>
                                    <li>
                                        <strong>Databases:</strong> PostgreSQL,
                                        MongoDB
                                    </li>
                                    <li>
                                        <strong>DevOps & Tools:</strong> CI/CD,
                                        GitHub Actions, Git, GitHub
                                    </li>
                                    <li>
                                        <strong>Workflow: </strong>
                                        AI-Assisted Development
                                    </li>
                                </ul>
                            </article>

                            <article
                                className="experience"
                                ref={experienceRef}
                            >
                                <h3>Professional Experience</h3>

                                <div className="job">
                                    <h4>
                                        Full-Stack Web Developer ·
                                        Self-Employed / Contract
                                    </h4>
                                    <h5>
                                        2022 - 2025 · London
                                    </h5>

                                    <ul>
                                        <li>
                                            Designed, developed, and deployed
                                            scalable full-stack web applications
                                            using React, Next.js, TypeScript,
                                            Node.js, and Express.js.
                                        </li>
                                        <li>
                                            Built responsive, mobile-first user
                                            interfaces using HTML, CSS, and Sass,
                                            ensuring cross-browser compatibility
                                            and performance.
                                        </li>
                                        <li>
                                            Managed global state and complex UI
                                            interactions using Redux in
                                            data-driven applications.
                                        </li>
                                        <li>
                                            Developed RESTful APIs and backend
                                            services, integrating PostgreSQL and
                                            MongoDB for efficient data storage
                                            and retrieval.
                                        </li>
                                        <li>
                                            Implemented backend features and
                                            scripting using Node.js and Python
                                            where appropriate.
                                        </li>
                                        <li>
                                            Set up version control and automated
                                            workflows using Git, GitHub, and
                                            GitHub Actions (CI/CD).
                                        </li>
                                        <li>
                                            Translated client requirements into
                                            secure, maintainable, and
                                            high-performance solutions through
                                            iterative development.
                                        </li>
                                        <li>
                                            Managed projects end-to-end, from
                                            system design and development to
                                            deployment and ongoing maintenance.
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>

                        <div className="column-right">
                            <article ref={projectsRef}>
                                <h3>Projects</h3>

                                <div className="job">
                                    <h4>
                                        Real-Time Collection Tracking System
                                    </h4>
                                    <p>
                                        React, TypeScript, Node.js, Express,
                                        PostgreSQL
                                    </p>
                                </div>

                                <div className="job">
                                    <h4>
                                        SPW Photography Studio - Progressive Web App
                                    </h4>
                                    <p>React, Node.js, Sass</p>
                                </div>

                                <div className="job">
                                    <h4>
                                        Mary Sewing Workshop - Multilingual Web App
                                    </h4>
                                    <p>React, Vite, Node.js, Sass</p>
                                </div>

                                <div className="job">
                                    <h4>
                                        Name Day API - REST API Service
                                    </h4>
                                    <p>Node.js, Express</p>
                                </div>

                                <div className="job">
                                    <h4>
                                        Company Directory - Study Project
                                    </h4>
                                    <p>JavaScript, HTML, CSS, PHP</p>
                                </div>
                            </article>

                            <article
                                className="education"
                                ref={educationRef}
                            >
                                <h3>Education</h3>

                                <div className="degree">
                                    <h4>Udemy (2025)</h4>
                                    <p>
                                        Modern PHP · React · Next.js · Redux
                                    </p>
                                </div>

                                <div className="degree">
                                    <h4>IT Career Switch Ltd (2024)</h4>
                                    <p>
                                        500+ hours full-stack development training
                                    </p>
                                </div>

                                <div className="degree">
                                    <h4>
                                        Programming & Career Ltd (2021)
                                    </h4>
                                    <p>
                                        200+ hours web development training
                                    </p>
                                </div>

                                <div className="degree">
                                    <h4>
                                        BSc Mechanical Engineering ·
                                        University of Szeged
                                    </h4>
                                    <p>GPA: 4.04 / 5</p>
                                </div>
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