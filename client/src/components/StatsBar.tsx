/**
 * StatsBar — Valten AI Systems
 * Design: Kinetic Gold — horizontal stats bar with animated count-up numbers
 */

import { useEffect, useRef, useState } from "react";

// Stats config: numeric ones get count-up animation, text ones display as-is
const stats = [
  { prefix: "", numeric: 30, suffix: "%+", label: "Average Reduction in Admin Time" },
  { prefix: "", numeric: 48, suffix: "hrs", label: "Average Time to Go Live" },
  { prefix: "", numeric: 24, suffix: "/7", label: "AI Systems Running for Clients" },
  { prefix: "", numeric: null, suffix: "Melb & Adelaide", label: "Serving Businesses Across" },
];

function useCountUp(target: number | null, duration = 1800, startTrigger: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startTrigger || target === null) return;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [startTrigger, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  triggered,
}: {
  stat: typeof stats[0];
  index: number;
  triggered: boolean;
}) {
  const count = useCountUp(stat.numeric, 1600, triggered);

  const displayValue =
    stat.numeric !== null
      ? `${stat.prefix}${count}${stat.suffix}`
      : `${stat.suffix}`;

  return (
    <div
      className="reveal"
      style={{
        transitionDelay: `${index * 0.12}s`,
        padding: "0.5rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "clamp(2rem, 5vw, 3rem)",
          color: "#c9a84c",
          lineHeight: 1,
          marginBottom: "0.4rem",
          letterSpacing: "-0.01em",
          textShadow: "0 0 30px rgba(201,168,76,0.4)",
        }}
      >
        {displayValue}
      </div>
      <div
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.82rem",
          fontWeight: 500,
          color: "rgba(248,248,248,0.6)",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.04) 100%)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
        padding: "3rem 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {stats.map((s, i) => (
            <StatItem key={i} stat={s} index={i} triggered={triggered} />
          ))}
        </div>
      </div>
    </section>
  );
}
