import { useEffect, useRef } from "react";

export default function ChatbotAnimation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 520, H = 260;
    canvas.width = W; canvas.height = H;
    let raf: number, t = 0;

    const messages = [
      { side: "left",  text: "Is the kitchen still open?", delay: 0 },
      { side: "right", text: "Yes! Open until 10pm tonight.", delay: 1.8 },
      { side: "left",  text: "Can I book a table for 4?", delay: 3.6 },
      { side: "right", text: "Of course! What time suits you?", delay: 5.4 },
    ];

    const CYCLE = 8;

    function bubble(x: number, y: number, w: number, h: number, r: number, side: string) {
      ctx!.beginPath();
      if (side === "right") {
        ctx!.moveTo(x + r, y);
        ctx!.lineTo(x + w - r - 8, y);
        ctx!.lineTo(x + w - r - 8, y);
        ctx!.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx!.lineTo(x + w, y + h - r);
        ctx!.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx!.lineTo(x + r, y + h);
        ctx!.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx!.lineTo(x, y + r);
        ctx!.quadraticCurveTo(x, y, x + r, y);
      } else {
        ctx!.moveTo(x + r, y);
        ctx!.lineTo(x + w - r, y);
        ctx!.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx!.lineTo(x + w, y + h - r);
        ctx!.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx!.lineTo(x + r, y + h);
        ctx!.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx!.lineTo(x, y + r);
        ctx!.quadraticCurveTo(x, y, x + r, y);
      }
      ctx!.closePath();
    }

    function draw() {
      raf = requestAnimationFrame(draw);
      t += 0.016;
      ctx!.clearRect(0, 0, W, H);

      const tc = t % CYCLE;

      const positions = [
        { x: 60,  y: 30  },
        { x: 220, y: 80  },
        { x: 60,  y: 140 },
        { x: 220, y: 190 },
      ];

      messages.forEach((msg, i) => {
        const show = tc > msg.delay;
        if (!show) return;

        const age = tc - msg.delay;
        const alpha = Math.min(1, age * 3);
        const slideX = msg.side === "right" ? Math.max(0, (1 - age * 4) * 20) : Math.max(0, (1 - age * 4) * -20);
        const pos = positions[i];
        const bw = 190, bh = 32, br = 8;
        const bx = msg.side === "right" ? W - 60 - bw + slideX : 60 + slideX;

        ctx!.save();
        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = msg.side === "right" ? "rgba(201,168,76,0.15)" : "rgba(201,168,76,0.07)";
        ctx!.strokeStyle = msg.side === "right" ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.25)";
        ctx!.lineWidth = 1;
        bubble(bx, pos.y, bw, bh, br, msg.side);
        ctx!.fill();
        ctx!.stroke();

        ctx!.fillStyle = msg.side === "right" ? "#c9a84c" : "rgba(248,248,248,0.8)";
        ctx!.font = "11px 'Outfit', sans-serif";
        ctx!.textAlign = "left";
        ctx!.fillText(msg.text, bx + 12, pos.y + 21);
        ctx!.restore();
      });

      // Typing indicator on last visible
      const lastShown = messages.filter((m) => tc > m.delay).length;
      if (lastShown < messages.length && lastShown > 0) {
        const nextMsg = messages[lastShown];
        const pos = positions[lastShown];
        const bx = nextMsg.side === "right" ? W - 60 - 60 : 60;
        ctx!.save();
        ctx!.globalAlpha = 0.6;
        ctx!.fillStyle = "rgba(201,168,76,0.07)";
        ctx!.strokeStyle = "rgba(201,168,76,0.25)";
        ctx!.lineWidth = 1;
        bubble(bx, pos.y, 60, 32, 8, nextMsg.side);
        ctx!.fill();
        ctx!.stroke();
        for (let d = 0; d < 3; d++) {
          const pulse = 0.4 + 0.6 * Math.sin(t * 4 + d * 1.2);
          ctx!.fillStyle = `rgba(201,168,76,${pulse})`;
          ctx!.beginPath();
          ctx!.arc(bx + 16 + d * 14, pos.y + 16, 4, 0, Math.PI * 2);
          ctx!.fill();
        }
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
