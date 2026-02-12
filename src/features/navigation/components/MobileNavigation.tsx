import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import "@/features/navigation/navigation.styles.scss";

export default function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // 🔒 Lock / unlock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    const scrollTo = (id: string) => {
        setIsOpen(false);

        const executeScroll = () => {
            document.getElementById(id)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        };

        if (location.pathname !== "/") {
            navigate("/");

            // wait for route change + render
            setTimeout(executeScroll, 150);
        } else {
            // wait for menu close animation (0.4s)
            setTimeout(executeScroll, 350);
        }
    };

    return (
        <nav className="navigation mobile-navigation">
            <div className="mobile-header">
                <div
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <FaTimes className="close-icon" />
                    ) : (
                        <FaBars className="open-icon" />
                    )}
                </div>
            </div>

            <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
                <li onClick={() => scrollTo("hero")}>Home</li>
                <li onClick={() => scrollTo("about")}>About</li>
                <li onClick={() => scrollTo("skills")}>Skills</li>
                <li onClick={() => scrollTo("resume")}>Resume</li>
                <li onClick={() => scrollTo("projects")}>Projects</li>

                <li>
                    <Link to="/blog" onClick={() => setIsOpen(false)}>
                        Blog
                    </Link>
                </li>

                <li onClick={() => scrollTo("contact")}>Contact</li>
            </ul>
        </nav>
    );
}
