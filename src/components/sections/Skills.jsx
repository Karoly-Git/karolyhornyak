import React, { useRef, useState, useEffect } from 'react';
import { skills } from '../../data/skills';
import { motion as m, useInView } from 'framer-motion';

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const spanVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.1
        }
    })
};

export default function Skills({ skillsRef }) {
    const h2Ref = useRef(null);
    const divRef = useRef(null);

    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        div: false
    });

    const h2InView = useInView(h2Ref, { triggerOnce: true, threshold: 0.1 });
    const divInView = useInView(divRef, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated(prev => ({ ...prev, h2: true }));
        }
    }, [h2InView, hasAnimated.h2]);

    useEffect(() => {
        if (divInView && !hasAnimated.div) {
            setHasAnimated(prev => ({ ...prev, div: true }));
        }
    }, [divInView, hasAnimated.div]);

    return (
        <section id="skills" ref={skillsRef}>
            <div className="container">
                {false && <m.h2 ref={h2Ref} initial="initial" animate={hasAnimated.h2 ? "animate" : "initial"} variants={contentVariants}>
                    Skills
                </m.h2>}
                <h2>
                    Skills
                </h2>
                <div className="tools" ref={divRef}>
                    {skills.map((skill, index) => (
                        <m.span
                            key={index}
                            custom={index}
                            initial="initial"
                            animate={hasAnimated.div ? "animate" : "initial"}
                            variants={spanVariants}
                            title={skill.name}
                        >
                            {skill.icon}
                        </m.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
