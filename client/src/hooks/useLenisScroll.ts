import { useEffect } from "react";
import Lenis from "lenis";

/**
 * useLenisScroll — Initialize Lenis smooth scroll globally
 * Creates a single Lenis instance with luxury dampening settings
 */
export function useLenisScroll() {
  useEffect(() => {
    // Create Lenis instance with luxury settings
    const lenis = new Lenis({
      duration: 1.2, // Smooth scroll duration (luxury feel = longer)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Animation frame loop
    let raf: number;
    function raf_callback(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(raf_callback);
    }
    raf = requestAnimationFrame(raf_callback);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}
