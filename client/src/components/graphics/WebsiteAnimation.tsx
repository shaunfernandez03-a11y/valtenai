import { useEffect, useRef } from "react";

export default function WebsiteAnimation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 260;
    canvas.width = W; canvas.height = H;
    let raf: number, t = 0;
    const CYCLE = 5;

    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.014;
      ctx!.clearRect(0, 0, W, H);

      const progress = (t % CYCLE) / CYCLE;
      const cx = W / 2, cy = H / 2 + 10;
      const bw = 320, bh = 190;
      const bx = cx - bw / 2, by = cy - bh / 2;

      // Browser shell
      ctx!.save();
      ctx!.strokeStyle = "rgba(201,168,76,0.5)";
      ctx!.lineWidth = 1.5;
      ctx!.beginPath();
      ctx!.roundRect(bx, by, bw, bh, 6);
      ctx!.stroke();

      // Browser top bar
      ctx!.fillStyle = "rgba(201,168,76,0.07)";
      ctx!.beginPath();
      ctx!.roundRect(bx, by, bw, 28, [6, 6, 0, 0]);
      ctx!.fill();

      // Traffic lights
      ["rgba(201,168,76,0.6)", "rgba(201,168,76,0.35)", "rgba(201,168,76,0.2)"].forEach((c, i) => {
        ctx!.fillStyle = c;
        ctx!.beginPath();
        ctx!.arc(bx + 16 + i * 16, by + 14, 4, 0, Math.PI * 2);
        ctx!.fill();
      });

      // URL bar
      ctx!.strokeStyle = "rgba(201,168,76,0.2)";
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.roundRect(bx + 70, by + 7, bw - 90, 14, 3);
      ctx!.stroke();
      ctx!.fillStyle = "rgba(201,168,76,0.5)";
      ctx!.font = "8px 'Space Mono', monospace";
      ctx!.textAlign = "left";
      ctx!.fillText("valtenai.com", bx + 76, by + 18);

      // Content area — progressively drawn
      const contentY = by + 36;
      const contentH = bh - 44;

      // Hero block
      const heroH = contentH * 0.38;
      ctx!.fillStyle = "rgba(201,168,76,0.06)";
      ctx!.fillRect(bx + 8, contentY + 4, bw - 16, heroH);

      // Draw line by line based on progress
      const lines = [
        { x: bx + 90, y: contentY + heroH * 0.4, w: 140, h: 10, gold: true },
        { x: bx + 110, y: contentY + heroH * 0.6, w: 100, h: 6, gold: false },
        { x: bx + 120, y: contentY + heroH * 0.78, w: 72, h: 14, gold: true, cta: true },
        { x: bx + 16, y: contentY + heroH + 14, w: 80, h: 56, gold: false, card: true },
        { x: bx + 16 + 90, y: contentY + heroH + 14, w: 80, h: 56, gold: false, card: true },
        { x: bx + 16 + 180, y: contentY + heroH + 14, w: 80, h: 56, gold: false, card: true },
        { x: bx + 20, y: contentY + heroH + 82, w: bw - 40, h: 6, gold: false },
        { x: bx + 40, y: contentY + heroH + 94, w: bw - 80, h: 6, gold: false },
      ];

      lines.forEach((line, i) => {
        const threshold = i / lines.length;
        if (progress < threshold) return;
        const lineProgress = Math.min(1, (progress - threshold) / (1 / lines.length) * 2);

        ctx!.save();
        if (line.card) {
          ctx!.strokeStyle = "rgba(201,168,76,0.25)";
          ctx!.lineWidth = 1;
          ctx!.strokeRect(line.x, line.y, line.w * lineProgress, line.h);
        } else if (line.cta) {
          ctx!.fillStyle = `rgba(201,168,76,${0.7 * lineProgress})`;
          ctx!.beginPath();
          ctx!.roundRect(line.x, line.y, line.w * lineProgress, line.h, 2);
          ctx!.fill();
        } else {
          ctx!.fillStyle = line.gold
            ? `rgba(201,168,76,${0.8 * lineProgress})`
            : `rgba(201,168,76,${0.2 * lineProgress})`;
          ctx!.beginPath();
          ctx!.roundRect(line.x, line.y, line.w * lineProgress, line.h, 2);
          ctx!.fill();
        }
        ctx!.restore();
      });

      // Speed lines when drawing fast
      if (progress < 0.7) {
        for (let s = 0; s < 4; s++) {
          const sx = bx + bw + 10 + s * 8;
          const sy = by + 40 + s * 30;
          const len = 20 + s * 8;
          const alpha = (0.7 - progress) * 0.5;
          ctx!.save();
          ctx!.strokeStyle = `rgba(201,168,76,${alpha})`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(sx, sy);
          ctx!.lineTo(sx + len, sy);
          ctx!.stroke();
          ctx!.restore();
        }
      }

      // "LIVE" badge when complete
      if (progress > 0.9) {
        const badgeAlpha = (progress - 0.9) / 0.1;
        ctx!.save();
        ctx!.globalAlpha = badgeAlpha;
        ctx!.fillStyle = "#c9a84c";
        ctx!.beginPath();
        ctx!.roundRect(bx + bw - 44, by + 7, 34, 14, 3);
        ctx!.fill();
        ctx!.fillStyle = "#0a0f1e";
        ctx!.font = "bold 8px 'Space Mono', monospace";
        ctx!.textAlign = "center";
        ctx!.fillText("LIVE", bx + bw - 27, by + 18);
        ctx!.restore();
      }

      ctx!.restore();
    }

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{ display: "block", margin: "0 auto", maxWidth: "100%", opacity: 0.95 }} />
  );
}
