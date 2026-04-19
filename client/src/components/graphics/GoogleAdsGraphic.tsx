import { useEffect, useRef } from "react";

export default function GoogleAdsGraphic() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 240;
    canvas.width = W; canvas.height = H;
    let raf: number, t = 0;

    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.018;
      ctx!.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;

      // Concentric target rings
      for (let i = 4; i >= 1; i--) {
        const r = i * 38;
        const pulse = 1 + 0.03 * Math.sin(t * 1.5 + i);
        ctx!.save();
        ctx!.strokeStyle = `rgba(201,168,76,${0.08 + (4 - i) * 0.05})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(cx, cy, r * pulse, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();
      }

      // Crosshairs
      ctx!.save();
      ctx!.strokeStyle = "rgba(201,168,76,0.12)";
      ctx!.lineWidth = 1;
      ctx!.setLineDash([4, 8]);
      ctx!.beginPath();
      ctx!.moveTo(cx - 160, cy); ctx!.lineTo(cx + 160, cy);
      ctx!.moveTo(cx, cy - 110); ctx!.lineTo(cx, cy + 110);
      ctx!.stroke();
      ctx!.restore();

      // Centre dot pulse
      const dotR = 6 + 2 * Math.sin(t * 2);
      ctx!.save();
      ctx!.fillStyle = "#c9a84c";
      ctx!.beginPath();
      ctx!.arc(cx, cy, dotR, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();

      // Big stat
      ctx!.save();
      ctx!.font = "bold 68px 'Cormorant Garamond', serif";
      ctx!.fillStyle = "#c9a84c";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.globalAlpha = 0.92;
      ctx!.fillText("8:1", cx, cy);
      ctx!.restore();

      // Label
      ctx!.save();
      ctx!.font = "11px 'Space Mono', monospace";
      ctx!.fillStyle = "rgba(201,168,76,0.55)";
      ctx!.textAlign = "center";
      ctx!.letterSpacing = "0.15em";
      ctx!.fillText("RETURN ON AD SPEND", cx, cy + 52);
      ctx!.restore();

      // Orbiting dollar dot
      const orbitR = 95;
      const ox = cx + Math.cos(t * 0.6) * orbitR;
      const oy = cy + Math.sin(t * 0.6) * orbitR * 0.5;
      ctx!.save();
      ctx!.fillStyle = "rgba(201,168,76,0.7)";
      ctx!.font = "bold 13px 'Outfit', sans-serif";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText("$", ox, oy);
      ctx!.restore();
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{ display: "block", margin: "0 auto", maxWidth: "100%", opacity: 0.95 }} />
  );
}
