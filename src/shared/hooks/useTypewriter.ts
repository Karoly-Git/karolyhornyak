import { useEffect, useRef, useState } from "react";

type UseTypewriterOptions = {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    startDelay?: number;
    enabled?: boolean;
};

export function useTypewriter({
    words,
    typingSpeed = 60,
    deletingSpeed = 60,
    pauseDuration = 3000,
    startDelay = 2000,
    enabled = true,
}: UseTypewriterOptions) {
    const [text, setText] = useState<string>("");
    const [isTyping, setIsTyping] = useState<boolean>(false);

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const wordIndexRef = useRef(0);
    const charIndexRef = useRef(0);
    const isDeletingRef = useRef(false);

    // 🔥 Keep latest speed values (avoids stale closure problem)
    const typingSpeedRef = useRef(typingSpeed);
    const deletingSpeedRef = useRef(deletingSpeed);
    const pauseDurationRef = useRef(pauseDuration);

    useEffect(() => {
        typingSpeedRef.current = typingSpeed;
        deletingSpeedRef.current = deletingSpeed;
        pauseDurationRef.current = pauseDuration;
    }, [typingSpeed, deletingSpeed, pauseDuration]);

    useEffect(() => {
        if (!enabled || !words.length) return;

        const tick = () => {
            const currentWord = words[wordIndexRef.current];

            setIsTyping(true);

            if (!isDeletingRef.current) {
                // Typing forward
                if (charIndexRef.current < currentWord.length) {
                    charIndexRef.current++;
                    setText(currentWord.slice(0, charIndexRef.current));

                    timeoutRef.current = setTimeout(
                        tick,
                        typingSpeedRef.current
                    );
                } else {
                    // Pause before deleting
                    setIsTyping(false);
                    isDeletingRef.current = true;

                    timeoutRef.current = setTimeout(
                        tick,
                        pauseDurationRef.current
                    );
                }
            } else {
                // Deleting
                if (charIndexRef.current > 0) {
                    charIndexRef.current--;
                    setText(currentWord.slice(0, charIndexRef.current));

                    timeoutRef.current = setTimeout(
                        tick,
                        deletingSpeedRef.current
                    );
                } else {
                    // Move to next word
                    isDeletingRef.current = false;
                    wordIndexRef.current =
                        (wordIndexRef.current + 1) % words.length;

                    timeoutRef.current = setTimeout(
                        tick,
                        typingSpeedRef.current
                    );
                }
            }
        };

        timeoutRef.current = setTimeout(tick, startDelay);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [enabled, words, startDelay]);

    return { text, isTyping };
}
