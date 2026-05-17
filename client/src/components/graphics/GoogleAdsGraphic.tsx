import { useEffect, useRef } from "react";

export default function GoogleAdsGraphic() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 260;
    canvas.width = W; canvas.height = H;
    let raf: number, t = 0;

    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.018;
      ctx!.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2 + 10;

      // Concentric target rings — subtle, clean
      for (let i = 4; i >= 1; i--) {
        const r = i * 40;
        const pulse = 1 + 0.025 * Math.sin(t * 1.4 + i);
        ctx!.save();
        ctx!.strokeStyle = `rgba(201,168,76,${0.06 + (4 - i) * 0.045})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.arc(cx, cy, r * pulse, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.restore();
      }

      // Crosshairs — very faint
      ctx!.save();
      ctx!.strokeStyle = "rgba(201,168,76,0.09)";
      ctx!.lineWidth = 1;
      ctx!.setLineDash([4, 10]);
      ctx!.beginPath();
      ctx!.moveTo(cx - 170, cy); ctx!.lineTo(cx + 170, cy);
      ctx!.moveTo(cx, cy - 115); ctx!.lineTo(cx, cy + 115);
      ctx!.stroke();
      ctx!.setLineDash([]);
      ctx!.restore();

      // Centre dot pulse
      const dotR = 5 + 1.5 * Math.sin(t * 2);
      ctx!.save();
      ctx!.fillStyle = "#c9a84c";
      ctx!.shadowColor = "rgba(201,168,76,0.6)";
      ctx!.shadowBlur = 10;
      ctx!.beginPath();
      ctx!.arc(cx, cy, dotR, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();

      // Main stat — "8.1x" as a single clean unit
      ctx!.save();
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.globalAlpha = 0.93;

      // Draw "8.1x" as one string to keep it tight
      ctx!.font = "bold 64px 'Cormorant Garamond', serif";
      ctx!.fillStyle = "#c9a84c";
      ctx!.fillText("8.1×", cx, cy - 14);
      ctx!.restore();

      // Subtext: "RETURN ON AD SPEND"
      ctx!.save();
      ctx!.font = "600 10.5px 'Space Mono', monospace";
      ctx!.fillStyle = "rgba(201,168,76,0.52)";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "top";
      ctx!.fillText("RETURN ON AD SPEND", cx, cy + 22);
      ctx!.restore();

      // Orbiting accent dot (small, subtle — no text)
      const orbitR = 100;
      const ox = cx + Math.cos(t * 0.55) * orbitR;
      const oy = cy + Math.sin(t * 0.55) * orbitR * 0.45;
      ctx!.save();
      ctx!.fillStyle = "rgba(201,168,76,0.55)";
      ctx!.shadowColor = "rgba(201,168,76,0.4)";
      ctx!.shadowBlur = 6;
      ctx!.beginPath();
      ctx!.arc(ox, oy, 3.5, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={ref}
      style={{ display: "block", margin: "0 auto", maxWidth: "100%", opacity: 0.95 }}
    />
  );
}
