/**
 * PainPointsSection — Valten AI Systems
 * Design: Kinetic Gold — 3 pain point cards with gold left border accent
 */

import TiltCard from "./TiltCard";

const painPoints = [
  {
    icon: "📞",
    title: "Missed Calls Losing You Bookings",
    desc: "Every unanswered call is a booking walking out the door. Your competitors are capturing those customers while you're busy running the floor.",
  },
  {
    icon: "⏰",
    title: "Hours Wasted on Admin & No-Shows",
    desc: "Manual follow-ups, chasing confirmations, and handling no-shows drain your team's energy and your bottom line every single week.",
  },
  {
    icon: "🔍",
    title: "Invisible Online While Competitors Grow",
    desc: "If customers can't find you on Google, they're finding someone else. Outdated listings and weak SEO are silently costing you revenue.",
  },
];

export default function PainPointsSection() {
  return (
    <section
      id="pain-points"
      style={{
        background: "linear-gradient(180deg, #0a0f1e 0%, #0c1220 50%, #0a0f1e 100%)",
        padding: "6rem 0 5rem",
        position: "relative",
      }}
    >
      {/* Top separator */}
      <div className="section-sep" style={{ marginBottom: "5rem" }} />

      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1rem", color: "#c9a84c" }}>
            Sound Familiar?
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
              margin: "0 auto",
            }}
          >
            The Hidden Costs of{" "}
            <span className="text-gold-gradient">Running Without AI</span>
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {painPoints.map((p, i) => (
            <TiltCard
              key={i}
              className="card-dark card-gold-border reveal"
              style={{
                padding: "2rem 1.75rem",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#f8f8f8",
                  marginBottom: "0.75rem",
                  lineHeight: 1.35,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(248,248,248,0.6)",
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
