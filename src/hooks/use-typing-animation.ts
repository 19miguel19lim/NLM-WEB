import { useState, useEffect } from "react";

interface UseTypingAnimationOptions {
  texts: string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  pauseTime?: number;
}

export const useTypingAnimation = ({
  texts,
  speed = 100,
  delay = 1000,
  loop = false,
  pauseTime = 2000,
}: UseTypingAnimationOptions) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (isPaused) return;

    const currentText = texts[textIndex];
    if (!currentText) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && currentIndex < currentText.length) {
          // Typing forward
          setDisplayedText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else if (isDeleting && currentIndex > 0) {
          // Deleting backward
          setDisplayedText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else if (!isDeleting && currentIndex === currentText.length) {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        } else if (isDeleting && currentIndex === 0) {
          // Finished deleting, move to next text
          const nextTextIndex = (textIndex + 1) % texts.length;
          setTextIndex(nextTextIndex);
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      },
      isDeleting ? speed / 2 : speed
    ); // Delete faster than type

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    textIndex,
    texts,
    speed,
    loop,
    pauseTime,
    isPaused,
  ]);

  useEffect(() => {
    // Initial delay before starting animation
    const initialTimeout = setTimeout(() => {
      setIsPaused(false);
    }, delay);

    return () => clearTimeout(initialTimeout);
  }, [delay]);

  return displayedText;
};
