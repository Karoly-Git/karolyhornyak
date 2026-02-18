import {
    FaLinkedin,
    FaGithub,
    FaFacebookSquare,
    FaYoutube,
} from "react-icons/fa";
import type { IconType } from "react-icons";

import "./social-links.scss";

type SocialLink = {
    name: string;
    href: string;
    icon: IconType;
    isActive: boolean;
};

const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/karoly-hornyak/",
        icon: FaLinkedin,
        isActive: true,
    },
    {
        name: "GitHub",
        href: "https://github.com/Karoly-Git",
        icon: FaGithub,
        isActive: true,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61572746828032",
        icon: FaFacebookSquare,
        isActive: false,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ",
        icon: FaYoutube,
        isActive: false,
    },
];

export default function SocialLinks() {
    return (
        <div className="social-links">
            {SOCIAL_LINKS.filter((link) => link.isActive).map(
                ({ name, href, icon: Icon }) => (
                    <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                    >
                        <Icon className="icon" />
                    </a>
                )
            )}
        </div>
    );
}
