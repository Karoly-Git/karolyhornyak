import { useEffect, useRef, useState } from "react";
import { motion as m, useInView } from "framer-motion";
import { useTypewriter } from "@/shared/hooks/useTypewriter";

import "@/features/portfolio/portfolio.styles.scss"

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
    },
};

export default function Hero() {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const contentInView = useInView(contentRef, {
        once: true,
        amount: 0.1,
    });

    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (contentInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [contentInView, hasAnimated]);

    const { text, isTyping } = useTypewriter({
        words: [
            "I build reliable systems that solve real problems.",
            "Focused on practical, production-ready software.",
            "Turning complex ideas into scalable web applications.",
            "From frontend polish to backend reliability.",
        ],
    });

    return (
        <section id="hero">
            <div className="container">

                <m.div
                    className="content"
                    ref={contentRef}
                    initial="initial"
                    animate={hasAnimated ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    <h1>Karoly Hornyak</h1>
                    <h4>Full-Stack Engineer</h4>
                    <p>
                        <span>
                            {text}
                            <span
                                className={`blinking ${isTyping ? "stop-blinking" : ""
                                    }`}
                            />
                        </span>
                    </p>
                </m.div>
            </div>
        </section>
    );
}
