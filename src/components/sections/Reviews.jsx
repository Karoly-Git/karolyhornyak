import React, { useRef, useState, useEffect } from 'react';
import Slider from "react-slick";
import { reviews } from "../../data/reviews";
import { MdOutlineNavigateNext as Arrow } from 'react-icons/md';
import { FaQuoteLeft as QIconL } from "react-icons/fa";
import { FaQuoteRight as QIconR } from "react-icons/fa";
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

export default function Reviews() {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (sectionInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [sectionInView, hasAnimated]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <m.section
            id='reviews'
            ref={sectionRef}
            initial="initial"
            animate={hasAnimated ? "animate" : "initial"}
            variants={sectionVariants}
        >
            <Slider {...settings}>
                {reviews.map((slide, reviewsIndex) => (
                    slide.isActive &&
                    <div key={"slide" + reviewsIndex} className="content">
                        <p>
                            <i>
                                <QIconL className="icon icon-1" />
                                {slide.comment}
                                <QIconR className="icon icon-2" />
                            </i>
                        </p>
                        <h3 className='name'>
                            {slide.name}
                        </h3>
                        <h5 className='name'>
                            {slide.company}
                        </h5>
                    </div>
                ))}
            </Slider>
        </m.section>
    );
}
