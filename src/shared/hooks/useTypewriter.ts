import { useEffect, useState } from "react";

type UseTypewriterOptions = {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    startDelay?: number;
};

export function useTypewriter({
    words,
    typingSpeed = 60,
    deletingSpeed = 60,
    pauseDuration = 3000,
    startDelay = 2000,
}: UseTypewriterOptions) {
    const [text, setText] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);

    useEffect(() => {
        if (!words.length) return;

        let currentWordIndex = 0;
        let timeoutId: ReturnType<typeof setTimeout>;

        const typeAndDelete = (
            word: string,
            isDeleting = false,
            charIndex = 0
        ): void => {
            setIsTyping(true);

            if (isDeleting) {
                if (charIndex >= 0) {
                    setText(word.slice(0, charIndex));
                    timeoutId = setTimeout(
                        () => typeAndDelete(word, true, charIndex - 1),
                        deletingSpeed
                    );
                } else {
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    timeoutId = setTimeout(
                        () => typeAndDelete(words[currentWordIndex]),
                        typingSpeed
                    );
                }
            } else {
                if (charIndex < word.length) {
                    setText(word.slice(0, charIndex + 1));
                    timeoutId = setTimeout(
                        () => typeAndDelete(word, false, charIndex + 1),
                        typingSpeed
                    );
                } else {
                    timeoutId = setTimeout(() => {
                        setIsTyping(false);
                        typeAndDelete(word, true, charIndex - 1);
                    }, pauseDuration);
                }
            }
        };

        timeoutId = setTimeout(() => {
            typeAndDelete(words[currentWordIndex]);
        }, startDelay);

        return () => clearTimeout(timeoutId);
    }, [words, typingSpeed, deletingSpeed, pauseDuration, startDelay]);

    return { text, isTyping };
}
