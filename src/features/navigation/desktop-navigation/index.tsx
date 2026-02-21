import { Link, useLocation, useNavigate } from "react-router-dom";

import "./desktop-navigation.scss";

export default function DesktopNavigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollTo = (id: string) => {
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } });
            return;
        }

        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="navigation desktop-navigation">
            <ul>
                <li onClick={() => scrollTo("hero")}>Home</li>
                <li onClick={() => scrollTo("about")}>About</li>
                <li onClick={() => scrollTo("skills")}>Skills</li>
                <li onClick={() => scrollTo("resume")}>Resume</li>
                <li onClick={() => scrollTo("projects")}>Projects</li>

                <li>
                    <Link to="/blog">Blogs</Link>
                </li>

                <li onClick={() => scrollTo("contact")}>Contact</li>
            </ul>
        </nav>
    );
}