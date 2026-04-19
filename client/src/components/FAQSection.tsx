/**
 * FAQSection — Valten AI Systems
 * Design: Kinetic Gold — accordion FAQ with gold expand indicators
 */

import { useState } from "react";

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We specialise in hospitality businesses — restaurants, cafes, bars, and food venues — in Melbourne and Adelaide. Whether you're a single-location café or a multi-site restaurant group, we build AI systems tailored to your specific operation and customer base.",
  },
  {
    q: "How long does setup take?",
    a: "Most systems are live within 7–14 business days from your free audit. Simple setups like chatbots or Google optimisation can be completed in as little as 3–5 days. We move fast without cutting corners.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Absolutely not. We handle everything from design to deployment. You'll receive a simple handover and we'll train your team in under 30 minutes. Our systems are built to run in the background without any technical input from you.",
  },
  {
    q: "What results can I expect?",
    a: "Our clients typically see a 30%+ reduction in admin time within the first month, improved Google visibility within 60–90 days, and measurable increases in booking conversions. Results vary by business, which is why we start with a free audit to set realistic expectations.",
  },
  {
    q: "How do I get started?",
    a: "Simply book your free 15-minute audit using the button on this page. We'll review your current setup, identify your biggest opportunities, and recommend the right system for your business — with no obligation to proceed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "#0a0f1e",
        padding: "6rem 0",
        position: "relative",
      }}
    >
      <div className="section-sep" style={{ marginBottom: "5rem" }} />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <div>
            <p className="eyebrow reveal" style={{ marginBottom: "1rem" }}>
              FAQ
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
              Common Questions{" "}
              <span className="text-gold-gradient">Answered</span>
            </h2>
          </div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  borderBottom: "1px solid rgba(201,168,76,0.12)",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "1.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: openIndex === i ? "#c9a84c" : "#f8f8f8",
                      lineHeight: 1.4,
                      transition: "color 0.25s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: "#c9a84c",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                      transition: "transform 0.3s ease",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: openIndex === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.92rem",
                      color: "rgba(248,248,248,0.65)",
                      lineHeight: 1.75,
                      paddingBottom: "1.5rem",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
