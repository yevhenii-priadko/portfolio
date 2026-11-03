type Frame = {
  width: number;
  height: number;
  dpr: number;
  /** Seconds of "playback". */
  t: number;
  /** Hex color, e.g. "#5EE0C8". */
  accent: string;
  /** CSS font-family list for the code glyphs. */
  monoFont: string;
};

const GLYPHS = ["{", "}", "<", ">", "/", "=", ";", "(", ")", "[", "]", "0", "1", "*", "&", "$", "#", ":"];

const BAR_STEP = 3; // px between waveform bars
const BAR_WIDTH = 2;
const SCROLL_SPEED = 42; // px per second
const BEAT_LEN = 26; // bars per beat
const CODE_COL = 22; // px between code columns
const CODE_ROW = 18; // px between code rows

const smoothstep = (a: number, z: number, x: number) => {
  const k = Math.min(1, Math.max(0, (x - a) / (z - a)));
  return k * k * (3 - 2 * k);
};

/** Deterministic pseudo-random 0..1 for an integer, so the clip never "reshuffles". */
const hash = (n: number) => {
  const v = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return v - Math.floor(v);
};

/** Peak amplitude 0..1 of bar `i`: beats with sharp attacks and decays over a breathing sustain. */
const peakAt = (i: number) => {
  const beat = Math.floor(i / BEAT_LEN);
  const phase = i - beat * BEAT_LEN;
  const accent = (beat % 4 === 0 ? 0.9 : 0.5) + 0.35 * hash(beat);
  const transient = Math.exp(-phase / 6) * accent;
  const sustain = 0.2 + 0.1 * Math.sin(i * 0.031) + 0.08 * Math.sin(i * 0.0071 + 1.3);
  const noise = 0.62 + 0.38 * hash(i);
  return Math.min(1, Math.max(0.035, (sustain + transient * 0.85) * noise));
};

const toRgb = (hex: string): [number, number, number] => {
  let h = hex.replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};

export function drawWaveform(ctx: CanvasRenderingContext2D, frame: Frame) {
  const { width: W, height: H, dpr, t, accent, monoFont } = frame;
  if (!W || !H) return;

  const [r, g, b] = toRgb(accent);
  const rgba = (alpha: number) => `rgba(${r},${g},${b},${Math.max(0, alpha).toFixed(3)})`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, W, H);

  const mid = H / 2;
  const maxA = H * 0.44;
  const scroll = t * SCROLL_SPEED;
  const morphStart = W * 0.42;
  const morphEnd = W * 0.74;

  // Center line
  ctx.fillStyle = rgba(0.12);
  ctx.fillRect(0, Math.round(mid), W, 1);

  // Waveform: a light peak envelope with a brighter RMS core, as in a DAW clip.
  const base = Math.floor(scroll / BAR_STEP);
  const frac = scroll - base * BAR_STEP;
  for (let k = 0; k * BAR_STEP - frac <= W; k++) {
    const x = k * BAR_STEP - frac;
    const fade = smoothstep(0, W * 0.05, x) * (1 - smoothstep(morphStart, morphEnd, x));
    if (fade < 0.01) continue;
    const i = base + k;
    const peak = peakAt(i) * maxA;
    const rms = peak * (0.48 + 0.12 * hash(i + 17));
    ctx.fillStyle = rgba(fade * 0.38);
    ctx.fillRect(x, mid - peak, BAR_WIDTH, peak * 2);
    ctx.fillStyle = rgba(fade * 0.95);
    ctx.fillRect(x, mid - rms, BAR_WIDTH, rms * 2);
  }

  // Past the middle the same peaks become columns of code.
  ctx.font = `500 13px ${monoFont}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const colBase = Math.floor(scroll / CODE_COL);
  const colFrac = scroll - colBase * CODE_COL;
  const tick = Math.floor(t * 1.2);
  const barsPerCol = CODE_COL / BAR_STEP;

  for (let c = 0; c * CODE_COL - colFrac <= W; c++) {
    const x = c * CODE_COL - colFrac + CODE_COL / 2;
    const m = smoothstep(morphStart - 30, morphEnd, x);
    if (m < 0.02) continue;
    const col = colBase + c;

    let peak = 0;
    const firstBar = Math.floor((col * CODE_COL) / BAR_STEP);
    for (let j = 0; j < barsPerCol; j++) peak = Math.max(peak, peakAt(firstBar + j));

    const rows = Math.floor((peak * maxA) / CODE_ROW);
    for (let j = -rows; j <= rows; j++) {
      const falloff = 1 - (Math.abs(j) / (rows + 1)) * 0.65;
      // The tips of each column flicker; the body stays stable.
      const seed = col * 31 + j * 7 + (Math.abs(j) === rows ? tick : 0);
      ctx.fillStyle = rgba(m * 0.95 * falloff);
      ctx.fillText(GLYPHS[Math.floor(hash(seed) * GLYPHS.length)], x, mid + j * CODE_ROW);
    }
  }
}
