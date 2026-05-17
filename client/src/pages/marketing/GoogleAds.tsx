import GoogleAdsGraphic from "@/components/graphics/GoogleAdsGraphic";
import DataStreamBackground from "@/components/DataStreamBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

const AUDIT_URL = "https://calendly.com/shaun-valtenai/30min";

const features = [
  { icon: "🎯", title: "Hyper-Local Targeting", desc: "Ads shown only to people searching within your suburb, postcode or radius — so every dollar reaches a potential customer, not someone 50km away." },
  { icon: "💰", title: "No Wasted Spend", desc: "We continuously monitor and cut keywords that don't convert. Your budget goes further every week as we optimise." },
  { icon: "📞", title: "Call & Booking Ads", desc: "Click-to-call and booking extensions built into every campaign — customers can contact you directly from the ad without even visiting your site." },
  { icon: "🔄", title: "Retargeting", desc: "Re-engage visitors who checked out your site but didn't book. Retargeting ads follow them with your offer until they convert." },
  { icon: "📊", title: "Transparent Reporting", desc: "You see exactly where every dollar went, what it produced and what we're doing next. No black box, no fluff." },
  { icon: "⚙️", title: "Continuous Optimisation", desc: "Weekly bid adjustments, ad copy testing and audience refinement — your campaigns improve every single week." },
];

const faqs = [
  { q: "How much budget do I need?", a: "We recommend a minimum of $500/month ad spend for hospitality businesses. We'll tell you the realistic return at your budget during the free audit." },
  { q: "How quickly will I see results?", a: "Google Ads can drive calls and bookings from day one. We typically see strong performance within the first 2–4 weeks as the campaigns learn." },
  { q: "Do you take a percentage of ad spend?", a: "No — we charge a flat monthly management fee. Your entire ad budget goes to Google, not to us." },
  { q: "Can I pause or stop at any time?", a: "Yes — there are no lock-in contracts. We earn your business every month by delivering results." },
];

export default function GoogleAds() {
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
          <p className="reveal" style={{ fontFamily: "\'Space Mono\', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1.25rem" }}>Marketing — Google Ads</p>
          <h1 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700, color: "#f8f8f8", lineHeight: 1.1, marginBottom: "1.5rem", transitionDelay: "0.1s" }}>
            Paid Search That<br /><span style={{ color: "#c9a84c" }}>Actually Converts.</span>
          </h1>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(248,248,248,0.62)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2.5rem" }}>
            Most Google Ads campaigns for hospitality businesses haemorrhage money on the wrong keywords and the wrong audience. We build campaigns that target hungry, ready-to-book customers in your area — and nothing else.
          </p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Get Your Free Audit →</a>
        </div>
      </section>

      {/* Hero graphic */}
      <div style={{ display: "flex", justifyContent: "center", padding: "2rem 0 0" }}>
        <GoogleAdsGraphic />
      </div>

      <section style={{ borderTop: "1px solid rgba(201,168,76,0.12)", borderBottom: "1px solid rgba(201,168,76,0.12)", padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[["8:1", "avg return on ad spend (hospitality)"], ["Day 1", "calls can start immediately"], ["0%", "of your budget goes to our fee"], ["Weekly", "optimisation cadence"]].map(([stat, label]) => (
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
              Campaigns Built to <span style={{ color: "#c9a84c" }}>Win Your Local Market</span>
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
          <h2 className="reveal" style={{ fontFamily: "\'Cormorant Garamond\', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#f8f8f8", marginBottom: "3rem", transitionDelay: "0.1s" }}>Live Within Days</h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["01","Audit & Strategy","We audit your market, competitors and search landscape to identify the highest-value keywords and audiences for your business."],["02","Build & Launch","We build your campaigns, write ad copy, set up conversion tracking and launch. You approve everything before it goes live."],["03","Optimise & Scale","Weekly optimisation based on real performance data. We cut what doesn't work and scale what does — compounding your returns."]].map(([num, title, desc], i) => (
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
            Start Getting Calls <span style={{ color: "#c9a84c" }}>From Day One</span>
          </h2>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(248,248,248,0.55)", marginBottom: "2.5rem", lineHeight: 1.7 }}>Book a free audit and we'll show you exactly what your competitors are spending and how to beat them.</p>
          <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ fontSize: "0.8rem", padding: "1rem 2.4rem" }}>Book Your Free Audit →</a>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
}
