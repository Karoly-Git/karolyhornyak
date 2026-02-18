import { useRef } from "react";
import SocialLinks from "@/shared/components/social-links";

import "../sections.scss";
import './about.scss';

export default function About() {
    const h2Ref = useRef<HTMLHeadingElement | null>(null);
    const p1Ref = useRef<HTMLParagraphElement | null>(null);
    const p3Ref = useRef<HTMLParagraphElement | null>(null);
    const linksRef = useRef<HTMLDivElement | null>(null);

    return (
        <section id="about">
            <div className="container">
                <h2 ref={h2Ref}>
                    About
                </h2>

                <div className="content">
                    <p ref={p1Ref}>
                        Hi, I'm Karoly — a Full-Stack Developer focused on turning ideas into
                        reliable, production-ready software. I work comfortably across the
                        entire development lifecycle, breaking down complex problems and
                        delivering practical solutions that address real business needs.
                    </p>

                    <p ref={p3Ref}>
                        I enjoy building scalable applications with clean architecture and
                        thoughtful design, and I'm always looking to contribute to products
                        that solve meaningful problems.
                    </p>

                    <div ref={linksRef}>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </section>
    );
}
