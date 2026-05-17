import WebsiteAnimation from "@/components/graphics/WebsiteAnimation";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const AUDIT_URL = "https://calendly.com/shaun-valtenai/30min";

const features = [
  { icon: "🚀", title: "Built to Convert", desc: "Every design decision is made with one goal — turning visitors into customers. Strategic layouts, clear CTAs, and frictionless booking flows." },
  { icon: "📱", title: "Mobile-First", desc: "Over 70% of hospitality searches happen on mobile. Your site looks and performs flawlessly on every screen size." },
  { icon: "⚡", title: "Lightning Fast", desc: "Sub-2-second load times. Google rewards fast sites with higher rankings — and customers stay instead of bouncing." },
  { icon: "🔍", title: "SEO-Ready from Day One", desc: "Clean code, proper meta tags, schema markup and structured data baked in — not bolted on as an afterthought." },
  { icon: "🤖", title: "AI-Ready Infrastructure", desc: "Built to integrate seamlessly with your AI phone assistant, chatbot and CRM — one connected system." },
  { icon: "✏️", title: "Easy to Update", desc: "Change your menu, hours or offers yourself in minutes. No developer needed, no ongoing agency fees." },
];

const faqs = [
  { q: "How long does a website build take?", a: "Typically 2–3 weeks from brief to launch, depending on complexity. We move fast without cutting corners." },
  { q: "Do I own the website?", a: "Absolutely — you own the code, the domain and all assets. No lock-in, no hidden dependencies." },
  { q: "What if I already have a website?", a: "We can redesign and rebuild your existing site, or build something new. Either way starts with a free audit." },
  { q: "Is hosting included?", a: "We can manage hosting for you or deploy to your preferred host. We recommend Vercel for performance and reliability." },
];

export default function WebsiteBuild() {
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
    <div style={{ background: "#0a0f1e", position: "relative" }}>
      <NeuralNetworkBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <section style={{ padding: "10rem 1.5rem 6rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <p className="reveal" style={{ fontFamily: "\'Space Mono\', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Services — Website Build</p>
          <h1 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, color: "#f8f8f8", lineHeight: 1.1, marginBottom: "1.5rem", transitionDelay: "0.1s" }}>
            A Website That<br /><span style={{ color: "#c9a84c" }}>Works as Hard as You Do.</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(248,248,248,0.62)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Most hospitality websites are digital brochures. Yours will be a revenue-generating machine — fast, beautiful, and built to convert visitors into loyal customers from the first click.
          </p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Get Your Free Audit →</a>
        </div>
      </section>

      {/* Hero graphic */}
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 0" }}>
        <WebsiteAnimation />
      </div>

      <section style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[["2–3 wks", "average build time"], ["< 2s", "target load speed"], ["100%", "you own the code"], ["SEO", "built in from day one"]].map(([stat, label]) => (
            <div key={stat}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 700, color: "#c9a84c", lineHeight: 1 }}>{stat}</div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "rgba(248,248,248,0.5)", marginTop: "0.4rem", lineHeight: 1.5 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p className="reveal" style={{ fontFamily: "\'Space Mono\', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>What\'s included</p>
            <h2 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", transitionDelay: "0.1s" }}>
              Not Just a Pretty Site. A <span style={{ color: "#c9a84c" }}>Growth Tool.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {features.map((f) => (
              <div key={f.title} className="card-dark reveal-scale" style={{ padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#f8f8f8", marginBottom: "0.6rem" }}>{f.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", color: "rgba(248,248,248,0.55)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem", background: "rgba(201,168,76,0.03)", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <p className="reveal" style={{ fontFamily: "\'Space Mono\', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>The process</p>
          <h2 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "3rem", transitionDelay: "0.1s" }}>From Brief to Live in Weeks</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["01","Discovery & Strategy","We learn your business, your customers and your goals. Every design decision flows from this — no templates, no guesswork."],["02","Design & Build","We design and build your site with performance and conversion at the core. You see progress and give feedback throughout."],["03","Launch & Hand Over","We test across all devices, optimise for speed and SEO, then launch. You get full access — it's yours completely."]].map(([num, title, desc], i) => (
              <div key={num} style={{ display: "flex", gap: "2rem", alignItems: "flex-start", padding: "2rem 0", borderBottom: i < 2 ? "1px solid rgba(201,168,76,0.1)" : "none", textAlign: "left" }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "2rem", fontWeight: 700, color: "rgba(201,168,76,0.25)", flexShrink: 0, lineHeight: 1 }}>{num}</div>
                <div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#c9a84c", marginBottom: "0.4rem" }}>{title}</h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "rgba(248,248,248,0.58)", lineHeight: 1.7 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="reveal" style={{ fontFamily: "\'Space Mono\', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>FAQ</p>
            <h2 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", transitionDelay: "0.1s" }}>Common Questions</h2>
          </div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding: "1.75rem 0", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#f8f8f8", marginBottom: "0.6rem" }}>{faq.q}</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", color: "rgba(248,248,248,0.55)", lineHeight: 1.7 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.12)", background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 100%)" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "1rem" }}>
            Your Business Deserves a <span style={{ color: "#c9a84c" }}>Website That Converts</span>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(248,248,248,0.55)", marginBottom: "2.5rem", lineHeight: 1.7 }}>Book a free audit and we'll review your current site and show you exactly what's costing you customers.</p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Book Your Free Audit →</a>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  );
}
