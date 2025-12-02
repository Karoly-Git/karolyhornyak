import React, { useRef, useState, useEffect } from 'react';
import SocialLinks from '../SocialLinks';
import { motion as m, useInView } from 'framer-motion';

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function About({ aboutRef }) {
    const h2Ref = useRef(null);
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const p3Ref = useRef(null);
    const divRef = useRef(null);
    const linksRef = useRef(null);

    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        p1: false,
        p2: false,
        p3: false,
        div: false,
        links: false
    });

    const h2InView = useInView(h2Ref, { triggerOnce: true, threshold: 0.1 });
    const p1InView = useInView(p1Ref, { triggerOnce: true, threshold: 0.1 });
    const p2InView = useInView(p2Ref, { triggerOnce: true, threshold: 0.1 });
    const p3InView = useInView(p3Ref, { triggerOnce: true, threshold: 0.1 });
    const divInView = useInView(divRef, { triggerOnce: true, threshold: 0.1 });
    const linksInView = useInView(linksRef, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated(prev => ({ ...prev, h2: true }));
        }
    }, [h2InView, hasAnimated.h2]);

    useEffect(() => {
        if (p1InView && !hasAnimated.p1) {
            setHasAnimated(prev => ({ ...prev, p1: true }));
        }
    }, [p1InView, hasAnimated.p1]);

    useEffect(() => {
        if (p2InView && !hasAnimated.p2) {
            setHasAnimated(prev => ({ ...prev, p2: true }));
        }
    }, [p2InView, hasAnimated.p2]);

    useEffect(() => {
        if (p3InView && !hasAnimated.p3) {
            setHasAnimated(prev => ({ ...prev, p3: true }));
        }
    }, [p3InView, hasAnimated.p3]);

    useEffect(() => {
        if (divInView && !hasAnimated.div) {
            setHasAnimated(prev => ({ ...prev, div: true }));
        }
    }, [divInView, hasAnimated.div]);

    useEffect(() => {
        if (linksInView && !hasAnimated.links) {
            setHasAnimated(prev => ({ ...prev, links: true }));
        }
    }, [linksInView, hasAnimated.links]);

    return (
        <section id="about" ref={aboutRef}>
            <div className="container">
                <m.h2 ref={h2Ref} initial="initial" animate={hasAnimated.h2 ? "animate" : "initial"} variants={contentVariants}>
                    About
                </m.h2>

                <div className="about-content">
                    <m.p
                        ref={p1Ref}
                        initial="initial"
                        animate={hasAnimated.h2 ? "animate" : "initial"}
                        variants={contentVariants}
                    >
                        Hi, I’m Karoly — a Full-Stack Web Developer who enjoys turning ideas into real, usable products. I love breaking down complex problems, experimenting with solutions, and iterating until everything works seamlessly. I learn quickly and feel comfortable working across the entire development lifecycle, building practical and reliable systems that address real business needs.
                    </m.p>
                    <m.div ref={divRef} className='img-container' initial="initial" animate={hasAnimated.div ? "animate" : "initial"} variants={contentVariants}>
                        <div className='intro-container'>
                            <m.p ref={p2Ref} initial="initial" animate={hasAnimated.p2 ? "animate" : "initial"} variants={contentVariants}>
                                With expertise in both Front-end and Back-end technologies.
                            </m.p>
                        </div>
                    </m.div>
                    <m.p ref={p3Ref} initial="initial" animate={hasAnimated.p3 ? "animate" : "initial"} variants={contentVariants}>
                        I’m exploring new roles as a Full Stack, Frontend, or Backend Developer. I’m open to on-site or hybrid opportunities in London, and remote roles across England. I can start immediately and am seeking full-time, part-time, contract, or temporary positions.
                    </m.p>
                    <m.div ref={linksRef} initial="initial" animate={hasAnimated.links ? "animate" : "initial"} variants={contentVariants}>
                        <SocialLinks />
                    </m.div >
                </div>
            </div>
        </section>
    );
}
