/**
 * PageTransition — Valten AI Systems
 * Wraps page content with a smooth fade-up entrance animation.
 * Uses CSS keyframes — no animation library needed.
 */

import { ReactNode, useEffect, useRef } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Force reflow to ensure animation plays on every navigation
    el.style.animation = "none";
    void el.offsetHeight; // trigger reflow
    el.style.animation = "";
  }, []);

  return (
    <div
      ref={ref}
      style={{
        animation: "pageEnter 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
      }}
    >
      {children}
    </div>
  );
}
