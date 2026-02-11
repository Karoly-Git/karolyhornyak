import { Link, useLocation, useNavigate } from "react-router-dom";

import './Nav.scss';

export default function NavLinks({
    aboutRef,
    skillsRef,
    resumeRef,
    projectsRef,
    contactRef,
}) {
    const location = useLocation();
    const navigate = useNavigate();

    function handleScroll(ref) {
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
        <ul className="nav-links">
            <li><a onClick={() => handleScroll(aboutRef)}>About</a></li>
            <li><a onClick={() => handleScroll(skillsRef)}>Skills</a></li>
            <li><a onClick={() => handleScroll(resumeRef)}>Experience</a></li>
            <li><a onClick={() => handleScroll(projectsRef)}>Projects</a></li>

            <li>
                <Link
                    to="/blog"
                    onClick={() => {
                        setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }, 0);
                    }}
                >
                    Blog
                </Link>
            </li>

            <li><a onClick={() => handleScroll(contactRef)}>Contact</a></li>
        </ul>
    );
}
