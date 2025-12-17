import React, { useRef, useState, useEffect } from 'react';
import myCV from "../../documents/myCV_v8.docx";
import { motion as m, useInView } from 'framer-motion';

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Resume({ resumeRef }) {
    const h2Ref = useRef(null);
    const pRef = useRef(null);
    const educationRef = useRef(null);
    const experienceRef = useRef(null);

    // State to track if animation has already been triggered
    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        p: false,
        education: false,
        experience: false
    });

    const h2InView = useInView(h2Ref, { triggerOnce: true });
    const pInView = useInView(pRef, { triggerOnce: true });
    const educationView = useInView(educationRef, { triggerOnce: true, threshold: 0.1 });
    const experienceInView = useInView(experienceRef, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated(prevState => ({ ...prevState, h2: true }));
        }
    }, [h2InView, hasAnimated.h2]);

    useEffect(() => {
        if (pInView && !hasAnimated.p) {
            setHasAnimated(prevState => ({ ...prevState, p: true }));
        }
    }, [pInView, hasAnimated.p]);

    useEffect(() => {
        if (educationView && !hasAnimated.education) {
            setHasAnimated(prevState => ({ ...prevState, education: true }));
        }
    }, [educationView, hasAnimated.education]);

    useEffect(() => {
        if (experienceInView && !hasAnimated.experience) {
            setHasAnimated(prevState => ({ ...prevState, experience: true }));
        }
    }, [experienceInView, hasAnimated.experience]);

    return (
        <section id="resume" ref={resumeRef}>
            {false && <m.h2 ref={h2Ref} initial="initial" animate={hasAnimated.h2 ? "animate" : "initial"} variants={contentVariants}>
                Education & Experience
            </m.h2>}

            <h2>
                Education & Experience
            </h2>

            <div id='resume-content'>

                <m.p
                    className="intro-text"
                    ref={pRef}
                    initial="initial"
                    animate={hasAnimated.p ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Full-Stack Web Developer with a solid foundation in front-end (HTML, CSS, SASS, Bootstrap, JavaScript, jQuery, React) and back-end technologies (Node.js, Express.js, PHP, Python, REST APIs, SQL, MongoDB). Skilled with tools such as Git, GitHub, Firebase, Heroku, VPS, and Hostinger, and focused on building reliable, high-quality web applications.
                </m.p>

                <div className="columns">
                    <div className="column-left">
                        <article className="summary">
                            <h3>Summary</h3>
                            <div className='job'>
                                <p className="name">Karoly Hornyak</p>
                                <p className="description">
                                    I am a dedicated Full Stack Web Developer with extensive experience in both front-end and back-end development. My skill set includes technologies such as JavaScript, ReactJS, SASS, NodeJS, Python, PHP, SQL, and MongoDB. I have a proven track record of developing custom web applications, optimizing website performance, and ensuring cross-browser compatibility. I thrive in both collaborative and independent settings, consistently delivering high-quality, innovative solutions. My commitment to continuous learning and staying updated with industry trends ensures that I bring the best practices to every project.
                                </p>
                                <ul className="contact-info">
                                    <li>Portland par 127, Orlando, FL</li>
                                    <li>(123) 456-7891</li>
                                    <li>alice.barkley@example.com</li>
                                </ul>
                            </div>
                        </article>

                        <m.article className="education" ref={educationRef} initial="initial" animate={hasAnimated.education ? "animate" : "initial"} variants={contentVariants}>
                            <h3>Education</h3>
                            <div className="degree">
                                <h4>Full-Stack Web Developer</h4>
                                <p>2023 - 2024</p>
                                <p>IT CAREER SWITCH</p>
                                <p>
                                    Progressing from intermediate to advanced, I studied web development (<strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>) and advanced topics (<strong>responsive design</strong>, <strong>interactive websites</strong>). I became proficient in front-end technologies (<strong>React</strong>, <strong>Redux</strong>, <strong>jQuery</strong>) and version control (<strong>Git</strong>, <strong>GitHub</strong>). I built back-end services with <strong>Express.js</strong>, handled <strong>user authentication/authorization</strong>, and worked with relational databases and advanced <strong>PostgreSQL/SQL</strong>. I also learned <strong>Python</strong>, <strong>PHP</strong>, <strong>API</strong> development (<strong>Swagger</strong>, <strong>OpenAPI</strong>), <strong>web security</strong>, and <strong>DevOps fundamentals</strong>. I studied complex <strong>data structures</strong> and <strong>algorithms</strong>.
                                </p>
                            </div>
                            <div className="degree">
                                <h4>Web Developer</h4>
                                <p>2020 - 2021</p>
                                <p>PROGRAMOZASKARRIER.HU</p>
                                <p>
                                    Progressing from <strong>zero to intermediate</strong>, I studied <strong>HTML</strong> and <strong>CSS</strong>, including <strong>Flexbox</strong> and <strong>Grid</strong>, gained proficiency in <strong>JavaScript</strong> and <strong>Python</strong>, and used <strong>Bootstrap</strong> for responsive design. I managed <strong>Databases</strong>, learned <strong>IT Fundamentals</strong>, <strong>JSON</strong>, and <strong>APIs</strong>. I developed server-side applications with <strong>Node.js</strong>, practiced version control with <strong>Git</strong> and <strong>GitHub</strong>, and worked with <strong>SASS</strong>, <strong>TypeScript</strong>, and <strong>Django</strong>. Additionally, I gained experience with <strong>React</strong> and studied <strong>UX/UI</strong> and <strong>Web Design</strong>.
                                </p>
                            </div>
                            <div className="degree non-it">
                                <h4>Mechanical Engineer (BSc)</h4>
                                <p>2000 - 2003</p>
                                <p>University of Szeged, Hungary</p>
                                <p>In my mechanical engineering studies, I progressed from intermediate to advanced. I mastered the <strong>Design of Machines</strong>, learned <strong>Technical Depiction and Drawing Technique</strong>, studied <strong>Mechanics</strong>, and gained hands-on experience in <strong>Manufacturing</strong> processes and their real-world applications.</p>
                            </div>
                        </m.article>
                    </div>

                    <div className="column-right">
                        <m.article className="experience" ref={experienceRef} initial="initial" animate={hasAnimated.experience ? "animate" : "initial"} variants={contentVariants}>
                            <h3>Professional Experience</h3>
                            <div className="job">
                                <p>
                                    As a <strong>Full-Stack Web Developer</strong>, I manage the entire lifecycle of building web applications and websites—from initial planning to deployment and long-term support.
                                </p>
                                <ul>
                                    <li>Collaborate with clients to define clear <strong>requirements</strong> and translate their goals into technical solutions.</li>
                                    <li>Set up and manage <strong>domains</strong>, <strong>hosting</strong>, and <strong>server environments</strong> to ensure stable, secure performance.</li>
                                    <li>Build <strong>responsive, mobile-first interfaces</strong> and implement <strong>front-end</strong> and <strong>back-end</strong> functionality using modern technologies.</li>
                                    <li>Design intuitive <strong>user interfaces</strong> with a strong focus on <strong>usability</strong> and <strong>accessibility</strong>.</li>
                                    <li>Integrate <strong>APIs</strong> and third-party services to extend features and improve workflow efficiency.</li>
                                    <li>Optimize websites for <strong>speed</strong>, <strong>SEO</strong>, and overall <strong>performance</strong>.</li>
                                    <li>Handle ongoing <strong>updates</strong>, <strong>maintenance</strong>, and feature improvements.</li>
                                    <li>Provide reliable <strong>technical support</strong> and resolve issues quickly.</li>
                                    <li>Develop custom <strong>web applications</strong> with frameworks such as <strong>React</strong>, <strong>Node.js</strong>, and <strong>Express</strong>.</li>
                                    <li>Use <strong>Git</strong> and <strong>GitHub</strong> for version control, collaboration, and project management.</li>
                                    <li>Continuously learn and adopt new <strong>tools</strong> and <strong>technologies</strong> to improve development workflows.</li>
                                </ul>
                            </div>
                            <div className="job non-it">
                                <h4>Production Supervisor</h4>
                                <p>2018 - Present</p>
                                <p>UK, London</p>
                                <ul>
                                    <li>
                                        I manage the processing plant, ensuring production targets, quality, machine maintenance, and safety compliance. I handle weekly collections, stock monitoring, and communication.
                                    </li>
                                </ul>
                            </div>

                            <div className="job non-it">
                                <h4>Head of Sales Department</h4>
                                <p>2014 - 2015</p>
                                <p>Hungary, Budapest</p>
                                <ul>
                                    <li>
                                        I led a 50-member team, boosted efficiency, built sales channels, managed the Sales Department, and focused on B2B marketing and contract maintenance to maximize income.
                                    </li>
                                </ul>
                            </div>

                            <div className="job non-it">
                                <h4>Site Operations Manager</h4>
                                <p>2009 - 2013</p>
                                <p>Hungary, Szeged</p>
                                <ul>
                                    <li>
                                        I managed the Regional Waste Recovery Facility, supervising 110 personnel across multiple plants and a landfill. I improved efficiency, upheld safety standards, ensured environmental compliance, maintained equipment, liaised with stakeholders, and participated in audits.
                                    </li>
                                </ul>
                            </div>
                        </m.article>
                    </div>
                </div>
                <a className="btn" href={myCV} download='Karoly Hornyak CV.docx' rel="noopener noreferrer">
                    Download Curriculum Vitae
                </a>
            </div>
        </section>
    );
}
