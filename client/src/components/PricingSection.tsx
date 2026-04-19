/**
 * PricingSection — Valten AI Systems
 * Design: Kinetic Gold — 3 pricing tiers, gold accent on recommended (Growth)
 */

const AUDIT_URL = "https://forms.gle/ShiULd7toVTmDeuMA";

const plans = [
  {
    name: "Starter",
    tagline: "Perfect for new venues getting started with AI",
    features: [
      "AI Chatbot & Virtual Assistant",
      "Google Business Profile Setup",
      "Basic SEO Optimisation",
      "Monthly Performance Report",
      "Email Support",
    ],
    recommended: false,
  },
  {
    name: "Growth",
    tagline: "The complete system for scaling hospitality businesses",
    features: [
      "Everything in Starter",
      "AI Phone Assistant (24/7)",
      "Automated Booking & Follow-ups",
      "Custom Website Build",
      "Advanced Local SEO",
      "Priority Support",
    ],
    recommended: true,
  },
  {
    name: "Pro",
    tagline: "Enterprise-grade automation for multi-location venues",
    features: [
      "Everything in Growth",
      "Multi-location Management",
      "Custom AI Integrations",
      "Dedicated Account Manager",
      "Quarterly Strategy Sessions",
      "White-glove Onboarding",
    ],
    recommended: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        background: "linear-gradient(180deg, #0a0f1e 0%, #0d1525 50%, #0a0f1e 100%)",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div className="section-sep" style={{ marginBottom: "5rem" }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
            Investment
          </p>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#f8f8f8",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Flexible Plans for{" "}
            <span className="text-gold-gradient">Every Stage of Growth</span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(248,248,248,0.55)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            All pricing is custom-tailored to your business. Book a free audit to get your personalised quote.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
            gap: "1.5rem",
            alignItems: "start",
          }}
        >
          {plans.map((plan, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.12}s`,
                position: "relative",
              }}
            >
              {/* Recommended glow wrapper */}
              {plan.recommended && (
                <div
                  style={{
                    position: "absolute",
                    inset: "-1px",
                    borderRadius: "6px",
                    background: "linear-gradient(135deg, rgba(201,168,76,0.4), rgba(201,168,76,0.1), rgba(201,168,76,0.4))",
                    zIndex: 0,
                    pointerEvents: "none",
                  }}
                />
              )}

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  background: plan.recommended ? "rgba(14, 22, 40, 0.98)" : "rgba(14, 22, 40, 0.8)",
                  border: plan.recommended
                    ? "1px solid rgba(201,168,76,0.5)"
                    : "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "4px",
                  padding: "2.25rem 1.75rem",
                  transition: "all 0.35s ease",
                }}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div style={{ marginBottom: "1rem" }}>
                    <span className="badge-recommended">Most Popular</span>
                  </div>
                )}

                {/* Plan name */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "1.8rem",
                    color: plan.recommended ? "#c9a84c" : "#f8f8f8",
                    marginBottom: "0.5rem",
                  }}
                >
                  {plan.name}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(248,248,248,0.55)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
                  }}
                >
                  {plan.tagline}
                </p>

                {/* Pricing label */}
                <div
                  style={{
                    background: "rgba(201,168,76,0.06)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    borderRadius: "2px",
                    padding: "0.75rem 1rem",
                    marginBottom: "1.75rem",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                    }}
                  >
                    Custom pricing — book a free audit
                  </span>
                </div>

                {/* Feature list */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                  }}
                >
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "0.88rem",
                        color: "rgba(248,248,248,0.75)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: "#c9a84c",
                          fontSize: "0.7rem",
                          marginTop: "0.25rem",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.recommended ? "btn-gold" : "btn-gold-outline"}
                  style={{ width: "100%", justifyContent: "center", boxSizing: "border-box" }}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
