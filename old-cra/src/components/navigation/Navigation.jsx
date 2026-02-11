import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import SocialLinks from "../SocialLinks";

export default function Navigation({
    aboutRef,
    skillsRef,
    resumeRef,
    projectsRef,
    contactRef,
    showSocial = false,
    disableMobileCollapse = false
}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        if (disableMobileCollapse) return;
        setIsOpen((prev) => !prev);
    }

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <nav className="navigation">
            {/* Desktop navigation (always visible if disableMobileCollapse) */}
            <div
                className={`nav-desktop ${disableMobileCollapse ? "force-visible" : ""
                    }`}
            >
                <NavLinks
                    aboutRef={aboutRef}
                    skillsRef={skillsRef}
                    resumeRef={resumeRef}
                    projectsRef={projectsRef}
                    contactRef={contactRef}
                />
                {showSocial && <SocialLinks />}
            </div>

            {/* Hamburger (disabled when collapse is disabled) */}
            {!disableMobileCollapse && (
                <button
                    className={`nav-toggle ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            )}

            {/* Mobile menu */}
            {!disableMobileCollapse && (
                <div className={`nav-mobile ${isOpen ? "open" : ""}`}>
                    <MobileNav
                        aboutRef={aboutRef}
                        skillsRef={skillsRef}
                        resumeRef={resumeRef}
                        projectsRef={projectsRef}
                        contactRef={contactRef}
                        onNavigate={closeMenu}
                    />

                    {showSocial && (
                        <div className="mobile-social">
                            <SocialLinks />
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
