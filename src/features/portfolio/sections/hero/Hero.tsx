import { useState, useEffect, useRef } from "react";

import "./hero.scss";

export default function Hero() {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const words: string[] = [
        "I build reliable systems that solve real problems.",
        "Focused on practical, production-ready software.",
        "Turning complex ideas into scalable web applications.",
        "From frontend polish to backend reliability.",
    ];

    const [text, setText] = useState<string>("");
    const [isWaiting, setIsWaiting] = useState<boolean>(false);

    useEffect(() => {
        let currentWordIndex = 0;

        const typeAndDelete = (
            word: string,
            isDeleting: boolean = false,
            charIndex: number = 0
        ): void => {

            if (isDeleting) {
                if (charIndex >= 0) {
                    setText(word.slice(0, charIndex));
                    setTimeout(
                        () => typeAndDelete(word, true, charIndex - 1),
                        60
                    );
                } else {
                    currentWordIndex =
                        (currentWordIndex + 1) % words.length;

                    setTimeout(
                        () => typeAndDelete(words[currentWordIndex]),
                        60
                    );
                }
            } else {
                if (charIndex < word.length) {
                    setText(word.slice(0, charIndex + 1));
                    setTimeout(
                        () => typeAndDelete(word, false, charIndex + 1),
                        60
                    );
                } else {
                    setIsWaiting(true);

                    setTimeout(() => {
                        setIsWaiting(false);
                        typeAndDelete(word, true, charIndex - 1);
                    }, 3000);
                }
            }
        };

        const startTimeout = setTimeout(() => {
            typeAndDelete(words[currentWordIndex]);
        }, 1000);

        return () => clearTimeout(startTimeout);
    }, []);

    return (
        <section id="hero">
            <div className="container">
                <div
                    className="content"
                    ref={contentRef}
                >
                    <h1>Karoly Hornyak</h1>
                    <h4>Full-Stack Developer</h4>

                    <p>
                        <span>
                            {text}
                            <span
                                className={`blinking ${!isWaiting ? "stop-blinking" : ""
                                    }`}
                            />
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
