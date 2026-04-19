import { useEffect, useRef } from "react";

export default function SEOAnimation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 260;
    canvas.width = W; canvas.height = H;
    let raf: number, t = 0;

    const bars = [
      { label: "Competitor B", heights: [0.25, 0.28, 0.26, 0.30] },
      { label: "Competitor A", heights: [0.35, 0.38, 0.36, 0.40] },
      { label: "Your Business", heights: [0.20, 0.42, 0.65, 0.88] },
    ];

    draw();
    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.012;
      ctx!.clearRect(0, 0, W, H);

      const CYCLE = 6;
      const progress = Math.min(1, (t % CYCLE) / (CYCLE * 0.7));

      const chartX = 80, chartY = 30, chartW = 360, chartH = 170;
      const barCount = bars.length;
      const groupW = chartW / 4;
      const barW = groupW / (barCount + 1);

      // Grid lines
      for (let g = 0; g <= 4; g++) {
        const gy = chartY + chartH - (g / 4) * chartH;
        ctx!.save();
        ctx!.strokeStyle = "rgba(201,168,76,0.1)";
        ctx!.lineWidth = 1;
        ctx!.setLineDash([4, 4]);
        ctx!.beginPath();
        ctx!.moveTo(chartX, gy);
        ctx!.lineTo(chartX + chartW, gy);
        ctx!.stroke();
        ctx!.restore();
      }

      // Bars — 4 time groups
      for (let grp = 0; grp < 4; grp++) {
        const groupProgress = Math.min(1, Math.max(0, (progress - grp * 0.22) / 0.22));
        if (groupProgress <= 0) continue;

        bars.forEach((bar, bi) => {
          const isYours = bi === 2;
          const h = bar.heights[grp] * chartH * groupProgress;
          const x = chartX + grp * groupW + (bi + 0.5) * barW;
          const y = chartY + chartH - h;
          const w = barW * 0.7;

          ctx!.save();
          if (isYours) {
            const grad = ctx!.createLinearGradient(0, y, 0, chartY + chartH);
            grad.addColorStop(0, "rgba(201,168,76,0.9)");
            grad.addColorStop(1, "rgba(201,168,76,0.3)");
            ctx!.fillStyle = grad;
          } else {
            ctx!.fillStyle = `rgba(201,168,76,${0.15 + bi * 0.08})`;
          }
          ctx!.beginPath();
          ctx!.roundRect(x - w / 2, y, w, h, [3, 3, 0, 0]);
          ctx!.fill();

          if (isYours && grp === 3 && groupProgress > 0.8) {
            ctx!.fillStyle = "#c9a84c";
            ctx!.font = "bold 10px 'Space Mono', monospace";
            ctx!.textAlign = "center";
            ctx!.fillText("#1", x, y - 6);
          }
          ctx!.restore();
        });
      }

      // X axis labels
      ["Month 1", "Month 2", "Month 3", "Month 4"].forEach((label, i) => {
        ctx!.fillStyle = "rgba(201,168,76,0.4)";
        ctx!.font = "9px 'Outfit', sans-serif";
        ctx!.textAlign = "center";
        ctx!.fillText(label, chartX + i * groupW + groupW / 2, chartY + chartH + 16);
      });

      // Legend
      bars.forEach((bar, i) => {
        const isYours = i === 2;
        const lx = chartX + chartW + 20;
        const ly = chartY + 20 + i * 28;
        ctx!.fillStyle = isYours ? "#c9a84c" : `rgba(201,168,76,${0.3 + i * 0.1})`;
        ctx!.fillRect(lx, ly, 12, 8);
        ctx!.fillStyle = isYours ? "rgba(248,248,248,0.9)" : "rgba(248,248,248,0.4)";
        ctx!.font = isYours ? "bold 9px 'Outfit', sans-serif" : "9px 'Outfit', sans-serif";
        ctx!.textAlign = "left";
        ctx!.fillText(bar.label, lx + 16, ly + 8);
      });

      // Google logo text
      ctx!.save();
      ctx!.font = "bold 11px 'Outfit', sans-serif";
      ctx!.fillStyle = "rgba(201,168,76,0.3)";
      ctx!.textAlign = "left";
      ctx!.fillText("Google Search Rankings", chartX, chartY - 10);
      ctx!.restore();
    }

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{ display: "block", margin: "0 auto", maxWidth: "100%", opacity: 0.95 }} />
  );
}
