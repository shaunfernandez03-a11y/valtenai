/**
 * StatsBar — Valten AI Systems
 * Design: Kinetic Gold — horizontal stats bar with gold accent numbers
 */

const stats = [
  { value: "30%+", label: "Average Reduction in Admin Time" },
  { value: "48hrs", label: "Average Time to Go Live" },
  { value: "24/7", label: "AI Systems Running for Clients" },
  { value: "Melb & Adelaide", label: "Serving Businesses Across" },
];

export default function StatsBar() {
  return (
    <section
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
            textAlign: "center",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.1}s`,
                padding: "0.5rem",
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
                {s.value}
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
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
