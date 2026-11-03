"use client";

import { useEffect, useRef } from "react";
import { drawWaveform } from "./drawWaveform";
import styles from "./Waveform.module.css";

type Props = {
  label: string;
  className?: string;
};

/**
 * DAW-style audio clip that scrolls like playback; past the middle its peaks
 * turn into columns of code. Pure canvas, no audio.
 *
 * - Pauses while off screen (IntersectionObserver) and when the tab is hidden.
 * - prefers-reduced-motion: draws a single still frame.
 * - Reads the accent color from the CSS variable --accent.
 */
export default function Waveform({ label, className }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const css = getComputedStyle(canvas);
    const accent = css.getPropertyValue("--accent").trim() || "#5EE0C8";
    // next/font registers the family under its own name; take it from the CSS variable.
    const monoFont = `${css.getPropertyValue("--font-jetbrains-mono").trim() || '"JetBrains Mono"'}, ui-monospace, monospace`;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;
    let t = 1.2;
    let last = 0;
    // Phones get roughly 30 fps; the motion is slow, so this is not noticeable.
    const minFrameMs = window.innerWidth < 768 ? 33 : 0;

    const render = () =>
      drawWaveform(ctx, { width, height, dpr, t, accent, monoFont });

    const fit = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      render();
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!last) last = now;
      const dt = now - last;
      if (dt < minFrameMs) return;
      last = now;
      t += Math.min(dt, 100) / 1000;
      render();
    };

    const start = () => {
      if (raf || motionQuery.matches || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const sync = () => {
      if (motionQuery.matches || !visible || document.hidden) {
        stop();
        render();
      } else {
        start();
      }
    };

    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersectionObserver.observe(canvas);

    document.addEventListener("visibilitychange", sync);
    motionQuery.addEventListener("change", sync);

    fit();
    sync();
    // Redraw once the web font is in, so a still (reduced-motion) frame uses it too.
    document.fonts?.ready.then(render);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div className={`${styles.wrap} ${className ?? ""}`}>
      <canvas ref={canvasRef} role="img" aria-label={label} className={styles.canvas} />
    </div>
  );
}
