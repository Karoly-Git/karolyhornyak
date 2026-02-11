import React, { useState, useEffect } from 'react';
import { FaArrowUp as ArrowIcon } from "react-icons/fa";

export default function ScrollUp() {
    const showUpAt = 500;
    const [isScrollBtnVisible, setIsScrollBtnVisible] = useState(false);

    useEffect(() => {
        function getScrollPosition() {
            window.scrollY > showUpAt ? setIsScrollBtnVisible(true) : setIsScrollBtnVisible(false);
        }

        window.addEventListener('scroll', getScrollPosition);

        return () => {
            window.removeEventListener('scroll', getScrollPosition);
        }
    }, [])


    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <div
            className='scroll-up'
            onClick={scrollToTop}
            style={isScrollBtnVisible ? { right: '0.5rem' } : { right: '-3rem' }}
        >
            <ArrowIcon className='icon' />
        </div>
    )
}
