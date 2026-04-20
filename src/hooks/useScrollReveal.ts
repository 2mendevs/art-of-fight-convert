import { useEffect } from "react";

/**
 * Adds `is-visible` class to all `.reveal-on-scroll` elements
 * once they enter the viewport.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};
