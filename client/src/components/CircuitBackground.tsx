/**
 * CircuitBackground — Service pages ambient background
 * Gold circuit traces slowly draw themselves across the canvas.
 * Nodes pulse when a trace arrives. Low opacity, lightweight.
 */

import { useEffect, useRef } from "react";

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Skip on small screens
    if (window.innerWidth < 768) return;

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

    // ── NODE ────────────────────────────────────────────────────
    interface Node {
      x: number;
      y: number;
      pulseAlpha: number;
      pulseRadius: number;
      pulsing: boolean;
    }

    function makeNodes(): Node[] {
      const cols = 8;
      const rows = 6;
      const nodes: Node[] = [];
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const jx = (Math.random() - 0.5) * 80;
          const jy = (Math.random() - 0.5) * 80;
          nodes.push({
            x: (c / (cols - 1)) * W() + jx,
            y: (r / (rows - 1)) * H() + jy,
            pulseAlpha: 0,
            pulseRadius: 0,
            pulsing: false,
          });
        }
      }
      return nodes;
    }

    let nodes = makeNodes();

    function triggerPulse(n: Node) {
      n.pulsing = true;
      n.pulseAlpha = 0.5;
      n.pulseRadius = 3;
    }

    function updateNode(n: Node) {
      if (!n.pulsing) return;
      n.pulseRadius += 0.6;
      n.pulseAlpha -= 0.012;
      if (n.pulseAlpha <= 0) {
        n.pulsing = false;
        n.pulseAlpha = 0;
        n.pulseRadius = 0;
      }
    }

    function drawNode(n: Node) {
      // Static dot
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = "#c9a84c";
      ctx.beginPath();
      ctx.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Pulse ring
      if (n.pulsing && n.pulseAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = n.pulseAlpha;
        ctx.strokeStyle = "#c9a84c";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.pulseRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // ── TRACE ────────────────────────────────────────────────────
    interface Trace {
      fromNode: Node;
      toNode: Node;
      progress: number;    // 0 → 1
      speed: number;
      alpha: number;
      done: boolean;
      // Path: from → corner → to (L-shaped circuit style)
      midX: number;
      midY: number;
    }

    function makeTrace(from: Node, to: Node): Trace {
      // L-shaped path — go horizontal first then vertical
      const goHorizFirst = Math.random() < 0.5;
      return {
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: 0.004 + Math.random() * 0.004,
        alpha: 0.08 + Math.random() * 0.1,
        done: false,
        midX: goHorizFirst ? to.x : from.x,
        midY: goHorizFirst ? from.y : to.y,
      };
    }

    const traces: Trace[] = [];
    let traceTimer = 0;

    function spawnTrace() {
      if (nodes.length < 2) return;
      const from = nodes[Math.floor(Math.random() * nodes.length)];
      // Pick a nearby node
      const candidates = nodes
        .filter(n => n !== from)
        .sort((a, b) => {
          const da = Math.hypot(a.x - from.x, a.y - from.y);
          const db = Math.hypot(b.x - from.x, b.y - from.y);
          return da - db;
        })
        .slice(0, 4);
      const to = candidates[Math.floor(Math.random() * candidates.length)];
      traces.push(makeTrace(from, to));
    }

    function updateTrace(t: Trace) {
      if (t.done) return;
      t.progress += t.speed;
      if (t.progress >= 1) {
        t.progress = 1;
        t.done = true;
        triggerPulse(t.toNode);
      }
    }

    function drawTrace(t: Trace) {
      const p = t.progress;
      const { fromNode: f, toNode: to, midX, midY } = t;

      // Total path length (approx)
      const seg1 = Math.hypot(midX - f.x, midY - f.y);
      const seg2 = Math.hypot(to.x - midX, to.y - midY);
      const total = seg1 + seg2 || 1;

      const drawn = p * total;

      ctx.save();
      ctx.globalAlpha = t.alpha;
      ctx.strokeStyle = "#c9a84c";
      ctx.lineWidth = 0.8;
      ctx.lineCap = "square";
      ctx.beginPath();
      ctx.moveTo(f.x, f.y);

      if (drawn <= seg1) {
        // Still on first segment
        const frac = drawn / (seg1 || 1);
        ctx.lineTo(f.x + (midX - f.x) * frac, f.y + (midY - f.y) * frac);
      } else {
        // First segment complete, drawing second
        ctx.lineTo(midX, midY);
        const frac2 = (drawn - seg1) / (seg2 || 1);
        ctx.lineTo(midX + (to.x - midX) * frac2, midY + (to.y - midY) * frac2);
      }

      ctx.stroke();
      ctx.restore();
    }

    // ── LOOP ─────────────────────────────────────────────────────
    function loop() {
      rafId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W(), H());

      traceTimer++;
      if (traceTimer % 55 === 0 && traces.length < 12) spawnTrace();

      // Remove old done traces
      for (let i = traces.length - 1; i >= 0; i--) {
        if (traces[i].done && traces[i].progress >= 1) {
          // Keep for a beat then remove
          if (Math.random() < 0.02) traces.splice(i, 1);
        }
      }

      nodes.forEach(n => { updateNode(n); drawNode(n); });
      traces.forEach(t => { updateTrace(t); drawTrace(t); });
    }

    // Rebuild nodes on resize
    window.addEventListener("resize", () => {
      nodes = makeNodes();
      traces.length = 0;
    });

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
