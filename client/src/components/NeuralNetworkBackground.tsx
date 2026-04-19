/**
 * NeuralNetworkBackground — Service pages ambient background
 * Faint dots connected by thin lines, slowly drifting and reconnecting.
 * Nodes occasionally pulse gold. Sophisticated, unmistakably AI.
 */

import { useEffect, useRef } from "react";

export default function NeuralNetworkBackground() {
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
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.width;
    const H = () => canvas.height;

    // ── NODE ────────────────────────────────────────────────────
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      // Pulse state
      pulseAlpha: number;
      pulseRadius: number;
      pulsing: boolean;
      pulseTimer: number;
      pulseInterval: number;
    }

    function makeNode(): Node {
      return {
        x: Math.random() * W(),
        y: Math.random() * H(),
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: 1.5 + Math.random() * 1.5,
        alpha: 0.15 + Math.random() * 0.2,
        pulseAlpha: 0,
        pulseRadius: 0,
        pulsing: false,
        pulseTimer: Math.floor(Math.random() * 300),
        pulseInterval: 180 + Math.floor(Math.random() * 400),
      };
    }

    const NODE_COUNT = 38;
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, makeNode);

    function updateNode(n: Node) {
      // Drift
      n.x += n.vx;
      n.y += n.vy;

      // Soft bounce off edges
      if (n.x < 0)    { n.x = 0;    n.vx *= -1; }
      if (n.x > W())  { n.x = W();  n.vx *= -1; }
      if (n.y < 0)    { n.y = 0;    n.vy *= -1; }
      if (n.y > H())  { n.y = H();  n.vy *= -1; }

      // Very slight velocity drift to keep motion organic
      n.vx += (Math.random() - 0.5) * 0.008;
      n.vy += (Math.random() - 0.5) * 0.008;
      // Clamp speed
      const speed = Math.hypot(n.vx, n.vy);
      if (speed > 0.35) { n.vx = (n.vx / speed) * 0.35; n.vy = (n.vy / speed) * 0.35; }

      // Pulse timer
      n.pulseTimer++;
      if (!n.pulsing && n.pulseTimer >= n.pulseInterval) {
        n.pulsing = true;
        n.pulseAlpha = 0.55;
        n.pulseRadius = n.radius;
        n.pulseTimer = 0;
        n.pulseInterval = 180 + Math.floor(Math.random() * 400);
      }

      // Animate pulse
      if (n.pulsing) {
        n.pulseRadius += 0.55;
        n.pulseAlpha  -= 0.011;
        if (n.pulseAlpha <= 0) {
          n.pulsing     = false;
          n.pulseAlpha  = 0;
          n.pulseRadius = 0;
        }
      }
    }

    function drawNode(n: Node) {
      // Core dot
      ctx.save();
      ctx.globalAlpha = n.alpha;
      ctx.fillStyle = "#c9a84c";
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Pulse ring
      if (n.pulsing && n.pulseAlpha > 0) {
        ctx.save();
        ctx.globalAlpha = n.pulseAlpha * 0.7;
        ctx.strokeStyle = "#e2c87a";
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.pulseRadius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
    }

    // ── CONNECTIONS ──────────────────────────────────────────────
    const MAX_DIST = 180;  // max distance to draw a connection

    function drawConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(b.x - a.x, b.y - a.y);
          if (dist > MAX_DIST) continue;

          // Fade connection as nodes get further apart
          const strength = 1 - dist / MAX_DIST;
          const alpha = strength * 0.1;

          // Slightly brighter if either node is pulsing
          const boost = (a.pulsing || b.pulsing) ? 1.8 : 1;

          ctx.save();
          ctx.globalAlpha = Math.min(alpha * boost, 0.22);
          ctx.strokeStyle = "#c9a84c";
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // ── LOOP ─────────────────────────────────────────────────────
    function loop() {
      rafId = requestAnimationFrame(loop);
      ctx.clearRect(0, 0, W(), H());
      drawConnections();
      nodes.forEach(n => { updateNode(n); drawNode(n); });
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
