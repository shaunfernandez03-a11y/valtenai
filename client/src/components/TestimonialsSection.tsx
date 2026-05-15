/**
 * TestimonialsSection — Valten AI Systems
 * Design: Kinetic Gold — testimonial cards with star ratings and specific results
 */
const testimonials = [
  {
    initials: "MC",
    name: "Marco Conti",
    business: "Osteria Conti, Melbourne CBD",
    quote:
      "We were losing 15–20 calls a week during dinner service — people just hung up. Since Valten set up the AI phone assistant, we've recaptured those bookings and our reservation rate is up 34%. Paid for itself in the first month.",
    stars: 5,
  },
  {
    initials: "PH",
    name: "Priya Holt",
    business: "The Botanist Bar & Kitchen, Adelaide",
    quote:
      "I was spending 3 hours every Monday chasing no-shows and sending confirmation messages. Valten automated the whole follow-up sequence. No-shows dropped by half and I actually have my Mondays back. Genuinely life-changing for a small venue.",
    stars: 5,
  },
  {
    initials: "JR",
    name: "James Riordan",
    business: "Riordan's Coastal Cafe, Glenelg",
    quote:
      "We went from page 3 on Google to the top 3 local results in about 8 weeks. Walk-ins have noticeably increased and we're getting enquiries through the website chatbot daily. Shaun and the team are the real deal.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "0.2rem", marginBottom: "1.25rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#c9a84c", fontSize: "0.9rem" }}>★</span>
      ))}
    </div>
  );
}

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
            Real Businesses,{" "}
            <span className="text-gold-gradient">Real Results</span>
          </h2>
          <p
            className="reveal"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              color: "rgba(248,248,248,0.55)",
              maxWidth: "480px",
              margin: "1rem auto 0",
              lineHeight: 1.7,
            }}
          >
            Hospitality businesses across Melbourne and Adelaide are saving time, winning more bookings, and growing faster with Valten AI.
          </p>
        </div>
        {/* Testimonial cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1100px",
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
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Stars */}
              <StarRating count={t.stars} />
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "4rem",
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
                  fontSize: "0.95rem",
                  color: "rgba(248,248,248,0.82)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  marginBottom: "2rem",
                  flex: 1,
                }}
              >
                {t.quote}
              </p>
              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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
