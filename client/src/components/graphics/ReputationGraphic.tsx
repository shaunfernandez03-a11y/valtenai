import { useEffect, useRef } from "react";

export default function ReputationGraphic() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 240;
    canvas.width = W; canvas.height = H;
    let raf: number, t = 0;

    function drawStar(x: number, y: number, r: number, fill: number, alpha: number) {
      const spikes = 5, outerR = r, innerR = r * 0.42;
      ctx!.save();
      ctx!.globalAlpha = alpha;
      ctx!.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerR : innerR;
        const angle = (i * Math.PI) / spikes - Math.PI / 2;
        if (i === 0) ctx!.moveTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
        else ctx!.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
      }
      ctx!.closePath();
      if (fill > 0) {
        const grad = ctx!.createLinearGradient(x - outerR, y, x + outerR, y);
        grad.addColorStop(0, "#c9a84c");
        grad.addColorStop(fill, "#c9a84c");
        grad.addColorStop(fill, "rgba(201,168,76,0.15)");
        grad.addColorStop(1, "rgba(201,168,76,0.15)");
        ctx!.fillStyle = grad;
        ctx!.fill();
      }
      ctx!.strokeStyle = "rgba(201,168,76,0.6)";
      ctx!.lineWidth = 1;
      ctx!.stroke();
      ctx!.restore();
    }

    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.014;
      ctx!.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;

      // Rating trend line in background
      const points = [
        { x: cx - 180, y: cy + 60 },
        { x: cx - 120, y: cy + 40 },
        { x: cx - 60, y: cy + 20 },
        { x: cx, y: cy - 10 },
        { x: cx + 60, y: cy - 35 },
        { x: cx + 120, y: cy - 55 },
        { x: cx + 160, y: cy - 65 },
      ];

      ctx!.save();
      ctx!.strokeStyle = "rgba(201,168,76,0.15)";
      ctx!.lineWidth = 2;
      ctx!.beginPath();
      points.forEach((p, i) => i === 0 ? ctx!.moveTo(p.x, p.y) : ctx!.lineTo(p.x, p.y));
      ctx!.stroke();
      ctx!.restore();

      // Animated dot on trend line
      const dotIdx = (t * 0.4) % (points.length - 1);
      const di = Math.floor(dotIdx);
      const df = dotIdx - di;
      if (di < points.length - 1) {
        const dx = points[di].x + (points[di + 1].x - points[di].x) * df;
        const dy = points[di].y + (points[di + 1].y - points[di].y) * df;
        ctx!.save();
        ctx!.fillStyle = "#c9a84c";
        ctx!.beginPath();
        ctx!.arc(dx, dy, 4, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }

      // 5 stars
      const starY = cy - 20;
      const starSpacing = 44;
      const starStartX = cx - starSpacing * 2;
      const rating = 4.6;

      for (let i = 0; i < 5; i++) {
        const sx = starStartX + i * starSpacing;
        const fill = Math.min(1, Math.max(0, rating - i));
        const pulse = i < Math.floor(rating) ? 0.85 + 0.15 * Math.sin(t * 1.5 + i * 0.4) : 0.6;
        drawStar(sx, starY, 18, fill, pulse);
      }

      // Rating number
      ctx!.save();
      ctx!.font = "bold 52px 'Cormorant Garamond', serif";
      ctx!.fillStyle = "#c9a84c";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText("4.6", cx, starY + 52);
      ctx!.restore();

      ctx!.save();
      ctx!.font = "10px 'Space Mono', monospace";
      ctx!.fillStyle = "rgba(201,168,76,0.5)";
      ctx!.textAlign = "center";
      ctx!.fillText("AVERAGE STAR RATING", cx, starY + 82);
      ctx!.restore();

      // Floating review count
      ctx!.save();
      ctx!.font = "9px 'Outfit', sans-serif";
      ctx!.fillStyle = "rgba(201,168,76,0.35)";
      ctx!.textAlign = "center";
      ctx!.fillText("↑ improving every month", cx, starY + 100);
      ctx!.restore();
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{ display: "block", margin: "0 auto", maxWidth: "100%", opacity: 0.95 }} />
  );
}
