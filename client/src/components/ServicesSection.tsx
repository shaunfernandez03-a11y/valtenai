/**
 * ServicesSection — Valten AI Systems
 * Design: Kinetic Gold — 4 service icon cards on dark background
 */

import TiltCard from "./TiltCard";
import LuxuryGlow from "./LuxuryGlow";

const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663572697914/PdGDYhLxnpe2BZEHET7NRV/valten-services-bg-NUVxyWKQTd6SaVMc6UFA82.webp";

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#c9a84c" strokeWidth="1.5" />
        <path d="M12 14c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-2l-4 4v-4h-2c-1.1 0-2-.9-2-2v-4z" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
        <circle cx="15" cy="16" r="1" fill="#c9a84c" />
        <circle cx="18" cy="16" r="1" fill="#c9a84c" />
        <circle cx="21" cy="16" r="1" fill="#c9a84c" />
      </svg>
    ),
    title: "AI Phone Assistant",
    desc: "Never miss a call again. Our AI phone assistant answers 24/7, takes bookings, handles enquiries, and qualifies leads — all in your brand's voice.",
    highlight: "24/7 availability",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#c9a84c" strokeWidth="1.5" />
        <rect x="10" y="12" width="16" height="12" rx="2" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
        <path d="M14 17h8M14 20h5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="26" cy="12" r="3" fill="#c9a84c" />
      </svg>
    ),
    title: "AI Chatbot & Virtual Assistant",
    desc: "Engage website visitors instantly. Your AI chatbot answers FAQs, captures leads, and books tables or appointments around the clock.",
    highlight: "Instant engagement",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#c9a84c" strokeWidth="1.5" />
        <rect x="9" y="11" width="18" height="14" rx="2" stroke="#c9a84c" strokeWidth="1.5" fill="none" />
        <path d="M13 15h10M13 18h7M13 21h5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Website Build",
    desc: "A fast, mobile-first website built to convert visitors into customers. Clean design, integrated booking, and built for Google performance.",
    highlight: "Conversion-optimised",
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="17" stroke="#c9a84c" strokeWidth="1.5" />
        <path d="M18 10l2.2 6.8H27l-5.7 4.1 2.2 6.8L18 23.6l-5.5 4.1 2.2-6.8L9 16.8h6.8L18 10z" stroke="#c9a84c" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
    ),
    title: "SEO & Google Visibility",
    desc: "Dominate local search results. We optimise your Google Business Profile, build citations, and implement on-page SEO so customers find you first.",
    highlight: "Rank #1 locally",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "#0a0f1e",
        overflow: "hidden",
      }}
    >
      {/* Luxury glow spotlight */}
      <LuxuryGlow position="center" intensity="subtle" color="gold" />

      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${SERVICES_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          pointerEvents: "none",
        }}
      />

      <div className="section-sep" style={{ marginBottom: "5rem" }} />
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
            What We Build For You
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#f8f8f8",
              lineHeight: 1.15,
              maxWidth: "600px",
              margin: "0 auto 1rem",
            }}
          >
            AI Systems That{" "}
            <span className="text-gold-gradient">Work While You Sleep</span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              color: "rgba(248,248,248,0.55)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every system we build is custom-designed for your hospitality business — no templates, no one-size-fits-all.
          </p>
        </div>

        {/* Service cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((s, i) => (
            <TiltCard
              key={i}
              className="card-dark reveal"
              style={{
                padding: "2.25rem 1.75rem",
                transitionDelay: `${i * 0.1}s`,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Icon */}
              <div style={{ marginBottom: "0.25rem" }}>{s.icon}</div>

              {/* Highlight badge */}
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#c9a84c",
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "2px",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                {s.highlight}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#f8f8f8",
                  lineHeight: 1.3,
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  color: "rgba(248,248,248,0.58)",
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {s.desc}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
