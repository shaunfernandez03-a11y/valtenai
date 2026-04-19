import { useEffect, useRef } from "react";

export default function EmailSMSGraphic() {
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
      t += 0.016;
      ctx!.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;

      // Signal arcs emanating from centre
      for (let i = 1; i <= 5; i++) {
        const phase = (t * 0.8 + i * 0.5) % 3;
        const r = 30 + i * 28;
        const alpha = phase < 1 ? phase * 0.4 : Math.max(0, (3 - phase) * 0.15);

        ctx!.save();
        ctx!.strokeStyle = `rgba(201,168,76,${alpha})`;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        // Half arc upward
        ctx!.arc(cx, cy + 10, r, Math.PI * 1.15, Math.PI * 1.85);
        ctx!.stroke();
        ctx!.restore();
      }

      // Envelope icon
      const ew = 60, eh = 42, ex = cx - ew / 2, ey = cy - eh / 2 + 10;
      ctx!.save();
      ctx!.strokeStyle = "#c9a84c";
      ctx!.lineWidth = 1.5;
      ctx!.fillStyle = "rgba(201,168,76,0.08)";
      ctx!.beginPath();
      ctx!.roundRect(ex, ey, ew, eh, 3);
      ctx!.fill();
      ctx!.stroke();
      // Envelope flap
      ctx!.beginPath();
      ctx!.moveTo(ex, ey);
      ctx!.lineTo(cx, ey + eh * 0.5);
      ctx!.lineTo(ex + ew, ey);
      ctx!.stroke();
      ctx!.restore();

      // Big stat top left
      ctx!.save();
      ctx!.font = "bold 72px 'Cormorant Garamond', serif";
      ctx!.fillStyle = "#c9a84c";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.globalAlpha = 0.15;
      ctx!.fillText("98%", cx, cy - 20);
      ctx!.restore();

      ctx!.save();
      ctx!.font = "bold 52px 'Cormorant Garamond', serif";
      ctx!.fillStyle = "#c9a84c";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText("98%", cx, cy - 85);
      ctx!.restore();

      ctx!.save();
      ctx!.font = "10px 'Space Mono', monospace";
      ctx!.fillStyle = "rgba(201,168,76,0.5)";
      ctx!.textAlign = "center";
      ctx!.fillText("SMS OPEN RATE", cx, cy - 55);
      ctx!.restore();

      // Floating mini envelopes
      for (let i = 0; i < 4; i++) {
        const angle = (t * 0.4 + i * Math.PI * 0.5);
        const r = 110 + i * 15;
        const fx = cx + Math.cos(angle) * r * 0.7;
        const fy = cy + Math.sin(angle) * r * 0.35;
        const fa = 0.15 + 0.1 * Math.sin(t + i);

        ctx!.save();
        ctx!.strokeStyle = `rgba(201,168,76,${fa})`;
        ctx!.lineWidth = 1;
        ctx!.strokeRect(fx - 8, fy - 5, 16, 11);
        ctx!.beginPath();
        ctx!.moveTo(fx - 8, fy - 5);
        ctx!.lineTo(fx, fy + 1);
        ctx!.lineTo(fx + 8, fy - 5);
        ctx!.stroke();
        ctx!.restore();
      }
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{ display: "block", margin: "0 auto", maxWidth: "100%", opacity: 0.95 }} />
  );
}
