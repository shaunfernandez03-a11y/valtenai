/**
 * BeforeAfterSection — Valten AI Systems
 * Interactive toggle showing a business without AI vs with AI.
 * Metrics animate when switching states.
 */

import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const WITHOUT = [
  { icon: "📞", metric: "67%", label: "of calls go to voicemail", bad: true },
  { icon: "⏱️", metric: "4+ hrs", label: "wasted on admin weekly", bad: true },
  { icon: "🔍", metric: "Page 3", label: "on Google search results", bad: true },
  { icon: "💬", metric: "3 min", label: "average response to enquiries", bad: true },
  { icon: "📉", metric: "22%", label: "no-show rate on bookings", bad: true },
  { icon: "⭐", metric: "3.8★", label: "average Google review score", bad: true },
];

const WITH = [
  { icon: "📞", metric: "100%", label: "of calls answered instantly", bad: false },
  { icon: "⏱️", metric: "0 hrs", label: "admin — fully automated", bad: false },
  { icon: "🔍", metric: "Top 3", label: "on Google local results", bad: false },
  { icon: "💬", metric: "< 1s", label: "AI response time, 24/7", bad: false },
  { icon: "📉", metric: "< 5%", label: "no-show rate with auto-reminders", bad: false },
  { icon: "⭐", metric: "4.8★", label: "average Google review score", bad: false },
];

export default function BeforeAfterSection() {
  const [showAI, setShowAI] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const data = showAI ? WITH : WITHOUT;

  return (
    <section
      id="before-after"
      className="reveal"
      style={{
        padding: "6rem 0",
        position: "relative",
        background: isDark
          ? "linear-gradient(180deg, #0a0f1e 0%, #0c1322 100%)"
          : "var(--t-bg)",
      }}
    >
      <div className="section-sep" style={{ marginBottom: "5rem" }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1rem", color: isDark ? "#c9a84c" : "#a07828" }}>
            The Difference AI Makes
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: isDark ? "#f8f8f8" : "#1a1408",
              lineHeight: 1.15,
              marginBottom: "2rem",
            }}
          >
            Your Business,{" "}
            <span className="text-gold-gradient">Before and After</span>
          </h2>

          {/* Toggle */}
          <div
            style={{
              display: "inline-flex",
              background: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)",
              border: `1px solid ${isDark ? "rgba(201,168,76,0.2)" : "rgba(160,120,40,0.2)"}`,
              borderRadius: "100px",
              padding: "4px",
              gap: "4px",
            }}
          >
            <button
              onClick={() => setShowAI(false)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                padding: "0.55rem 1.5rem",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: !showAI
                  ? "linear-gradient(135deg, #c9a84c, #e2c87a)"
                  : "transparent",
                color: !showAI ? "#0a0f1e" : isDark ? "rgba(248,248,248,0.5)" : "rgba(26,20,8,0.5)",
              }}
            >
              Without AI
            </button>
            <button
              onClick={() => setShowAI(true)}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                padding: "0.55rem 1.5rem",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background: showAI
                  ? "linear-gradient(135deg, #c9a84c, #e2c87a)"
                  : "transparent",
                color: showAI ? "#0a0f1e" : isDark ? "rgba(248,248,248,0.5)" : "rgba(26,20,8,0.5)",
              }}
            >
              With Valten AI ✦
            </button>
          </div>
        </div>

        {/* Metrics grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              style={{
                background: isDark
                  ? showAI
                    ? "rgba(201,168,76,0.06)"
                    : "rgba(255,255,255,0.03)"
                  : showAI
                    ? "rgba(201,168,76,0.08)"
                    : "rgba(0,0,0,0.04)",
                border: `1px solid ${
                  showAI
                    ? "rgba(201,168,76,0.3)"
                    : isDark
                      ? "rgba(255,80,80,0.2)"
                      : "rgba(200,60,60,0.2)"
                }`,
                borderRadius: "12px",
                padding: "1.5rem 1.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                transitionDelay: `${i * 0.04}s`,
                opacity: 1,
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: "1.75rem", flexShrink: 0 }}>{item.icon}</div>

              {/* Metric + label */}
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                    color: showAI
                      ? "#c9a84c"
                      : isDark
                        ? "rgba(255,100,100,0.9)"
                        : "#c0392b",
                    transition: "color 0.4s ease",
                  }}
                >
                  {item.metric}
                </div>
                <div
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.82rem",
                    color: isDark ? "rgba(248,248,248,0.55)" : "rgba(26,20,8,0.6)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </div>
              </div>

              {/* Status dot */}
              <div
                style={{
                  marginLeft: "auto",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: showAI ? "#4ade80" : "#f87171",
                  boxShadow: showAI
                    ? "0 0 8px rgba(74,222,128,0.6)"
                    : "0 0 8px rgba(248,113,113,0.6)",
                  transition: "all 0.4s ease",
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            opacity: showAI ? 0 : 1,
            transform: showAI ? "translateY(8px)" : "translateY(0)",
            transition: "all 0.4s ease",
            pointerEvents: showAI ? "none" : "auto",
          }}
        >
          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              color: isDark ? "rgba(248,248,248,0.5)" : "rgba(26,20,8,0.5)",
              marginBottom: "1.25rem",
              fontStyle: "italic",
            }}
          >
            Sound familiar? Let's fix it.
          </p>
          <a
            href="https://calendly.com/shaun-valtenai/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); window.open("https://calendly.com/shaun-valtenai/30min", "_blank", "noopener,noreferrer"); }}
            className="btn-gold"
            style={{ fontSize: "0.8rem", padding: "0.9rem 2.2rem" }}
          >
            Get the AI Version →
          </a>
        </div>
      </div>
    </section>
  );
}
