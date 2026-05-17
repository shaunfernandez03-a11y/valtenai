/**
 * TiltCard — Valten AI Systems
 * Wraps any card content with a subtle 3D tilt effect that follows the cursor.
 * Uses pure CSS transforms — no libraries needed.
 */

import { useRef, MouseEvent, ReactNode, CSSProperties } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxTilt?: number; // degrees, default 8
  glare?: boolean;  // subtle light glare on tilt
}

export default function TiltCard({
  children,
  className = "",
  style = {},
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = "transform 0.1s ease";

    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(201,168,76,0.12) 0%, transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    card.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        ...style,
        position: "relative",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glare overlay */}
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            opacity: 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      )}
      {/* Card content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
