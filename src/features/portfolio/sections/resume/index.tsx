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
                                    Full-Stack Developer with 3+ years of
                                    experience in application development,
                                    building scalable, mobile-first web
                                    applications and API-driven systems.
                                </p>

                                <p>
                                    Strong expertise in JavaScript, React,
                                    Node.js, and SQL, with hands-on experience
                                    delivering maintainable code from concept
                                    to deployment.
                                </p>

                                <p>
                                    Experienced in collaborating,
                                    participating in code reviews,
                                    troubleshooting issues, and continuously
                                    learning new technologies in fast-paced
                                    environments.
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
                                        Express, Python
                                    </li>
                                    <li>
                                        <strong>Databases:</strong> PostgreSQL,
                                        MongoDB
                                    </li>
                                    <li>
                                        <strong>Cloud:</strong> AWS
                                    </li>
                                    <li>
                                        <strong>DevOps:</strong> CI/CD,
                                        GitHub Actions
                                    </li>
                                    <li>
                                        <strong>Tools:</strong> Git, GitHub
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
                                            using React, Node.js, PHP, and
                                            SQL-based databases.
                                        </li>
                                        <li>
                                            Built mobile-first, responsive user
                                            interfaces with HTML, CSS, Sass,
                                            and Bootstrap, ensuring
                                            cross-browser compatibility.
                                        </li>
                                        <li>
                                            Developed RESTful APIs and
                                            integrated third-party services to
                                            enhance application functionality
                                            and automate workflows.
                                        </li>
                                        <li>
                                            Translated client and stakeholder
                                            requirements into secure,
                                            maintainable, and high-performance
                                            solutions.
                                        </li>
                                        <li>
                                            Managed projects end-to-end, from
                                            architecture and development to
                                            deployment and maintenance.
                                        </li>
                                        <li>
                                            Delivered multiple projects on time
                                            and within budget while maintaining
                                            high client satisfaction.
                                        </li>
                                        <li>
                                            Collaborated with clients
                                            incorporating feedback through
                                            iterative development.
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
                                        SPW Photography Studio -
                                        Progressive Web App
                                    </h4>
                                    <p>React, Node.js, Sass</p>
                                </div>

                                <div className="job">
                                    <h4>
                                        DMF Plumbing & Heating -
                                        Service Web Application
                                    </h4>
                                    <p>React, Node.js, Sass</p>
                                </div>

                                <div className="job">
                                    <h4>
                                        Mary Sewing Workshop -
                                        Multilingual Web App
                                    </h4>
                                    <p>React, Vite, Node.js</p>
                                </div>

                                <div className="job">
                                    <h4>
                                        Name Day API -
                                        REST API Service
                                    </h4>
                                    <p>Node.js, REST API</p>
                                </div>

                                <div className="job">
                                    <h4>FSN - Form Submit Now</h4>
                                    <p>
                                        HTML, CSS, JavaScript, Node.js
                                    </p>
                                </div>

                                <div className="job">
                                    <h4>
                                        Company Directory -
                                        Study Project
                                    </h4>
                                    <p>
                                        Mobile-first CRUD Application
                                    </p>
                                </div>

                                <div className="job">
                                    <h4>
                                        Gazetteer -
                                        Study Project
                                    </h4>
                                    <p>
                                        Integrated Geonames,
                                        OpenWeather & API Ninjas
                                    </p>
                                </div>
                            </article>

                            <article
                                className="education"
                                ref={educationRef}
                            >
                                <h3>Education</h3>

                                <div className="degree">
                                    <h4>Udemy Courses (2025)</h4>
                                    <p>
                                        Modern PHP · React & Next.js · Redux
                                    </p>
                                </div>

                                <div className="degree">
                                    <h4>IT Career Switch Ltd (2024)</h4>
                                    <p>
                                        500+ hours full-stack development
                                        training
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