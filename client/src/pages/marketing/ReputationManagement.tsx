import ReputationGraphic from "@/components/graphics/ReputationGraphic";
import DataStreamBackground from "@/components/DataStreamBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const AUDIT_URL = "https://calendly.com/shaun-valtenai/30min";

const features = [
  { icon: "⭐", title: "Automated Review Requests", desc: "Every customer automatically asked for a review at the perfect moment — right after a great experience. More requests means more reviews." },
  { icon: "💬", title: "Response Management", desc: "Every review responded to professionally and promptly — positive ones thanked, negative ones handled with care to protect your reputation." },
  { icon: "📈", title: "Rating Improvement", desc: "Systematic strategies to improve your star rating over time. Even moving from 4.1 to 4.6 stars can double your booking conversion rate." },
  { icon: "🛡️", title: "Negative Review Handling", desc: "We monitor for negative reviews instantly and help you respond in a way that turns a bad experience into a demonstration of great service." },
  { icon: "🔍", title: "Reputation Monitoring", desc: "24/7 monitoring across Google, TripAdvisor, Yelp and Facebook — you're notified the moment a new review appears anywhere." },
  { icon: "📊", title: "Monthly Reports", desc: "See your review volume, average rating trend, response rate and how your reputation compares to your top competitors." },
];

const faqs = [
  { q: "What if I have existing negative reviews?", a: "We can't remove genuine reviews, but we help you respond professionally and generate enough positive reviews to dilute their impact on your rating." },
  { q: "How does automated review collection work?", a: "We send a post-visit SMS or email to customers with a direct link to your Google review page — frictionless and timed perfectly." },
  { q: "Which review platforms do you manage?", a: "Google Business Profile, TripAdvisor, Yelp, Facebook and any other platform relevant to your business." },
  { q: "How quickly can we improve our rating?", a: "Most businesses see measurable rating improvement within 60–90 days. The volume of new reviews is the key driver." },
];

export default function ReputationManagement() {
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
      <DataStreamBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <section style={{ padding: "10rem 1.5rem 6rem", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
          <p className="reveal" style={{ fontFamily: "\'Space Mono\', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Marketing — Reputation Management</p>
          <h1 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, color: "#f8f8f8", lineHeight: 1.1, marginBottom: "1.5rem", transitionDelay: "0.1s" }}>
            Build Trust at Scale.<br /><span style={{ color: "#c9a84c" }}>Win More Customers.</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(248,248,248,0.62)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            88% of consumers trust online reviews as much as personal recommendations. Your star rating is your most powerful marketing asset — and most businesses leave it completely unmanaged. We change that.
          </p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Get Your Free Audit →</a>
        </div>
      </section>

      {/* Hero graphic */}
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 0" }}>
        <ReputationGraphic />
      </div>

      <section style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[["88%", "trust reviews as much as friends"], ["2x", "bookings at 4.6 vs 4.1 stars"], ["24/7", "monitoring across all platforms"], ["60–90", "days to see rating improvement"]].map(([stat, label]) => (
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
              Your Reputation <span style={{ color: "#c9a84c" }}>Managed and Protected</span>
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
          <h2 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "3rem", transitionDelay: "0.1s" }}>Protecting Your Reputation From Day One</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["01","Reputation Audit","We audit your current ratings, review volume, response rate and competitor benchmarks across all platforms."],["02","System Setup","We connect your booking system, set up automated review requests and configure monitoring across all platforms."],["03","Manage & Improve","We respond to every review, manage your reputation daily and send you monthly reports showing your rating trajectory."]].map(([num, title, desc], i) => (
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
            Your Reputation Is <span style={{ color: "#c9a84c" }}>Your Most Valuable Asset</span>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(248,248,248,0.55)", marginBottom: "2.5rem", lineHeight: 1.7 }}>Book a free audit and we'll show you exactly how your reputation stacks up against your competitors — and what it's costing you.</p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Book Your Free Audit →</a>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}
