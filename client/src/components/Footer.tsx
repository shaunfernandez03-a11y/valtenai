/**
 * Footer — Valten AI Systems
 * Design: Kinetic Gold — footer CTA + contact info + copyright
 */

const AUDIT_URL = "https://calendar.app.google/5VqGMRsABdJJZMdX8";

export default function Footer() {
  return (
    <footer style={{ background: "#060b18", position: "relative" }}>
      {/* Footer CTA Section */}
      <section
        id="contact"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.03) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Eyebrow */}
          <p className="eyebrow reveal" style={{ marginBottom: "1.25rem" }}>
            Get Started Today
          </p>

          {/* Headline */}
          <h2
            className="reveal"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              color: "#f8f8f8",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Ready to Work{" "}
            <span className="text-gold-gradient">Smarter?</span>
          </h2>

          <p
            className="reveal"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "1rem",
              color: "rgba(248,248,248,0.58)",
              maxWidth: "460px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            Book your free 15-minute audit and discover exactly how much time and revenue your business is leaving on the table.
          </p>

          {/* CTA Button */}
          <div className="reveal" style={{ marginBottom: "3rem" }}>
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: "0.8rem", padding: "1.1rem 2.6rem" }}
            >
              Book Your Free 15-Min Audit
              <span style={{ fontSize: "1rem" }}>→</span>
            </a>
          </div>

          {/* Contact details */}
          <div
            className="reveal"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <a
              href="mailto:shaun@valtenai.systems"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(248,248,248,0.65)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,248,248,0.65)")}
            >
              <span style={{ color: "#c9a84c" }}>✉</span>
              shaun@valtenai.systems
            </a>
            <a
              href="tel:+61451619528"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(248,248,248,0.65)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(248,248,248,0.65)")}
            >
              <span style={{ color: "#c9a84c" }}>✆</span>
              (+61) 451 619 528
            </a>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(201,168,76,0.12)",
          padding: "1.75rem 0",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Logo text */}
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#f8f8f8",
            }}
          >
            Valten<span style={{ color: "#c9a84c" }}>AI</span>{" "}
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontSize: "0.75rem",
                color: "rgba(248,248,248,0.35)",
                letterSpacing: "0.05em",
              }}
            >
              Systems
            </span>
          </span>

          {/* Tagline */}
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(248,248,248,0.3)",
              fontStyle: "italic",
            }}
          >
            Keeping you ahead of the curve
          </span>

          {/* Copyright */}
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(248,248,248,0.3)",
            }}
          >
            © {new Date().getFullYear()} Valten AI Systems. Melbourne & Adelaide.
          </span>
        </div>
      </div>
    </footer>
  );
}
