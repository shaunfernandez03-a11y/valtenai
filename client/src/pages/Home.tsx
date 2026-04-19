/**
 * Home — Valten AI Systems
 * Design: Kinetic Gold — Contemporary Dark Luxury / Motion-First
 * 
 * Sections:
 * 1. Navbar (fixed)
 * 2. Hero (canvas animation + pendulum logo)
 * 3. Pain Points
 * 4. Services
 * 5. How It Works
 * 6. Stats Bar
 * 7. Testimonials
 * 8. Pricing
 * 9. FAQ
 * 10. Footer CTA + Footer
 */

import { useEffect } from "react";
import AmbientBackground from "@/components/AmbientBackground";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Navbar from "@/components/Navbar";
import PainPointsSection from "@/components/PainPointsSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import StatsBar from "@/components/StatsBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  // Re-run scroll reveal after mount to catch any elements already in view
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal, .reveal-left");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add("visible");
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--t-bg)",
        color: "var(--t-text)",
        overflowX: "hidden",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      {/* Gold stripe is on all pages except homepage — handled in Navbar */}

      {/* Full-page ambient water→pixel background */}
      <AmbientBackground />

      {/* All sections sit above the ambient canvas */}
      <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <HowItWorksSection />
      <StatsBar />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      </div>
    </div>
  );
}
