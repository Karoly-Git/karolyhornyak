import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import { reviews, type Review } from "@/data/reviews";
import { MdOutlineNavigateNext as Arrow } from "react-icons/md";
import { FaQuoteLeft as QIconL } from "react-icons/fa";
import { FaQuoteRight as QIconR } from "react-icons/fa";
import { motion as m, useInView } from "framer-motion";
import type { MouseEventHandler } from "react";

type ArrowProps = {
    onClick?: MouseEventHandler<HTMLDivElement>;
};

function PreviousArrow({ onClick }: ArrowProps) {
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

function NextArrow({ onClick }: ArrowProps) {
    return (
        <div
            className="slide-btn"
            onClick={onClick}
        >
            <Arrow
                className="icon"
                style={{ transform: "rotate(180deg)" }}
            />
        </div>
    );
}

export default function Reviews() {
    // ✅ FIXED TYPE HERE
    const sectionRef = useRef<HTMLHeadingElement>(null);

    const [hasAnimated, setHasAnimated] = useState(false);

    const sectionInView = useInView(sectionRef, {
        once: true,
        amount: 0.1,
    });

    useEffect(() => {
        if (sectionInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [sectionInView, hasAnimated]);

    const activeReviews: Review[] = reviews.filter(
        (slide) => slide.isActive
    );

    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <m.section id="reviews">
            <div className="container">
                <Slider {...settings}>
                    {activeReviews.map(
                        (slide: Review, index: number) => (
                            <div key={index} className="content">
                                <p>
                                    <i>
                                        <QIconL className="icon icon-1" />
                                        {slide.comment}
                                        <QIconR className="icon icon-2" />
                                    </i>
                                </p>
                                <h3 className="name">{slide.name}</h3>
                                <h5 className="name">{slide.company}</h5>
                            </div>
                        )
                    )}
                </Slider>
            </div>
        </m.section>
    );
}
