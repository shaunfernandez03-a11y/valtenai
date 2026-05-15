/**
 * HeroSection — Valten AI Systems
 * Design: Kinetic Gold — full-width canvas hero with pendulum logo
 * 
 * - HTML5 canvas: blue-white droplets → gold pixel particles at 55%
 * - Pendulum logo: rotate ±12deg, 3.5s, transform-origin 50% 28%
 * - Staggered fade-up content overlay
 */

import { useTheme } from "../contexts/ThemeContext";
import HeroCanvas from "./HeroCanvas";

const LOGO_URL = "/logo.png";
const AUDIT_URL = "https://calendar.app.google/5VqGMRsABdJJZMdX8";

const bullets = [
  "GET FOUND ON GOOGLE FIRST",
  "GENERATE MORE CUSTOMERS, FASTER",
  "AUTOMATE YOUR BOOKINGS & FOLLOW-UPS",
  "SAVE 10+ HOURS EVERY WEEK",
];

export default function HeroSection() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: isDark
          ? "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(20,40,90,0.55) 0%, #0a0f1e 70%)"
          : "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.12) 0%, #f5f0e8 70%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        transition: "background 0.4s ease",
      }}
    >
      {/* Canvas animation — dark mode only */}
      <div style={{ opacity: isDark ? 1 : 0, transition: "opacity 0.4s ease", position: "absolute", inset: 0, pointerEvents: "none" }}>
        <HeroCanvas />
      </div>

      {/* Hero background image overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(https://d2xsxph8kpxj0f.cloudfront.net/310519663572697914/PdGDYhLxnpe2BZEHET7NRV/valten-hero-bg-Hwd3mGUVy9biUgbPnKN8L3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      {/* Radial glow overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 40% at 50% 55%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo top right — fixed, follows scroll, click to toggle theme */}
      <div
        style={{
          position: "fixed",
          top: "5rem",
          right: "2rem",
          zIndex: 50,
          opacity: 0,
          animation: "fadeInUp 1s ease 0.3s forwards",
        }}
      >
        <button
          onClick={toggleTheme}
          aria-label="Toggle light/dark mode"
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            position: "relative",
            display: "block",
          }}
        >
          <img
            src={LOGO_URL}
            alt="Valten AI logo — click to toggle theme"
            style={{
              width: "clamp(80px, 10vw, 110px)",
              height: "clamp(80px, 10vw, 110px)",
              objectFit: "contain",
              filter: theme === "dark"
                ? "drop-shadow(0 0 24px rgba(201,168,76,0.35))"
                : "drop-shadow(0 0 24px rgba(201,168,76,0.6)) brightness(0.85)",
              transition: "filter 0.4s ease",
            }}
          />
          {/* Mode indicator pill */}
          <span style={{
            position: "absolute",
            bottom: "-6px",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.52rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: isDark ? "#c9a84c" : "#a07828",
            background: isDark ? "rgba(10,15,30,0.85)" : "rgba(245,240,232,0.92)",
            border: `1px solid ${isDark ? "rgba(201,168,76,0.25)" : "rgba(160,120,40,0.3)"}`,
            borderRadius: "20px",
            padding: "2px 8px",
            whiteSpace: "nowrap",
          }}>
            {theme === "dark" ? "☀ light" : "☾ dark"}
          </span>
        </button>
      </div>

      {/* Hero content overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          textAlign: "center",
          padding: "clamp(6rem, 12vh, 9rem) 1.5rem clamp(3rem, 6vh, 5rem)",
          maxWidth: "780px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <p
          className="eyebrow fade-in-up delay-100"
          style={{ marginBottom: "1.5rem", color: isDark ? "#c9a84c" : "#a07828" }}
        >
          Intelligent Systems for Growing Businesses
        </p>

        {/* H1 */}
        <h1
          className="fade-in-up delay-200"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.1,
            color: isDark ? "#f8f8f8" : "#1a1408",
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          Automate Your{" "}
          <span className="text-gold-gradient">Business Growth</span>
        </h1>

        {/* Gold decorative divider */}
        <div className="gold-divider fade-in-up delay-300" style={{ marginBottom: "2rem" }}>
          <span style={{ color: isDark ? "#c9a84c" : "#a07828", fontSize: "0.5rem" }}>●</span>
        </div>

        {/* Tagline */}
        <p
          className="fade-in-up delay-400"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            color: isDark ? "rgba(248,248,248,0.6)" : "rgba(26,20,8,0.62)",
            letterSpacing: "0.08em",
            marginBottom: "2rem",
            fontStyle: "italic",
          }}
        >
          AI systems that save you time, win more bookings, and grow your business — on autopilot.
        </p>

        {/* Bullet points */}
        <ul
          className="fade-in-up delay-500"
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 auto 2.5rem",
            display: "inline-flex",
            flexDirection: "column",
            gap: "0.65rem",
            textAlign: "left",
          }}
        >
          {bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(0.72rem, 1.5vw, 0.82rem)",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: isDark ? "#f8f8f8" : "#1a1408",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  color: isDark ? "#c9a84c" : "#a07828",
                  fontSize: "0.9rem",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                ▶
              </span>
              {b}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="fade-in-up delay-700">
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }}
            className="btn-gold"
            style={{ fontSize: "0.78rem", padding: "1rem 2.4rem" }}
          >
            Book Your Free 15-Min Call
            <span style={{ fontSize: "1rem" }}>→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="fade-in-up delay-1200"
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          zIndex: 5,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            color: "rgba(201,168,76,0.5)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)",
            animation: "fadeInUp 1s ease infinite alternate",
          }}
        />
      </div>
    </section>
  );
}
