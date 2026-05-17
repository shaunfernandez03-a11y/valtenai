import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import { useLocation } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AUDIT_URL = "https://calendly.com/shaun-valtenai/30min";

const SERVICES = [
  {
    href: "/services/ai-phone-assistant",
    title: "AI Phone Assistant",
    icon: "📞",
    description:
      "Never miss a call or a booking again. Our AI Phone Assistant answers every inbound call 24/7 in your brand's voice — taking bookings, qualifying leads, answering FAQs, and routing urgent enquiries to you. No voicemail, no missed revenue.",
  },
  {
    href: "/services/ai-chatbot",
    title: "AI Chatbot & Virtual Assistant",
    icon: "🤖",
    description:
      "Turn your website into a lead-capture machine. The AI Chatbot engages visitors instantly, answers questions, collects contact details, and books appointments — all without any staff involvement. Running around the clock so you don't have to.",
  },
  {
    href: "/services/website-build",
    title: "Website Build",
    icon: "🌐",
    description:
      "Fast, conversion-optimised websites built for local businesses that want to look premium and generate enquiries. Mobile-first, SEO-ready, and designed to turn visitors into paying customers — delivered in days, not months.",
  },
  {
    href: "/services/seo-visibility",
    title: "SEO & Google Visibility",
    icon: "🔍",
    description:
      "Get found by customers who are actively searching for what you offer. We optimise your Google Business Profile, build local citations, and implement on-page SEO so your business ranks at the top when it matters most.",
  },
];

export default function ServicesOverview() {
  const [, navigate] = useLocation();
  useScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) el.classList.add("visible");
      });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#f8f8f8",
        fontFamily: "'Outfit', sans-serif",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <NeuralNetworkBackground />
      <Navbar />

      {/* Hero */}
      <section
        style={{
          padding: "clamp(100px, 14vw, 160px) 1.5rem clamp(48px, 6vw, 80px)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          className="reveal"
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#c9a84c",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          What We Do
        </p>
        <h1
          className="reveal"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: "1.25rem",
            background: "linear-gradient(135deg, #f8f8f8 0%, #c9a84c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transitionDelay: "0.1s",
          }}
        >
          Our Services
        </h1>
        <p
          className="reveal"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(248,248,248,0.65)",
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.7,
            transitionDelay: "0.2s",
          }}
        >
          Everything you need to automate your operations, capture more leads, and grow your business — without hiring more staff.
        </p>
      </section>

      {/* Services Grid */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem clamp(80px, 10vw, 140px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.href}
              className="reveal-scale"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
                borderRadius: "16px",
                padding: "2rem 2.25rem",
                transition: "border-color 0.25s ease, background 0.25s ease, opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
                cursor: "default",
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.45)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(201,168,76,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{service.icon}</div>

              {/* Title as link */}
              <a
                href={service.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(service.href);
                }}
                style={{
                  display: "inline-block",
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  fontWeight: 700,
                  color: "#c9a84c",
                  textDecoration: "underline",
                  textDecorationColor: "rgba(201,168,76,0.4)",
                  textUnderlineOffset: "4px",
                  letterSpacing: "0.01em",
                  marginBottom: "0.85rem",
                  transition: "color 0.2s ease, text-decoration-color 0.2s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#e8c46a";
                  (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = "#e8c46a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
                  (e.currentTarget as HTMLAnchorElement).style.textDecorationColor = "rgba(201,168,76,0.4)";
                }}
              >
                {service.title} →
              </a>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(248,248,248,0.65)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "clamp(48px, 6vw, 80px)",
            padding: "2.5rem",
            background: "rgba(201,168,76,0.05)",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: "16px",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "0.75rem",
              color: "#f8f8f8",
            }}
          >
            Not sure which service is right for you?
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(248,248,248,0.6)",
              marginBottom: "1.75rem",
              maxWidth: "480px",
              margin: "0 auto 1.75rem",
              lineHeight: 1.7,
            }}
          >
            Book a free 30-minute call and we'll map out exactly what would make the biggest difference for your business.
          </p>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.85rem 2.25rem",
              background: "linear-gradient(135deg, #c9a84c, #e8c46a)",
              color: "#0a0a0a",
              fontWeight: 700,
              fontSize: "0.95rem",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Book a Free Call
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
