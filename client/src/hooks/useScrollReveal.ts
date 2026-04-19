/**
 * useScrollReveal — Valten AI Systems
 * Intersection Observer hook for scroll-triggered reveal animations.
 */

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
