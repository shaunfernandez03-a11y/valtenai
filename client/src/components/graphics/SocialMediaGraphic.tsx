import { useEffect, useRef } from "react";

export default function SocialMediaGraphic() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 240;
    canvas.width = W; canvas.height = H;
    let raf: number, t = 0;

    const platforms = [
      { label: "IG", angle: -0.6 },
      { label: "FB", angle: 0.1 },
      { label: "TK", angle: 0.8 },
      { label: "GBP", angle: 1.5 },
    ];

    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.016;
      ctx!.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;

      // Orbit line
      ctx!.save();
      ctx!.strokeStyle = "rgba(201,168,76,0.1)";
      ctx!.lineWidth = 1;
      ctx!.setLineDash([3, 6]);
      ctx!.beginPath();
      ctx!.ellipse(cx, cy, 130, 70, 0, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();

      // Orbiting platform dots
      platforms.forEach((p, i) => {
        const angle = p.angle + t * 0.35;
        const ox = cx + Math.cos(angle) * 130;
        const oy = cy + Math.sin(angle) * 70;
        const size = 22;

        // Connection line to centre
        ctx!.save();
        ctx!.strokeStyle = "rgba(201,168,76,0.15)";
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(cx, cy);
        ctx!.lineTo(ox, oy);
        ctx!.stroke();
        ctx!.restore();

        // Platform circle
        ctx!.save();
        ctx!.fillStyle = "rgba(201,168,76,0.12)";
        ctx!.strokeStyle = "rgba(201,168,76,0.45)";
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.arc(ox, oy, size, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.stroke();

        ctx!.fillStyle = "#c9a84c";
        ctx!.font = "bold 9px 'Space Mono', monospace";
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillText(p.label, ox, oy);
        ctx!.restore();

        // Notification pulse
        const pulse = (t * 1.5 + i * 1.2) % 3;
        if (pulse < 1) {
          ctx!.save();
          ctx!.strokeStyle = `rgba(201,168,76,${0.5 * (1 - pulse)})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.arc(ox, oy, size + pulse * 18, 0, Math.PI * 2);
          ctx!.stroke();
          ctx!.restore();
        }
      });

      // Centre stat
      ctx!.save();
      ctx!.font = "bold 58px 'Cormorant Garamond', serif";
      ctx!.fillStyle = "#c9a84c";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText("4–5x", cx, cy - 6);
      ctx!.restore();

      ctx!.save();
      ctx!.font = "10px 'Space Mono', monospace";
      ctx!.fillStyle = "rgba(201,168,76,0.5)";
      ctx!.textAlign = "center";
      ctx!.fillText("POSTS PER WEEK", cx, cy + 40);
      ctx!.restore();
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{ display: "block", margin: "0 auto", maxWidth: "100%", opacity: 0.95 }} />
  );
}
