import { Link, useLocation, useNavigate } from "react-router-dom";

import "@/features/navigation/navigation.styles.scss";

export default function DesktopNavigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollTo = (id: string) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="navigation desktop-navigation">
            <ul>
                <li onClick={() => scrollTo("about")}>About</li>
                <li onClick={() => scrollTo("skills")}>Skills</li>
                <li onClick={() => scrollTo("resume")}>Resume</li>
                <li onClick={() => scrollTo("projects")}>Projects</li>

                <li>
                    <Link to="/blog">Blog</Link>
                </li>

                <li onClick={() => scrollTo("contact")}>Contact</li>
            </ul>
        </nav>
    );
}
