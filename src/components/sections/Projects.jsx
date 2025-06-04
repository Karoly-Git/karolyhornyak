import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

import ProjectCard from '../ProjectCard';

import { projects } from "../../data/projects";
import { MdOutlineNavigateNext as Arrow } from 'react-icons/md';
import { motion as m, useInView } from 'framer-motion';

const sectionVariants = {
    initial: { opacity: 0, y: 180 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } }
};

function PreviousArrow(props) {
    const { onClick } = props;
    return (
        <div
            id="previous-button"
            className="slide-btn"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="slide-btn"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}

export default function Projects({ projectsRef }) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionInView = useInView(projectsRef, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (sectionInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [sectionInView, hasAnimated]);

    const [projectsList, setProjectsList] = useState([...projects.filter(project => project.group === "website")]);
    const [activeIndex, setActiveIndex] = useState(0);
    const groups = ["website", "web-app", "api"];

    const filteredProjects = (group) => {
        const filteredProjects = projects.filter(project => project.group === group);
        setProjectsList(filteredProjects);
    };

    const handleClick = (index, group) => {
        setActiveIndex(index);
        filteredProjects(group);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        customPaging: (i) => (
            <div>
                {i + 1}
            </div>
        ),
        appendDots: (dots) => (
            <ul>{dots}</ul>
        ),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <section id='pro' ref={projectsRef}>
            {false && <m.h2 initial="initial" animate={hasAnimated ? "animate" : "initial"} variants={sectionVariants}>
                Projects
            </m.h2>}

            <h2>
                Projects
            </h2>

            <m.ul className='project-filter' initial="initial" animate={hasAnimated ? "animate" : "initial"} variants={sectionVariants}>
                {groups.map((group, index) => (
                    <li key={group}>
                        <p
                            className={`selector ${activeIndex === index ? 'active-selector' : ''}`}
                            onClick={() => handleClick(index, group)}
                        >
                            {group.toUpperCase()} ({projects.filter(project => project.group === group && project.isActive).length})
                        </p>
                    </li>
                ))}
            </m.ul>

            <Slider {...settings}>
                {projectsList.map((project, index) => (
                    project.isActive && <div key={project.alt + index}>
                        <ProjectCard
                            name={project.name}
                            group={project.group}
                            category={project.category}
                            src={project.src}
                            alt={project.alt}
                            description={project.description}
                            stack={project.stack}
                            liveDemoUrl={project.liveDemoUrl}
                            gitHubUrl={project.gitHubUrl}
                            isRepoPrivate={project.isRepoPrivate}
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
}
