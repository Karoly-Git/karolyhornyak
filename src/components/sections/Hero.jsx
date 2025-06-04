import React, { useState, useEffect, useRef } from 'react';
import { motion as m, useInView } from 'framer-motion';

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Hero() {
    const contentRef = useRef(null);
    const contentInView = useInView(contentRef, { triggerOnce: true, threshold: 0.1 });

    const words = ["Full-Stack Web Developer", "Crafting Web Experiences"];
    const [title, setTitle] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (contentInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [contentInView, hasAnimated]);

    useEffect(() => {
        let currentWordIndex = 0;

        const typeAndDelete = (word, isDeleting = false, charIndex = 0) => {
            setIsTyping(true);
            if (isDeleting) {
                if (charIndex >= 0) {
                    setTitle(word.slice(0, charIndex));
                    setTimeout(() => typeAndDelete(word, true, charIndex - 1), 60);
                } else {
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    setTimeout(() => typeAndDelete(words[currentWordIndex]), 60);
                }
            } else {
                if (charIndex < word.length) {
                    setTitle(word.slice(0, charIndex + 1));
                    setTimeout(() => typeAndDelete(word, false, charIndex + 1), 60);
                } else {
                    setTimeout(() => {
                        setIsTyping(false);
                        setTimeout(() => typeAndDelete(word, true, charIndex - 1), 3000);
                    }, 0);
                }
            }
        };

        setTimeout(() => {
            typeAndDelete(words[currentWordIndex]);
        }, 2000); // Delay needed due to framer-motion animation
        // eslint-disable-next-line
    }, []);

    return (
        <section id='hero'>
            <m.div className='hero-content' ref={contentRef} initial="initial" animate={hasAnimated ? "animate" : "initial"} variants={contentVariants}>
                <h1>Karoly Hornyak</h1>
                <p>
                    <span>
                        {title}
                        <span className={`blinking ${isTyping ? 'stop-blinking' : ''}`}></span>
                    </span>
                </p>
            </m.div>
        </section>
    );
}
