import { useEffect, useState } from "react";

export default function useTypewriter(words, {
    typingSpeed = 60,
    deletingSpeed = 60,
    pauseBeforeDelete = 3000,
    startDelay = 0
} = {}) {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let currentWordIndex = 0;
        let timeout;

        const typeAndDelete = (word, isDeleting = false, charIndex = 0) => {
            setIsTyping(true);

            if (isDeleting) {
                if (charIndex >= 0) {
                    setText(word.slice(0, charIndex));
                    timeout = setTimeout(
                        () => typeAndDelete(word, true, charIndex - 1),
                        deletingSpeed
                    );
                } else {
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    timeout = setTimeout(
                        () => typeAndDelete(words[currentWordIndex]),
                        typingSpeed
                    );
                }
            } else {
                if (charIndex < word.length) {
                    setText(word.slice(0, charIndex + 1));
                    timeout = setTimeout(
                        () => typeAndDelete(word, false, charIndex + 1),
                        typingSpeed
                    );
                } else {
                    timeout = setTimeout(
                        () => typeAndDelete(word, true, charIndex - 1),
                        pauseBeforeDelete
                    );
                }
            }
        };

        timeout = setTimeout(() => {
            typeAndDelete(words[currentWordIndex]);
        }, startDelay);

        return () => clearTimeout(timeout);
    }, [words, typingSpeed, deletingSpeed, pauseBeforeDelete, startDelay]);

    return { text, isTyping };
}
