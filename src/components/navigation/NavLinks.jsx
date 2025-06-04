import React from 'react';

export default function NavLinks({ aboutRef, skillsRef, resumeRef, projectsRef, contactRef }) {

    function scrollToElement(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ul className='nav-links'>
            <li><a onClick={() => scrollToElement(aboutRef)}>About</a></li>
            <li><a onClick={() => scrollToElement(skillsRef)}>Skills</a></li>
            <li><a onClick={() => scrollToElement(resumeRef)}>E&E</a></li>
            <li><a onClick={() => scrollToElement(projectsRef)}>Projects</a></li>
            <li><a onClick={() => scrollToElement(contactRef)}>Contact</a></li>
        </ul>
    )
}
