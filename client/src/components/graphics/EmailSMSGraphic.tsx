import { useEffect, useRef } from "react";

export default function EmailSMSGraphic() {
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
      t += 0.016;
      ctx!.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2 + 8;

      // Signal arcs emanating upward from envelope
      for (let i = 1; i <= 4; i++) {
        const phase = (t * 0.8 + i * 0.55) % 3;
        const r = 28 + i * 26;
        const alpha = phase < 1 ? phase * 0.35 : Math.max(0, (3 - phase) * 0.12);

        ctx!.save();
        ctx!.strokeStyle = `rgba(201,168,76,${alpha})`;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.arc(cx, cy + 12, r, Math.PI * 1.18, Math.PI * 1.82);
        ctx!.stroke();
        ctx!.restore();
      }

      // Envelope icon — centred, clean
      const ew = 64, eh = 44;
      const ex = cx - ew / 2;
      const ey = cy - eh / 2 + 12;

      ctx!.save();
      ctx!.strokeStyle = "#c9a84c";
      ctx!.lineWidth = 1.5;
      ctx!.fillStyle = "rgba(201,168,76,0.07)";
      ctx!.shadowColor = "rgba(201,168,76,0.2)";
      ctx!.shadowBlur = 12;
      ctx!.beginPath();
      ctx!.roundRect(ex, ey, ew, eh, 4);
      ctx!.fill();
      ctx!.stroke();
      ctx!.shadowBlur = 0;

      // Envelope flap V
      ctx!.beginPath();
      ctx!.moveTo(ex, ey);
      ctx!.lineTo(cx, ey + eh * 0.52);
      ctx!.lineTo(ex + ew, ey);
      ctx!.stroke();
      ctx!.restore();

      // Stat: "98%" — single clean render above envelope
      ctx!.save();
      ctx!.font = "bold 46px 'Cormorant Garamond', serif";
      ctx!.fillStyle = "#c9a84c";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "bottom";
      ctx!.globalAlpha = 0.92;
      ctx!.fillText("98%", cx, ey - 14);
      ctx!.restore();

      // Label below stat
      ctx!.save();
      ctx!.font = "600 10px 'Space Mono', monospace";
      ctx!.fillStyle = "rgba(201,168,76,0.5)";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "bottom";
      ctx!.fillText("SMS OPEN RATE", cx, ey - 2);
      ctx!.restore();

      // Subtle floating mini envelopes — very faint, wide orbit
      for (let i = 0; i < 3; i++) {
        const angle = (t * 0.35 + i * (Math.PI * 2 / 3));
        const r = 115;
        const fx = cx + Math.cos(angle) * r * 0.75;
        const fy = cy + Math.sin(angle) * r * 0.32;
        const fa = 0.1 + 0.07 * Math.sin(t * 0.8 + i);

        ctx!.save();
        ctx!.strokeStyle = `rgba(201,168,76,${fa})`;
        ctx!.lineWidth = 1;
        ctx!.strokeRect(fx - 7, fy - 4.5, 14, 9);
        ctx!.beginPath();
        ctx!.moveTo(fx - 7, fy - 4.5);
        ctx!.lineTo(fx, fy + 0.5);
        ctx!.lineTo(fx + 7, fy - 4.5);
        ctx!.stroke();
        ctx!.restore();
      }
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
