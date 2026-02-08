import { Link, useLocation, useNavigate } from "react-router-dom";

import './Nav.css';

export default function MobileNav({
    aboutRef,
    skillsRef,
    resumeRef,
    projectsRef,
    contactRef,
    onNavigate,
}) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleScroll(ref) {
        onNavigate?.();

        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                ref?.current?.scrollIntoView({ behavior: "smooth" });
            }, 50);
        } else {
            ref?.current?.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <ul className="nav-links mobile">
            <li>
                <a onClick={() => handleScroll(aboutRef)}>About</a>
            </li>
            <li>
                <a onClick={() => handleScroll(skillsRef)}>Skills</a>
            </li>
            <li>
                <a onClick={() => handleScroll(resumeRef)}>Experience</a>
            </li>
            <li>
                <a onClick={() => handleScroll(projectsRef)}>Projects</a>
            </li>

            <li>
                <Link
                    to="/blog"
                    onClick={() => {
                        onNavigate?.();
                        setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 0);
                    }}
                >
                    Blog
                </Link>
            </li>

            <li>
                <a onClick={() => handleScroll(contactRef)}>Contact</a>
            </li>
        </ul>
    );
}
