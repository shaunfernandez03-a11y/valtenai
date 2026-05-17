/**
 * LuxuryGlow — Spotlight/glow effect for luxury cinematic feel
 * Renders a radial gradient spotlight that can be positioned behind sections
 */

interface LuxuryGlowProps {
  position?: "top-left" | "top-center" | "top-right" | "center" | "bottom-center";
  intensity?: "subtle" | "medium" | "strong";
  color?: "gold" | "blue" | "purple";
}

export default function LuxuryGlow({
  position = "top-center",
  intensity = "medium",
  color = "gold",
}: LuxuryGlowProps) {
  const positionMap = {
    "top-left": { top: "-20%", left: "-10%", width: "600px", height: "600px" },
    "top-center": { top: "-15%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "600px" },
    "top-right": { top: "-20%", right: "-10%", width: "600px", height: "600px" },
    "center": { top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "900px", height: "900px" },
    "bottom-center": { bottom: "-10%", left: "50%", transform: "translateX(-50%)", width: "800px", height: "600px" },
  };

  const intensityMap = {
    subtle: 0.08,
    medium: 0.12,
    strong: 0.18,
  };

  const colorMap = {
    gold: "radial-gradient(circle, rgba(201,168,76,0.3) 0%, rgba(201,168,76,0.1) 30%, transparent 70%)",
    blue: "radial-gradient(circle, rgba(100,200,255,0.25) 0%, rgba(100,200,255,0.08) 30%, transparent 70%)",
    purple: "radial-gradient(circle, rgba(168,100,255,0.25) 0%, rgba(168,100,255,0.08) 30%, transparent 70%)",
  };

  const pos = positionMap[position];
  const opacity = intensityMap[intensity];
  const gradient = colorMap[color];

  return (
    <div
      style={{
        position: "absolute",
        ...pos,
        background: gradient,
        filter: "blur(80px)",
        opacity,
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
