import ChatbotAnimation from "@/components/graphics/ChatbotAnimation";
import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AUDIT_URL = "https://calendar.app.google/5VqGMRsABdJJZMdX8";

const features = [
  { icon: "⚡", title: "Instant Response", desc: "Replies to website visitors in under a second — before they bounce to a competitor. First impressions converted into enquiries." },
  { icon: "🧠", title: "Trained on Your Business", desc: "Knows your menu, hours, prices, policies and FAQs. Answers exactly as your best staff member would." },
  { icon: "📋", title: "Lead Capture", desc: "Collects name, email, phone and enquiry type from every visitor — feeding your CRM automatically." },
  { icon: "🗓️", title: "Booking Integration", desc: "Takes reservations and appointments directly in the chat widget, synced to your calendar instantly." },
  { icon: "🌐", title: "Multilingual", desc: "Communicates in the language your customer writes in — no extra setup required." },
  { icon: "📱", title: "Works Everywhere", desc: "Embedded on your website, Instagram DMs, Facebook Messenger and Google Business chat from one system." },
];

const faqs = [
  { q: "How is this different from a basic chatbot?", a: "Standard chatbots follow rigid decision trees. Ours uses AI to understand intent and respond naturally — handling complex, multi-turn conversations." },
  { q: "What if it doesn't know the answer?", a: "It escalates gracefully — sending you a notification and collecting the customer's details so you can follow up." },
  { q: "Will it match my brand?", a: "Yes — custom branded with your colours, name, tone of voice and personality. Customers won't know it's AI unless you tell them." },
  { q: "How long does setup take?", a: "Typically 5–7 business days from your free audit to going live on your website." },
];

export default function AIChatbot() {
  return (
    <div style={{ background: "#0a0f1e", minHeight: "100vh", position: "relative" }}>
      <NeuralNetworkBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <section style={{ padding: "10rem 1.5rem 6rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Services — AI Chatbot</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, color: "#f8f8f8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Engage Every Visitor.<br /><span style={{ color: "#c9a84c" }}>Convert More Customers.</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(248,248,248,0.62)", lineHeight: 1.8, marginBottom: "2.5rem", maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Most website visitors leave without making contact. Your AI chatbot engages them the moment they land, answers their questions instantly, and converts browsers into booked customers — 24 hours a day.
          </p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Get Your Free Audit →</a>
        </div>
      </section>

      {/* Hero graphic */}
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 0" }}>
        <ChatbotAnimation />
      </div>

      <section style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[["80%", "of queries answered without staff"], ["3 min", "avg response time without AI"], ["< 1s", "AI response time"], ["40%", "avg increase in leads captured"]].map(([stat, label]) => (
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
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>What's included</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8" }}>
              A Virtual Assistant That <span style={{ color: "#c9a84c" }}>Never Clocks Off</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {features.map((f) => (
              <div key={f.title} className="card-dark" style={{ padding: "2rem" }}>
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
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>The process</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "3rem" }}>Live in Under a Week</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["01","Audit & Training","We extract your FAQs, menu, policies and offers — and train the AI to answer as your business would."],["02","Design & Integration","We build the chat widget in your brand colours and embed it on your website, socials and Google profile."],["03","Launch & Optimise","We go live, monitor every conversation and continuously improve responses based on real customer interactions."]].map(([num, title, desc], i) => (
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
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>FAQ</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8" }}>Common Questions</h2>
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "1rem" }}>
            Turn Your Website Into a <span style={{ color: "#c9a84c" }}>Booking Machine</span>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(248,248,248,0.55)", marginBottom: "2.5rem", lineHeight: 1.7 }}>Book a free audit and discover how many customers are leaving your site without making contact.</p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Book Your Free Audit →</a>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  );
}
