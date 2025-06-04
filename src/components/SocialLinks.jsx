import React from 'react';
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa";
import { FaFacebookSquare as Facebook } from "react-icons/fa";
import { FaYoutube as Youtube } from "react-icons/fa";

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://www.linkedin.com/in/karoly-hornyak/" target="_blank" rel="noopener noreferrer">
                <Linkedin className='icon' />
            </a>

            <a href="https://github.com/Karoly-Git" target="_blank" rel="noopener noreferrer">
                <Github className='icon' />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61572746828032" target="_blank" rel="noopener noreferrer">
                <Facebook className='icon' />
            </a>

            {/*<a href="https://www.youtube.com/channel/UC_NS9-02WvPjZpvKqkJf4vQ" target="_blank" rel="noopener noreferrer">
                <Youtube className='icon' />
            </a>*/}
        </div>)
}
