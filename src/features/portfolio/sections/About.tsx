import { useRef } from "react";
import SocialLinks from "@/shared/components/SocialLinks";
import { motion as m, useInView } from "framer-motion";

const contentVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function About() {
    const h2Ref = useRef<HTMLHeadingElement | null>(null);
    const p1Ref = useRef<HTMLParagraphElement | null>(null);
    const p3Ref = useRef<HTMLParagraphElement | null>(null);
    const linksRef = useRef<HTMLDivElement | null>(null);

    const h2InView = useInView(h2Ref, { once: true, amount: 0.1 });
    const p1InView = useInView(p1Ref, { once: true, amount: 0.1 });
    const p3InView = useInView(p3Ref, { once: true, amount: 0.1 });
    const linksInView = useInView(linksRef, { once: true, amount: 0.1 });

    return (
        <section id="about">
            <div className="container">
                <m.h2
                    ref={h2Ref}
                    initial="initial"
                    animate={h2InView ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    About
                </m.h2>

                <div className="content">
                    <m.p
                        ref={p1Ref}
                        initial="initial"
                        animate={p1InView ? "animate" : "initial"}
                        variants={contentVariants}
                    >
                        Hi, I'm Karoly — a full-stack engineer focused on turning ideas into
                        reliable, production-ready software. I work comfortably across the
                        entire development lifecycle, breaking down complex problems and
                        delivering practical solutions that address real business needs.
                    </m.p>

                    <m.p
                        ref={p3Ref}
                        initial="initial"
                        animate={p3InView ? "animate" : "initial"}
                        variants={contentVariants}
                    >
                        I'm currently exploring opportunities as a full-stack, frontend,
                        or backend developer. I'm open to on-site or hybrid roles in
                        London, as well as remote positions across England. Available
                        immediately.
                    </m.p>

                    <m.div
                        ref={linksRef}
                        initial="initial"
                        animate={linksInView ? "animate" : "initial"}
                        variants={contentVariants}
                    >
                        <SocialLinks />
                    </m.div>
                </div>
            </div>
        </section>
    );
}
