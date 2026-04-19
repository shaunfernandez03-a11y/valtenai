import { useEffect, useRef } from "react";

export default function PhoneAnimation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 260;
    canvas.width = W;
    canvas.height = H;

    let raf: number;
    let t = 0;

    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.022;
      ctx!.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;
      const gold = "#c9a84c";
      const goldDim = "rgba(201,168,76,0.25)";
      const goldFaint = "rgba(201,168,76,0.08)";

      // Phone outline
      const pw = 64, ph = 110, pr = 10;
      const px = cx - pw / 2, py = cy - ph / 2;
      ctx!.save();
      ctx!.strokeStyle = gold;
      ctx!.lineWidth = 2;
      ctx!.beginPath();
      ctx!.roundRect(px, py, pw, ph, pr);
      ctx!.stroke();

      // Screen
      ctx!.fillStyle = "rgba(201,168,76,0.06)";
      ctx!.beginPath();
      ctx!.roundRect(px + 5, py + 14, pw - 10, ph - 28, 4);
      ctx!.fill();

      // Speaker dot
      ctx!.fillStyle = gold;
      ctx!.beginPath();
      ctx!.arc(cx, py + 7, 3, 0, Math.PI * 2);
      ctx!.fill();

      // Home button
      ctx!.strokeStyle = gold;
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.arc(cx, py + ph - 9, 4, 0, Math.PI * 2);
      ctx!.stroke();

      // Sound waves — 4 arcs pulsing outward
      for (let i = 1; i <= 4; i++) {
        const phase = (t + i * 0.4) % (Math.PI * 2);
        const radius = 48 + i * 22;
        const alpha = Math.max(0, 0.55 - i * 0.1) * (0.5 + 0.5 * Math.sin(phase));

        ctx!.save();
        ctx!.strokeStyle = `rgba(201,168,76,${alpha})`;
        ctx!.lineWidth = 1.5;
        // left arc
        ctx!.beginPath();
        ctx!.arc(cx - 20, cy, radius, Math.PI * 0.6, Math.PI * 1.4);
        ctx!.stroke();
        // right arc
        ctx!.beginPath();
        ctx!.arc(cx + 20, cy, radius, -Math.PI * 0.4, Math.PI * 0.4);
        ctx!.stroke();
        ctx!.restore();
      }

      // Ringing pulse ring
      const pulseR = 28 + 18 * ((t * 0.8) % 1);
      const pulseA = Math.max(0, 0.6 - ((t * 0.8) % 1) * 0.6);
      ctx!.save();
      ctx!.strokeStyle = `rgba(201,168,76,${pulseA})`;
      ctx!.lineWidth = 2;
      ctx!.beginPath();
      ctx!.arc(cx, cy, pulseR, 0, Math.PI * 2);
      ctx!.stroke();
      ctx!.restore();

      // Floating "24/7" label
      ctx!.save();
      ctx!.font = "bold 11px 'Space Mono', monospace";
      ctx!.fillStyle = gold;
      ctx!.textAlign = "center";
      ctx!.globalAlpha = 0.7 + 0.3 * Math.sin(t * 1.2);
      ctx!.fillText("24 / 7", cx, cy + ph / 2 + 28);
      ctx!.restore();

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
