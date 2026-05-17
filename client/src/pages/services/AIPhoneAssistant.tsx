import { useEffect } from "react";
import PhoneAnimation from "@/components/graphics/PhoneAnimation";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AUDIT_URL = "https://calendly.com/shaun-valtenai/30min";

const features = [
  { icon: "📞", title: "24/7 Call Answering", desc: "Never send a customer to voicemail again. Your AI answers every call instantly — at 2am on a Sunday just as professionally as 10am on a Monday." },
  { icon: "📅", title: "Automated Booking", desc: "Callers can book tables, appointments or services directly through the call — no staff required, no double bookings, synced to your calendar in real time." },
  { icon: "🎯", title: "Lead Qualification", desc: "The AI asks the right questions, qualifies enquiries and routes hot leads to you directly — so you only spend time on calls that matter." },
  { icon: "🗣️", title: "Your Brand's Voice", desc: "Custom scripted to sound like your business. Your tone, your FAQs, your offers — not a generic bot." },
  { icon: "📊", title: "Call Analytics", desc: "See every call, outcome and missed opportunity in a dashboard. Know exactly what customers are asking for." },
  { icon: "🔗", title: "CRM Integration", desc: "Every caller's details and intent automatically logged into your CRM. No manual data entry, no leads lost." },
];

const faqs = [
  { q: "Will it sound robotic?", a: "No — modern AI voice assistants are indistinguishable from human staff in most cases. We fine-tune the voice and script specifically for your business." },
  { q: "What happens if a caller asks something it can't handle?", a: "It smoothly transfers the call to you or a staff member, or takes a message and notifies you instantly." },
  { q: "How long does setup take?", a: "Most businesses are live within 5–7 business days from the free audit." },
  { q: "Does it work with my existing phone number?", a: "Yes — we forward calls from your existing number, no need to change anything customer-facing." },
];

export default function AIPhoneAssistant() {
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

        {/* Hero */}
        <section style={{ padding: "10rem 1.5rem 6rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
            <p className="reveal" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>
              Services — AI Phone Assistant
            </p>
            <h1 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, color: "#f8f8f8", lineHeight: 1.1, marginBottom: "1.5rem", transitionDelay: "0.1s" }}>
              Every Call Answered.<br />
              <span style={{ color: "#c9a84c" }}>Every Booking Captured.</span>
            </h1>
            <p className="reveal" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(248,248,248,0.62)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2.5rem", transitionDelay: "0.2s" }}>
              Hospitality businesses lose thousands in revenue every month to missed calls. Your AI phone assistant answers instantly, books customers in, and qualifies leads — around the clock, without a single staff member.
            </p>
            <div className="reveal" style={{ transitionDelay: "0.3s" }}>
              <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>
                Get Your Free Audit →
              </a>
            </div>
          </div>
        </section>

        {/* Hero graphic */}
        <div className="reveal" style={{ display: "flex", justifyContent: "center", padding: "2rem 0 0" }}>
          <PhoneAnimation />
        </div>

        {/* Stats bar */}
        <section style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "2.5rem 1.5rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {[["67%", "of callers hang up if sent to voicemail"], ["3x", "more bookings vs missed call"], ["< 1s", "average answer time"], ["24/7", "always on, never sick"]].map(([stat, label], i) => (
              <div key={stat} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 700, color: "#c9a84c", lineHeight: 1 }}>{stat}</div>
                <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "rgba(248,248,248,0.5)", marginTop: "0.4rem", lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p className="reveal" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>What's included</p>
              <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", transitionDelay: "0.1s" }}>
                Everything Your Phone System <span style={{ color: "#c9a84c" }}>Should Already Do</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {features.map((f, i) => (
                <div key={f.title} className="card-dark reveal-scale" style={{ padding: "2rem", transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#f8f8f8", marginBottom: "0.6rem" }}>{f.title}</h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", color: "rgba(248,248,248,0.55)", lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section style={{ padding: "6rem 1.5rem", background: "rgba(201,168,76,0.03)", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p className="reveal" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>The process</p>
            <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "3rem", transitionDelay: "0.1s" }}>Live in Under a Week</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                ["01", "Free Audit", "We review your current call flow, missed call rate and booking process to understand exactly where revenue is leaking."],
                ["02", "Custom Build", "We script your AI, configure the voice, and connect it to your calendar and CRM. Built specifically for your business."],
                ["03", "Go Live", "We forward your existing number, test every scenario, and you're live. Ongoing monitoring and optimisation included."],
              ].map(([num, title, desc], i) => (
                <div key={num} className="reveal" style={{ display: "flex", gap: "2rem", alignItems: "flex-start", padding: "2rem 0", borderBottom: i < 2 ? "1px solid rgba(201,168,76,0.1)" : "none", textAlign: "left", transitionDelay: `${i * 0.12}s` }}>
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

        {/* FAQ */}
        <section style={{ padding: "6rem 1.5rem" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p className="reveal" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>FAQ</p>
              <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", transitionDelay: "0.1s" }}>Common Questions</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ padding: "1.75rem 0", borderBottom: "1px solid rgba(201,168,76,0.1)", transitionDelay: `${i * 0.08}s` }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#f8f8f8", marginBottom: "0.6rem" }}>{faq.q}</h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", color: "rgba(248,248,248,0.55)", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "6rem 1.5rem", textAlign: "center", borderTop: "1px solid rgba(201,168,76,0.12)", background: "linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 100%)" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2 className="reveal" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "1rem" }}>
              Stop Losing Bookings to <span style={{ color: "#c9a84c" }}>Voicemail</span>
            </h2>
            <p className="reveal" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(248,248,248,0.55)", marginBottom: "2.5rem", lineHeight: 1.7, transitionDelay: "0.1s" }}>
              Book a free 30-minute audit and we'll show you exactly how many calls and bookings your business is currently missing.
            </p>
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>
                Book Your Free Audit →
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
