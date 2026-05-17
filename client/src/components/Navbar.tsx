/**
 * Navbar — Valten AI Systems
 * Design: Kinetic Gold — transparent on hero, dark glass on scroll
 * Dropdowns: Services + Marketing, hover gap fixed via single wrapper handler
 */

import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const AUDIT_URL = "https://calendly.com/shaun-valtenai/30min";

const SERVICES_ITEMS = [
  { label: "AI Phone Assistant",          href: "/services/ai-phone-assistant", desc: "Never miss a call or booking" },
  { label: "AI Chatbot & Virtual Assistant", href: "/services/ai-chatbot", desc: "Capture leads 24/7" },
  { label: "Website Build",               href: "/services/website-build", desc: "Fast, conversion-optimised sites" },
  { label: "SEO & Google Visibility",     href: "/services/seo-visibility", desc: "Rank #1 locally" },
];

const MARKETING_ITEMS = [
  { label: "Google Ads Management",          href: "/marketing/google-ads",            desc: "Paid search that converts" },
  { label: "Social Media Automation",        href: "/marketing/social-media",          desc: "Consistent presence, zero effort" },
  { label: "Email & SMS Campaigns",          href: "/marketing/email-sms",             desc: "Keep customers coming back" },
  { label: "Review & Reputation Management", href: "/marketing/reputation-management", desc: "Build trust at scale" },
];

const LINK_STYLE: React.CSSProperties = {
  fontFamily: "'Outfit', sans-serif",
  fontSize: "0.85rem",
  fontWeight: 500,
  color: "rgba(248,248,248,0.75)",
  textDecoration: "none",
  letterSpacing: "0.04em",
  transition: "color 0.2s ease",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  gap: "0.3rem",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
      style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
    >
      <path d="M2 3.5L5 6.5L8 3.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DropdownTrigger({ label, items }: { label: string; items: typeof SERVICES_ITEMS }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    // 200ms grace period — prevents snapping closed when moving to panel
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  }

  return (
    <div
      ref={ref}
      style={{ position: "relative" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger button — click also toggles */}
      <button
        style={LINK_STYLE}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a84c")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(248,248,248,0.75)")}
      >
        {label}
        <ChevronIcon open={open} />
      </button>

      {/* Dropdown panel */}
      <div style={{
        position: "absolute",
        top: "calc(100% + 2px)",
        left: "50%",
        width: "260px",
        background: "rgba(8,12,26,0.98)",
        border: "1px solid rgba(201,168,76,0.2)",
        borderRadius: "6px",
        padding: "0.5rem 0",
        boxShadow: "0 16px 40px rgba(0,0,0,0.6)",
        opacity: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
        transform: open ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-6px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        zIndex: 100,
      }}>
        <div style={{
          position: "absolute", top: 0, left: "20%", right: "20%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
        }} />
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{ display: "block", padding: "0.75rem 1.25rem", textDecoration: "none", transition: "background 0.15s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.06)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#f8f8f8", marginBottom: "0.2rem" }}>
              {item.label}
            </span>
            <span style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "rgba(248,248,248,0.4)" }}>
              {item.desc}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMarketingOpen, setMobileMarketingOpen] = useState(false);
  const [location] = useLocation();
  const isHomepage = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smart anchor nav — scrolls if on homepage, navigates + scrolls if not
  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const anchor = href.replace("/#", "");
    if (isHomepage) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollTo", anchor);
      window.location.href = "/";
    }
  }

  // On homepage load, check if we need to scroll to a section
  useEffect(() => {
    if (!isHomepage) return;
    const anchor = sessionStorage.getItem("scrollTo");
    if (!anchor) return;
    sessionStorage.removeItem("scrollTo");
    setTimeout(() => {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  }, [isHomepage]);

  const plainLinks = [
    { label: "How It Works", href: "/#how-it-works" },
    { label: "About",        href: "/#about" },
    { label: "Pricing",      href: "/#pricing" },
    { label: "FAQ",          href: "/#faq" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Gold stripe — all pages except homepage */}
      {!isHomepage && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "4px",
          height: "100vh",
          background: "linear-gradient(180deg, #c9a84c 0%, #e2c87a 40%, #c9a84c 70%, rgba(201,168,76,0.3) 100%)",
          zIndex: 200,
          pointerEvents: "none",
        }} />
      )}
      <div className="container">
        <div className="flex items-center justify-between py-4">

          {/* Logo — links home */}
          <a href="/" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
            <img
              src="/logo.png"
              alt="Valten AI"
              style={{ width: "36px", height: "36px", objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(201,168,76,0.3))" }}
            />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.35rem", color: "#f8f8f8", letterSpacing: "0.02em", lineHeight: 1 }}>
              Valten<span style={{ color: "#c9a84c" }}>AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/services"
              style={LINK_STYLE}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(248,248,248,0.75)")}
            >
              Services
            </a>
            <DropdownTrigger label="Marketing" items={MARKETING_ITEMS} />

            {plainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={LINK_STYLE}
                onClick={(e) => handleAnchorClick(e, link.href)}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#c9a84c")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(248,248,248,0.75)")}
              >
                {link.label}
              </a>
            ))}

            <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ padding: "0.55rem 1.3rem", fontSize: "0.72rem" }}>
              Book Free Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#c9a84c", transition: "transform 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#c9a84c", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s ease" }} />
            <span style={{ display: "block", width: "22px", height: "1.5px", background: "#c9a84c", transition: "transform 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: "rgba(10,15,30,0.98)", borderTop: "1px solid rgba(201,168,76,0.15)", padding: "1rem 0 1.5rem" }}>

            {/* Services link */}
            <a href="/services" onClick={() => setMenuOpen(false)}
              style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "1rem", fontWeight: 500, color: "rgba(248,248,248,0.8)", textDecoration: "none", padding: "0.75rem 0", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
              Services
            </a>

            {/* Marketing accordion */}
            <button onClick={() => setMobileMarketingOpen((o) => !o)}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", fontFamily: "'Outfit', sans-serif", fontSize: "1rem", fontWeight: 500, color: "rgba(248,248,248,0.8)", background: "none", border: "none", padding: "0.75rem 0", borderBottom: "1px solid rgba(201,168,76,0.08)", cursor: "pointer" }}>
              Marketing <ChevronIcon open={mobileMarketingOpen} />
            </button>
            {mobileMarketingOpen && (
              <div style={{ paddingLeft: "1rem", background: "rgba(201,168,76,0.03)" }}>
                {MARKETING_ITEMS.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                    style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", color: "rgba(248,248,248,0.65)", textDecoration: "none", padding: "0.6rem 0", borderBottom: "1px solid rgba(201,168,76,0.05)" }}>
                    <span style={{ color: "#c9a84c", marginRight: "0.5rem" }}>›</span>{item.label}
                  </a>
                ))}
              </div>
            )}

            {/* Plain links */}
            {plainLinks.map((link) => (
              <a key={link.href} href={link.href}
                onClick={(e) => { setMenuOpen(false); handleAnchorClick(e, link.href); }}
                style={{ display: "block", fontFamily: "'Outfit', sans-serif", fontSize: "1rem", fontWeight: 500, color: "rgba(248,248,248,0.8)", textDecoration: "none", padding: "0.75rem 0", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
                {link.label}
              </a>
            ))}

            <a href={AUDIT_URL} target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open(AUDIT_URL, "_blank", "noopener,noreferrer"); }} className="btn-gold" style={{ marginTop: "1.25rem", display: "inline-flex" }}>
              Book Free Call →
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
