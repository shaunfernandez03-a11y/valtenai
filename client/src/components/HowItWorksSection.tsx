/**
 * HowItWorksSection — Valten AI Systems
 * Design: Kinetic Gold — 3 steps with connecting gold line
 */

const steps = [
  {
    num: "01",
    title: "We Audit Your Business for Free",
    desc: "Book a 30-minute call and we'll analyse your current setup — calls, bookings, online presence — and identify exactly where you're losing time and customers.",
    icon: "🔎",
  },
  {
    num: "02",
    title: "We Build Your Custom AI System",
    desc: "We design and deploy a tailored automation stack — AI phone assistant, chatbot, SEO, or website — built specifically for your venue and goals.",
    icon: "⚙️",
  },
  {
    num: "03",
    title: "You Save Time & Win More Customers",
    desc: "Watch your bookings grow, admin shrink, and your team breathe easier. Most clients see measurable results within the first 30 days.",
    icon: "🚀",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "linear-gradient(180deg, #0a0f1e 0%, #0d1525 50%, #0a0f1e 100%)",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div className="section-sep" style={{ marginBottom: "5rem" }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
            The Process
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#f8f8f8",
              lineHeight: 1.15,
            }}
          >
            From Audit to{" "}
            <span className="text-gold-gradient">Automated in Days</span>
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >


          {steps.map((step, i) => (
            <div
              key={i}
              className="reveal-scale"
              style={{
                padding: "2rem 2rem",
                textAlign: "center",
                transitionDelay: `${i * 0.15}s`,
                position: "relative",
              }}
            >
              {/* Step number */}
              <div
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(201,168,76,0.4)",
                  background: "rgba(201,168,76,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#c9a84c",
                    letterSpacing: "0.05em",
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Emoji icon */}
              <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                {step.icon}
              </div>

              {/* Title */}
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
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.88rem",
                  color: "rgba(248,248,248,0.58)",
                  lineHeight: 1.7,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                {step.desc}
              </p>

              {/* Arrow between steps (mobile) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    color: "rgba(201,168,76,0.4)",
                    fontSize: "1.2rem",
                    marginTop: "1.5rem",
                    display: "block",
                  }}
                  className="md:hidden"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
          <a
            href="https://calendly.com/shaun-valtenai/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); window.open("https://calendly.com/shaun-valtenai/30min", "_blank", "noopener,noreferrer"); }}
            className="btn-gold"
          >
            Start With a Free Audit
            <span style={{ fontSize: "1rem" }}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
