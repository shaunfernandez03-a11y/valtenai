/**
 * HeroCanvas — HTML5 Canvas Animation
 * Design: Kinetic Gold / Valten AI Systems
 *
 * Thin vertical water droplets fall and splash at ~55%.
 * Below the transition, snapped gold + blue pixel squares drift upward.
 * Faint stream lines, transition glow band, and vignette complete the effect.
 */

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    // ── DROP ──────────────────────────────────────────────────────────────
    interface Drop {
      x: number; y: number; vy: number;
      len: number; alpha: number; width: number;
      splashY: number; splashing: boolean;
      splashProgress: number;
      splashParticles: { x: number; y: number; vx: number; vy: number; alpha: number; r: number }[];
    }

    function makeDrop(init: boolean): Drop {
      return {
        x: W() * 0.15 + Math.random() * W() * 0.7,
        y: init ? Math.random() * H() * 0.5 : -10,
        vy: 2.5 + Math.random() * 3,
        len: 8 + Math.random() * 18,
        alpha: 0.18 + Math.random() * 0.45,
        width: 0.8 + Math.random() * 1.2,
        splashY: H() * (0.52 + Math.random() * 0.08),
        splashing: false,
        splashProgress: 0,
        splashParticles: [],
      };
    }

    const drops: Drop[] = Array.from({ length: 38 }, () => makeDrop(true));

    function updateDrop(d: Drop) {
      if (!d.splashing) {
        d.y += d.vy;
        if (d.y > d.splashY) {
          d.splashing = true;
          // create splash particles
          const count = 4 + Math.floor(Math.random() * 5);
          for (let i = 0; i < count; i++) {
            const angle = Math.PI + (Math.random() - 0.5) * Math.PI * 0.8;
            const speed = 0.8 + Math.random() * 2;
            d.splashParticles.push({
              x: d.x, y: d.splashY,
              vx: Math.cos(angle) * speed,
              vy: Math.sin(angle) * speed - 1,
              alpha: 0.6 + Math.random() * 0.3,
              r: 0.8 + Math.random() * 1.2,
            });
          }
        }
      } else {
        d.splashProgress += 0.04;
        for (const p of d.splashParticles) {
          p.x += p.vx; p.y += p.vy;
          p.vy += 0.12;
          p.alpha -= 0.025;
        }
        if (d.splashProgress > 1.2) Object.assign(d, makeDrop(false));
      }
    }

    function drawDrop(d: Drop) {
      if (!d.splashing) {
        ctx.save();
        ctx.globalAlpha = d.alpha;
        ctx.strokeStyle = "#6ab0d4";
        ctx.lineWidth = d.width;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();
        ctx.restore();
      } else {
        for (const p of d.splashParticles) {
          if (p.alpha <= 0) continue;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = "#7ac4e0";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // ── PIXEL PARTICLE ────────────────────────────────────────────────────
    interface Pixel {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; targetAlpha: number;
      fadeIn: boolean; gold: boolean;
      life: number; maxLife: number;
      twinkle: boolean; twinkleSpeed: number; twinklePhase: number;
    }

    function makePixel(init: boolean): Pixel {
      const w = W(), h = H();
      return {
        x: Math.round((Math.random() * w) / 6) * 6,
        y: init ? h * 0.5 + Math.random() * h * 0.5 : h * (0.52 + Math.random() * 0.1),
        vy: -(0.3 + Math.random() * 0.9),
        vx: (Math.random() - 0.5) * 0.4,
        size: Math.random() < 0.7 ? 3 : 5,
        alpha: 0,
        targetAlpha: 0.4 + Math.random() * 0.6,
        fadeIn: true,
        gold: Math.random() < 0.55,
        life: 0,
        maxLife: 80 + Math.random() * 120,
        twinkle: Math.random() < 0.3,
        twinkleSpeed: 0.04 + Math.random() * 0.06,
        twinklePhase: Math.random() * Math.PI * 2,
      };
    }

    const pixels: Pixel[] = Array.from({ length: 90 }, () => makePixel(true));

    function updatePixel(p: Pixel) {
      p.life++; p.y += p.vy; p.x += p.vx;
      if (p.fadeIn) {
        p.alpha += 0.03;
        if (p.alpha >= p.targetAlpha) { p.alpha = p.targetAlpha; p.fadeIn = false; }
      }
      if (p.life > p.maxLife * 0.7) p.alpha -= 0.012;
      if (p.twinkle) p.twinklePhase += p.twinkleSpeed;
      if (p.life > p.maxLife || p.alpha <= 0 || p.y < -10) Object.assign(p, makePixel(false));
    }

    function drawPixel(p: Pixel) {
      let a = Math.max(0, p.alpha);
      if (p.twinkle) a *= 0.6 + 0.4 * Math.sin(p.twinklePhase);
      ctx.save();
      ctx.globalAlpha = a;
      ctx.fillStyle = p.gold ? "#c9a84c" : "#a0cfe8";
      ctx.fillRect(p.x, p.y, p.size, p.size);
      ctx.restore();
    }

    // ── STREAM LINES ──────────────────────────────────────────────────────
    interface Stream {
      x: number; y: number; vy: number;
      alpha: number; color: string;
      length: number; wobble: number; wobbleAcc: number;
    }

    function makeStream(init: boolean): Stream {
      return {
        x: W() * 0.2 + Math.random() * W() * 0.6,
        y: init ? Math.random() * 0.55 : -0.05,
        vy: 0.004 + Math.random() * 0.006,
        alpha: 0.06 + Math.random() * 0.1,
        color: Math.random() < 0.5 ? "#7a6030" : "#1a3a5c",
        length: 0.06 + Math.random() * 0.12,
        wobble: (Math.random() - 0.5) * 0.002,
        wobbleAcc: 0,
      };
    }

    const streams: Stream[] = Array.from({ length: 22 }, () => makeStream(true));

    function updateStream(s: Stream) {
      s.wobbleAcc += s.wobble;
      s.x += s.wobbleAcc;
      s.y += s.vy;
      if (s.y > 0.6 + s.length) Object.assign(s, makeStream(false));
    }

    function drawStream(s: Stream) {
      const h = H();
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y * h);
      ctx.lineTo(s.x + s.wobbleAcc * 20, Math.min((s.y + s.length) * h, h * 0.62));
      ctx.stroke();
      ctx.restore();
    }

    // ── BACKGROUND ────────────────────────────────────────────────────────
    function drawBackground() {
      const w = W(), h = H();
      ctx.fillStyle = "#0a0f1e";
      ctx.fillRect(0, 0, w, h);

      const g1 = ctx.createRadialGradient(w * 0.5, h * 0.15, 0, w * 0.5, h * 0.15, w * 0.6);
      g1.addColorStop(0, "rgba(20,40,80,0.6)");
      g1.addColorStop(1, "rgba(10,15,30,0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const g2 = ctx.createRadialGradient(w * 0.5, h * 0.8, 0, w * 0.5, h * 0.8, w * 0.5);
      g2.addColorStop(0, "rgba(40,28,8,0.4)");
      g2.addColorStop(1, "rgba(10,15,30,0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);
    }

    function drawTransitionGlow() {
      const w = W(), h = H(), y = h * 0.55;
      const g = ctx.createLinearGradient(0, y - 30, 0, y + 30);
      g.addColorStop(0, "rgba(100,180,220,0)");
      g.addColorStop(0.4, "rgba(100,180,220,0.06)");
      g.addColorStop(0.5, "rgba(201,168,76,0.10)");
      g.addColorStop(0.6, "rgba(201,168,76,0.06)");
      g.addColorStop(1, "rgba(201,168,76,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, y - 30, w, 60);
    }

    function drawVignette() {
      const w = W(), h = H();
      const v = ctx.createRadialGradient(w * 0.5, h * 0.5, h * 0.2, w * 0.5, h * 0.5, w * 0.75);
      v.addColorStop(0, "rgba(0,0,0,0)");
      v.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = v;
      ctx.fillRect(0, 0, w, h);
    }

    // ── LOOP ──────────────────────────────────────────────────────────────
    function loop() {
      animationId = requestAnimationFrame(loop);
      drawBackground();
      streams.forEach(s => { updateStream(s); drawStream(s); });
      drops.forEach(d => { updateDrop(d); drawDrop(d); });
      drawTransitionGlow();
      pixels.forEach(p => { updatePixel(p); drawPixel(p); });
      drawVignette();
    }

    loop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}
