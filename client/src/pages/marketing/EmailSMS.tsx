import EmailSMSGraphic from "@/components/graphics/EmailSMSGraphic";
import DataStreamBackground from "@/components/DataStreamBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AUDIT_URL = "https://forms.gle/ShiULd7toVTmDeuMA";

const features = [
  { icon: "🎯", title: "Segmented Campaigns", desc: "Send the right message to the right customer. Regulars get loyalty offers, lapsed customers get win-back sequences, new leads get welcome flows." },
  { icon: "⚡", title: "Automated Sequences", desc: "Set-and-forget flows that run in the background — birthday offers, post-visit follow-ups, booking reminders and re-engagement campaigns." },
  { icon: "📱", title: "SMS That Gets Read", desc: "SMS has a 98% open rate vs 20% for email. We use both strategically — SMS for time-sensitive offers, email for richer content." },
  { icon: "✍️", title: "Done-For-You Copywriting", desc: "Every email and SMS written by us in your brand voice. Compelling subject lines, clean design and clear CTAs that drive action." },
  { icon: "📊", title: "Performance Tracking", desc: "Open rates, click-through rates, bookings generated and revenue attributed — you see the exact return on every campaign." },
  { icon: "🔗", title: "CRM Integration", desc: "Connects to your booking system and customer database so campaigns trigger automatically based on real customer behaviour." },
];

const faqs = [
  { q: "Do I need an existing email list?", a: "No — we help you build one from scratch using your booking history, chatbot leads and website sign-ups. Most businesses have more data than they realise." },
  { q: "How often will campaigns go out?", a: "We recommend 2–4 emails per month and SMS for key promotions. Enough to stay top of mind without annoying your customers." },
  { q: "Is this compliant with spam laws?", a: "Yes — we build opt-in compliant lists and include proper unsubscribe mechanisms in every communication." },
  { q: "What kind of results can I expect?", a: "For hospitality businesses, a well-run email and SMS program typically generates 15–25% of monthly bookings from existing customers." },
];

export default function EmailSMS() {
  return (
    <div style={{ background: "#0a0f1e", minHeight: "100vh", position: "relative" }}>
      <DataStreamBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <section style={{ padding: "10rem 1.5rem 6rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Marketing — Email & SMS</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, color: "#f8f8f8", lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Keep Customers Coming Back.<br /><span style={{ color: "#c9a84c" }}>Automatically.</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(248,248,248,0.62)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Acquiring a new customer costs 5x more than keeping an existing one. Your email and SMS channels are the most cost-effective way to drive repeat bookings — and most hospitality businesses aren't using them at all.
          </p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Get Your Free Audit →</a>
        </div>
      </section>

      {/* Hero graphic */}
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 0" }}>
        <EmailSMSGraphic />
      </div>

      <section style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[["98%", "SMS open rate"], ["5x", "cheaper to retain vs acquire"], ["25%", "of bookings from CRM campaigns"], ["$42", "avg return per $1 spent on email"]].map(([stat, label]) => (
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
              Turn Past Customers Into <span style={{ color: "#c9a84c" }}>Your Best Marketing Channel</span>
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "3rem" }}>Automated and Running in 2 Weeks</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["01","List & Data Audit","We review your existing customer data, booking history and contact lists to identify your audience segments and opportunities."],["02","Build Automations","We set up your welcome flow, re-engagement sequence, birthday campaign and monthly newsletter — all automated and ready to run."],["03","Campaign & Report","Monthly campaigns go out on your behalf. We report on opens, clicks and bookings generated — and optimise each month."]].map(([num, title, desc], i) => (
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
            Your Best Customers <span style={{ color: "#c9a84c" }}>Are Waiting to Hear From You</span>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(248,248,248,0.55)", marginBottom: "2.5rem", lineHeight: 1.7 }}>Book a free audit and we'll show you the revenue sitting untapped in your existing customer base.</p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Book Your Free Audit →</a>
        </div>
      </section>
      <Footer />
    </div>
    </div>
  );
}
