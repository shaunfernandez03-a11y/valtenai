/**
 * FounderSection — Valten AI Systems
 * Design: Kinetic Gold — founder story with photo, builds trust and humanises the brand
 */

const BOOKING_URL = "https://calendly.com/shaun-valtenai/30min";

export default function FounderSection() {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(180deg, #0a0f1e 0%, #0d1428 100%)",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gold glow behind photo */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* Photo */}
          <div
            className="reveal-left"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* Gold border frame */}
            <div
              style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(201,168,76,0.4) 0%, transparent 50%, rgba(201,168,76,0.2) 100%)",
                zIndex: 0,
              }}
            />
            <img
              src="/shaun-founder.jpg"
              alt="Shaun Fernandez — Founder of Valten AI Systems"
              style={{
                width: "100%",
                maxWidth: "420px",
                height: "auto",
                borderRadius: "12px",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />
          </div>

          {/* Content */}
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: "1rem", color: "#c9a84c" }}>
              Meet the Founder
            </p>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "#f8f8f8",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Built by Someone Who{" "}
              <span className="text-gold-gradient">Gets It</span>
            </h2>
            <p
              className="reveal"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                color: "rgba(248,248,248,0.72)",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Hey, I'm <strong style={{ color: "#f8f8f8" }}>Shaun Fernandez</strong> — founder of Valten AI Systems. I started this because I kept seeing great hospitality businesses lose customers to missed calls, admin chaos, and being invisible on Google. Not because they weren't good at what they do — but because they didn't have the right systems.
            </p>
            <p
              className="reveal"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1rem",
                color: "rgba(248,248,248,0.72)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              I build AI automation systems that work in the background so you can focus on running your venue. No tech jargon, no lock-in contracts, no fluff — just results. Every system I build, I'd be happy to run in my own business.
            </p>

            {/* Trust badges */}
            <div
              className="reveal"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              {[
                "Based in Adelaide & Melbourne",
                "Fast 48hr Setup",
                "No Lock-in Contracts",
              ].map((badge, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#c9a84c",
                    border: "1px solid rgba(201,168,76,0.3)",
                    borderRadius: "100px",
                    padding: "0.35rem 0.9rem",
                    background: "rgba(201,168,76,0.06)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="reveal">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: "0.8rem", padding: "1rem 2.2rem" }}
              >
                Book a Free 30-Min Call with Shaun →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
