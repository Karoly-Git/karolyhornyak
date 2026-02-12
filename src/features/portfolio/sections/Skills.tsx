import { useRef, useState, useEffect } from "react";
import { motion as m, useInView, type Variants } from "framer-motion";

// Icons
import { AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { BiLogoCss3, BiLogoSass } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNodeJs, FaGitSquare, FaGithub } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql, SiRedux } from "react-icons/si";
import { PiFileSqlThin } from "react-icons/pi";
import { FaPhp, FaBootstrap } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

type Skill = {
    name: string;
    icon: React.ReactNode;
    isActive: boolean;
};

const skills: Skill[] = [
    { name: "HTML", icon: <AiOutlineHtml5 className="icon" />, isActive: true },
    { name: "CSS", icon: <BiLogoCss3 className="icon" />, isActive: true },
    { name: "SASS", icon: <BiLogoSass className="icon" />, isActive: true },
    { name: "BootStrap", icon: <FaBootstrap className="icon" />, isActive: true },
    { name: "JavaScript", icon: <TbBrandJavascript className="icon" />, isActive: true },
    { name: "jQuery", icon: <DiJqueryLogo className="icon" />, isActive: true },
    { name: "React", icon: <FaReact className="icon" />, isActive: true },
    { name: "Redux", icon: <SiRedux className="icon" />, isActive: false },
    { name: "NodeJS", icon: <FaNodeJs className="icon" />, isActive: true },
    { name: "ExpressJS", icon: <SiExpress className="icon" />, isActive: true },
    { name: "PHP", icon: <FaPhp className="icon" />, isActive: true },
    { name: "Python", icon: <AiOutlinePython className="icon" />, isActive: true },
    { name: "MongoDB", icon: <SiMongodb className="icon" />, isActive: true },
    { name: "Postgres", icon: <SiPostgresql className="icon" />, isActive: true },
    { name: "MySql", icon: <GrMysql className="icon" />, isActive: true },
    { name: "SQL", icon: <PiFileSqlThin className="icon" />, isActive: true },
    { name: "Git", icon: <FaGitSquare className="icon" />, isActive: true },
    { name: "GitHub", icon: <FaGithub className="icon" />, isActive: true },
];

const contentVariants: Variants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const spanVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.2,
        },
    }),
};

export default function Skills() {
    const h2Ref = useRef<HTMLHeadingElement | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null);

    const [hasAnimated, setHasAnimated] = useState({
        h2: false,
        div: false,
    });

    const h2InView = useInView(h2Ref, { once: true, amount: 0.1 });
    const divInView = useInView(divRef, { once: true, amount: 0.1 });

    useEffect(() => {
        if (h2InView && !hasAnimated.h2) {
            setHasAnimated((prev) => ({ ...prev, h2: true }));
        }
    }, [h2InView, hasAnimated.h2]);

    useEffect(() => {
        if (divInView && !hasAnimated.div) {
            setHasAnimated((prev) => ({ ...prev, div: true }));
        }
    }, [divInView, hasAnimated.div]);

    return (
        <section id="skills">
            <div className="container">
                <m.h2
                    ref={h2Ref}
                    initial="initial"
                    animate={hasAnimated.h2 ? "animate" : "initial"}
                    variants={contentVariants}
                >
                    Skills
                </m.h2>

                <div className="tools" ref={divRef}>
                    {skills
                        .filter((skill) => skill.isActive)
                        .map((skill, index) => (
                            <m.span
                                key={skill.name}
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
