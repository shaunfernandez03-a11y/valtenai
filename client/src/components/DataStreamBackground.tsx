/**
 * DataStreamBackground — Marketing pages ambient background
 * Faint vertical streams of characters/numbers fall slowly in gold.
 * Very subtle Matrix-style data rain. 8% opacity max.
 */

import { useEffect, useRef } from "react";

export default function DataStreamBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId: number;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initStreams();
    };

    const W = () => canvas.width;
    const H = () => canvas.height;

    // Characters — mix of numbers, symbols and letters for data feel
    const CHARS = "01001101000110101110010110001011001100110100101010010111010100110010";
    const SYMBOLS = "∑∏∆∇∈∉⊕⊗≈≠≤≥→←↑↓";
    const ALL_CHARS = CHARS + SYMBOLS;
    function randChar() {
      return ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
    }

    // ── STREAM ───────────────────────────────────────────────────
    interface Stream {
      x: number;
      y: number;
      speed: number;
      chars: string[];
      length: number;
      alpha: number;
      charTimer: number;
      charInterval: number;
    }

    function makeStream(x: number, init: boolean): Stream {
      const length = 6 + Math.floor(Math.random() * 10);
      return {
        x,
        y: init ? Math.random() * H() : -20,
        speed: 0.6 + Math.random() * 1.2,
        chars: Array.from({ length }, () => randChar()),
        length,
        alpha: 0.12 + Math.random() * 0.13,
        charTimer: 0,
        charInterval: 8 + Math.floor(Math.random() * 12),
      };
    }

    let streams: Stream[] = [];
    const FONT_SIZE = 11;
    const COL_WIDTH = 22;

    function initStreams() {
      const cols = Math.floor(W() / COL_WIDTH);
      streams = [];
      for (let i = 0; i < cols; i++) {
        // Spawn ~50% of columns for better density
        if (Math.random() < 0.50) {
          streams.push(makeStream(i * COL_WIDTH + COL_WIDTH / 2, true));
        }
      }
    }

    resize();
    window.addEventListener("resize", resize);
    initStreams();

    function updateStream(s: Stream) {
      s.y += s.speed;
      s.charTimer++;

      // Randomly mutate a character in the stream
      if (s.charTimer >= s.charInterval) {
        s.charTimer = 0;
        const idx = Math.floor(Math.random() * s.chars.length);
        s.chars[idx] = randChar();
      }

      // Reset when fully off screen
      if (s.y - s.length * FONT_SIZE > H()) {
        s.y = -20;
        s.alpha = 0.05 + Math.random() * 0.07;
        s.chars = Array.from({ length: s.length }, () => randChar());
      }
    }

    function drawStream(s: Stream) {
      for (let i = 0; i < s.chars.length; i++) {
        const charY = s.y - i * FONT_SIZE;
        if (charY < -FONT_SIZE || charY > H() + FONT_SIZE) continue;

        // Head character slightly brighter
        const isHead = i === 0;
        const alpha = isHead ? s.alpha * 2.2 : s.alpha * (1 - i / s.length);
        if (alpha <= 0) continue;

        ctx.save();
        ctx.globalAlpha = Math.min(alpha, 0.42);
        ctx.fillStyle = isHead ? "#e2c87a" : "#c9a84c";
        ctx.font = `${FONT_SIZE}px "Space Mono", monospace`;
        ctx.textAlign = "center";
        ctx.fillText(s.chars[i], s.x, charY);
        ctx.restore();
      }
    }

    // ── HORIZONTAL SCAN LINES ────────────────────────────────────
    // Occasional faint horizontal gold line scans down the page
    interface ScanLine {
      y: number;
      speed: number;
      alpha: number;
    }

    const scanLines: ScanLine[] = [];
    let scanTimer = 0;

    function spawnScan() {
      scanLines.push({
        y: 0,
        speed: 0.8 + Math.random() * 1.2,
        alpha: 0.04 + Math.random() * 0.04,
      });
    }

    function updateScan(s: ScanLine) { s.y += s.speed; }
    function drawScan(s: ScanLine) {
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.strokeStyle = "#c9a84c";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(0, s.y);
      ctx.lineTo(W(), s.y);
      ctx.stroke();
      ctx.restore();
    }

    // ── LOOP ─────────────────────────────────────────────────────
    function loop() {
      rafId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W(), H());

      scanTimer++;
      if (scanTimer % 280 === 0 && scanLines.length < 3) spawnScan();

      for (let i = scanLines.length - 1; i >= 0; i--) {
        updateScan(scanLines[i]);
        drawScan(scanLines[i]);
        if (scanLines[i].y > H()) scanLines.splice(i, 1);
      }

      streams.forEach(s => { updateStream(s); drawStream(s); });
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
      }}
    />
  );
}
