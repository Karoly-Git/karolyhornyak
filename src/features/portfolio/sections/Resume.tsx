import { useRef, useState, useEffect } from "react";
import myCV from "@/assets/documents/cv/myCV_v8.docx";
import { motion as m, useInView } from "framer-motion";

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Resume() {
    const h2Ref = useRef<HTMLHeadingElement | null>(null);
    const introRef = useRef<HTMLParagraphElement | null>(null);
    const experienceRef = useRef<HTMLElement | null>(null);
    const educationRef = useRef<HTMLElement | null>(null);

    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        intro: false,
        experience: false,
        education: false,
    });

    const h2InView = useInView(h2Ref, { once: true });
    const introInView = useInView(introRef, { once: true });
    const experienceInView = useInView(experienceRef, { once: true, amount: 0.1 });
    const educationInView = useInView(educationRef, { once: true, amount: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated((p) => ({ ...p, h2: true }));
        }
        if (introInView && !hasAnimated.intro) {
            setHasAnimated((p) => ({ ...p, intro: true }));
        }
        if (experienceInView && !hasAnimated.experience) {
            setHasAnimated((p) => ({ ...p, experience: true }));
        }
        if (educationInView && !hasAnimated.education) {
            setHasAnimated((p) => ({ ...p, education: true }));
        }
    }, [
        h2InView,
        introInView,
        experienceInView,
        educationInView,
        hasAnimated,
    ]);

    return (
        <section id="resume">
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
                    mobile-first web applications and API-driven systems.
                </m.p>

                <div className="columns">
                    <div className="column-left">
                        <m.article
                            ref={experienceRef}
                            initial="initial"
                            animate={hasAnimated.experience ? "animate" : "initial"}
                            variants={contentVariants}
                        >
                            <h3>Professional Experience</h3>
                            <div className="job">
                                <h4>Full-Stack Web Developer · Self-Employed / Contract</h4>
                                <p>2022 – 2025 · London / Remote</p>
                            </div>
                        </m.article>
                    </div>

                    <div className="column-right">
                        <m.article
                            ref={educationRef}
                            initial="initial"
                            animate={hasAnimated.education ? "animate" : "initial"}
                            variants={contentVariants}
                        >
                            <h3>Education & Training</h3>
                            <div className="degree">
                                <h4>Full-Stack Web Development Training</h4>
                                <p>IT Career Switch Ltd · 2024</p>
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
