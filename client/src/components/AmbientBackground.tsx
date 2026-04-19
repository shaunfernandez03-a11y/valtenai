/**
 * AmbientBackground — Full-page living canvas
 * Water streams fall from top, dissolving into gold pixels as they descend.
 * Fixed behind all content at low opacity — subliminal, atmospheric, unique.
 * Lightweight: sparse particles, RAF loop, reduced-motion aware.
 */

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    // ── DROP ────────────────────────────────────────────────────
    interface Drop {
      x: number; y: number; vy: number;
      len: number; alpha: number; width: number;
      splashY: number; splashing: boolean;
      splashProgress: number;
      sp: { x: number; y: number; vx: number; vy: number; alpha: number; r: number }[];
    }

    function makeDrop(init: boolean): Drop {
      const h = H();
      // Spread drops across full width but concentrate toward top
      return {
        x: Math.random() * W(),
        y: init ? Math.random() * h * 0.6 : -10,
        vy: 1.8 + Math.random() * 2.5,
        len: 6 + Math.random() * 14,
        alpha: 0.06 + Math.random() * 0.14,  // very subtle
        width: 0.6 + Math.random() * 1.0,
        splashY: h * (0.45 + Math.random() * 0.3), // spread transition zone
        splashing: false,
        splashProgress: 0,
        sp: [],
      };
    }

    const drops: Drop[] = Array.from({ length: 28 }, () => makeDrop(true));

    function updateDrop(d: Drop) {
      if (!d.splashing) {
        d.y += d.vy;
        if (d.y > d.splashY) {
          d.splashing = true;
          for (let i = 0; i < 3 + Math.floor(Math.random() * 4); i++) {
            const angle = Math.PI + (Math.random() - 0.5) * Math.PI * 0.7;
            const speed = 0.5 + Math.random() * 1.4;
            d.sp.push({ x: d.x, y: d.splashY, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed - 0.8, alpha: 0.25 + Math.random() * 0.2, r: 0.6 + Math.random() * 1 });
          }
        }
      } else {
        d.splashProgress += 0.035;
        d.sp.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += 0.1; p.alpha -= 0.018; });
        if (d.splashProgress > 1.4) Object.assign(d, makeDrop(false));
      }
    }

    function drawDrop(d: Drop) {
      if (!d.splashing) {
        ctx.save();
        ctx.globalAlpha = d.alpha;
        ctx.strokeStyle = "#5aa0c0";
        ctx.lineWidth = d.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();
        ctx.restore();
      } else {
        d.sp.forEach(p => {
          if (p.alpha <= 0) return;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = "#6ab0d0";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }
    }

    // ── PIXEL ────────────────────────────────────────────────────
    interface Pixel {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; targetAlpha: number;
      fadeIn: boolean; gold: boolean;
      life: number; maxLife: number;
      twinkle: boolean; twinklePhase: number; twinkleSpeed: number;
    }

    function makePixel(init: boolean): Pixel {
      const h = H(), w = W();
      // Pixels spread across full height, denser in lower half
      const yBase = init
        ? h * 0.4 + Math.random() * h * 0.6
        : h * (0.4 + Math.random() * 0.45);
      return {
        x: Math.round((Math.random() * w) / 8) * 8,
        y: yBase,
        vy: -(0.2 + Math.random() * 0.6),
        vx: (Math.random() - 0.5) * 0.3,
        size: Math.random() < 0.65 ? 2 : 4,
        alpha: 0,
        targetAlpha: 0.08 + Math.random() * 0.18,  // very subtle
        fadeIn: true,
        gold: Math.random() < 0.6,
        life: 0,
        maxLife: 100 + Math.random() * 160,
        twinkle: Math.random() < 0.35,
        twinkleSpeed: 0.03 + Math.random() * 0.05,
        twinklePhase: Math.random() * Math.PI * 2,
      };
    }

    const pixels: Pixel[] = Array.from({ length: 55 }, () => makePixel(true));

    function updatePixel(p: Pixel) {
      p.life++; p.y += p.vy; p.x += p.vx;
      if (p.fadeIn) {
        p.alpha += 0.015;
        if (p.alpha >= p.targetAlpha) { p.alpha = p.targetAlpha; p.fadeIn = false; }
      }
      if (p.life > p.maxLife * 0.72) p.alpha -= 0.006;
      if (p.twinkle) p.twinklePhase += p.twinkleSpeed;
      if (p.life > p.maxLife || p.alpha <= 0 || p.y < -10) Object.assign(p, makePixel(false));
    }

    function drawPixel(p: Pixel) {
      let a = Math.max(0, p.alpha);
      if (p.twinkle) a *= 0.5 + 0.5 * Math.sin(p.twinklePhase);
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = p.gold ? "#c9a84c" : "#88bcd4";
      ctx.fillRect(p.x, p.y, p.size, p.size);
      ctx.restore();
    }

    // ── STREAM LINES ─────────────────────────────────────────────
    interface Stream {
      x: number; yFrac: number; vy: number;
      alpha: number; color: string;
      len: number; wobble: number; wobbleAcc: number;
    }

    function makeStream(init: boolean): Stream {
      return {
        x: Math.random() * W(),
        yFrac: init ? Math.random() * 0.5 : -0.05,
        vy: 0.003 + Math.random() * 0.004,
        alpha: 0.025 + Math.random() * 0.055,
        color: Math.random() < 0.5 ? "#7a6030" : "#1a3a5c",
        len: 0.05 + Math.random() * 0.1,
        wobble: (Math.random() - 0.5) * 0.0015,
        wobbleAcc: 0,
      };
    }

    const streams: Stream[] = Array.from({ length: 16 }, () => makeStream(true));

    function updateStream(s: Stream) {
      s.wobbleAcc += s.wobble;
      s.x += s.wobbleAcc;
      s.yFrac += s.vy;
      if (s.yFrac > 0.55 + s.len) Object.assign(s, makeStream(false));
    }

    function drawStream(s: Stream) {
      const h = H();
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(s.x, s.yFrac * h);
      ctx.lineTo(s.x + s.wobbleAcc * 18, Math.min((s.yFrac + s.len) * h, h * 0.58));
      ctx.stroke();
      ctx.restore();
    }

    // ── LOOP ─────────────────────────────────────────────────────
    function loop() {
      rafId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W(), H());

      streams.forEach(s => { updateStream(s); drawStream(s); });
      drops.forEach(d => { updateDrop(d); drawDrop(d); });
      pixels.forEach(p => { updatePixel(p); drawPixel(p); });
    }

    loop();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 1,
      }}
    />
  );
}
