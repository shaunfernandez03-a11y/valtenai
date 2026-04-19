/**
 * TestimonialsSection — Valten AI Systems
 * Design: Kinetic Gold — text-only testimonials, initials only, no photos
 */

const testimonials = [
  {
    initials: "AL",
    name: "Amy Lee",
    business: "The Lonely Cafe, Melbourne",
    quote:
      "Valten AI Systems transformed our workflow, saving us hours weekly and letting us focus on growing our business.",
  },
  {
    initials: "RP",
    name: "Raj Patel",
    business: "Melbourne",
    quote:
      "Thanks to Valten AI, our admin tasks are cut in half and our team feels less stressed and more productive every day.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        background: "#0a0f1e",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div className="section-sep" style={{ marginBottom: "5rem" }} />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="eyebrow reveal" style={{ marginBottom: "1rem", color: "#c9a84c" }}>
            Client Results
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
            What Our Clients{" "}
            <span className="text-gold-gradient">Are Saying</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-dark reveal"
              style={{
                padding: "2.5rem 2rem",
                transitionDelay: `${i * 0.15}s`,
                position: "relative",
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem",
                  color: "rgba(201,168,76,0.15)",
                  lineHeight: 0.8,
                  marginBottom: "1rem",
                  userSelect: "none",
                }}
              >
                "
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1rem",
                  color: "rgba(248,248,248,0.82)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "2rem",
                }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                {/* Initials avatar */}
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "50%",
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#c9a84c",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t.initials}
                  </span>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#f8f8f8",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.78rem",
                      color: "rgba(201,168,76,0.7)",
                    }}
                  >
                    {t.business}
                  </div>
                </div>
              </div>

              {/* Gold bottom accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "2rem",
                  right: "2rem",
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
