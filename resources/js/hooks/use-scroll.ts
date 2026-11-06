import { useEffect, useState } from "react"

export function useScroll(getThreshold : () => number): boolean {
    const [hasScrolledPast, setHasScrolledPast] = useState(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setHasScrolledPast(window.scrollY > getThreshold());
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [getThreshold]);

    return hasScrolledPast;
}