import { useRef } from "react";

import { AiOutlineHtml5, AiOutlinePython } from "react-icons/ai";
import { BiLogoCss3, BiLogoSass } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNodeJs, FaGitSquare, FaGithub } from "react-icons/fa";
import {
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiRedux,
    SiTypescript,
    SiNextdotjs,
    SiGithubactions,
} from "react-icons/si";
import { PiFileSqlThin } from "react-icons/pi";
import { FaPhp, FaBootstrap } from "react-icons/fa6";
import { DiJqueryLogo } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaAws } from "react-icons/fa";
import { MdOutlineAutoAwesome } from "react-icons/md";

import "../sections.scss";
import "./skills.scss";

type SkillCategory =
    | "Frontend"
    | "Backend"
    | "Databases"
    | "Cloud"
    | "DevOps"
    | "Tools"
    | "Workflow";

type Skill = {
    name: string;
    icon: React.ReactNode;
    category: SkillCategory;
    isPrimary?: boolean;
    isActive: boolean;
};

const skills: Skill[] = [
    // ===== FRONTEND =====
    { name: "React", icon: <FaReact />, category: "Frontend", isPrimary: true, isActive: true },
    { name: "Redux", icon: <SiRedux />, category: "Frontend", isActive: true },
    { name: "Next.js", icon: <SiNextdotjs />, category: "Frontend", isPrimary: true, isActive: true },
    { name: "TypeScript", icon: <SiTypescript />, category: "Frontend", isPrimary: true, isActive: true },
    { name: "JavaScript", icon: <TbBrandJavascript />, category: "Frontend", isActive: true },
    { name: "HTML", icon: <AiOutlineHtml5 />, category: "Frontend", isActive: true },
    { name: "CSS", icon: <BiLogoCss3 />, category: "Frontend", isActive: true },
    { name: "Sass", icon: <BiLogoSass />, category: "Frontend", isActive: true },
    { name: "Bootstrap", icon: <FaBootstrap />, category: "Frontend", isActive: false },
    { name: "jQuery", icon: <DiJqueryLogo />, category: "Frontend", isActive: false },

    // ===== BACKEND =====
    { name: "Node.js", icon: <FaNodeJs />, category: "Backend", isPrimary: true, isActive: true },
    { name: "Express", icon: <SiExpress />, category: "Backend", isActive: true },
    { name: "PHP", icon: <FaPhp />, category: "Backend", isActive: false },
    { name: "Python", icon: <AiOutlinePython />, category: "Backend", isActive: true },

    // ===== DATABASES =====
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "Databases", isPrimary: true, isActive: true },
    { name: "MongoDB", icon: <SiMongodb />, category: "Databases", isActive: true },
    { name: "MySQL", icon: <GrMysql />, category: "Databases", isActive: false },
    { name: "SQL", icon: <PiFileSqlThin />, category: "Databases", isActive: false },

    // ===== CLOUD =====
    { name: "AWS", icon: <FaAws />, category: "Cloud", isActive: true },

    // ===== DEVOPS =====
    { name: "CI/CD", icon: <MdOutlineAutoAwesome />, category: "DevOps", isActive: true },
    { name: "GitHub Actions", icon: <SiGithubactions />, category: "DevOps", isActive: true },

    // ===== TOOLS =====
    { name: "Git", icon: <FaGitSquare />, category: "Tools", isActive: true },
    { name: "GitHub", icon: <FaGithub />, category: "Tools", isActive: true },

    // ===== WORKFLOW =====
    { name: "AI-Assisted Development", icon: <MdOutlineAutoAwesome />, category: "Workflow", isActive: true },
];

export default function Skills() {
    const ref = useRef<HTMLDivElement | null>(null);

    const categories: SkillCategory[] = [
        "Frontend",
        "Backend",
        "Databases",
        "Cloud",
        "DevOps",
        "Tools",
        "Workflow",
    ];

    return (
        <section id="skills">
            <div className="container">
                <h2>Skills</h2>

                <div className="content" ref={ref}>
                    {categories.map((category) => {
                        const filtered = skills.filter(
                            (skill) =>
                                skill.category === category &&
                                skill.isActive
                        );

                        if (!filtered.length) return null;

                        return (
                            <div
                                key={category}
                                className="skill-group"
                            >
                                <h3 className="group-title">
                                    {category}
                                </h3>

                                <div className="tools">
                                    {filtered.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className={`skill-item ${skill.isPrimary
                                                    ? "primary"
                                                    : ""
                                                }`}
                                        >
                                            <div className="icon">
                                                {skill.icon}
                                            </div>

                                            <span className="skill-name">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}