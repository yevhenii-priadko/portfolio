import { Inter, JetBrains_Mono, Onest, Space_Grotesk } from "next/font/google";

// Space Grotesk has no Cyrillic glyphs. With adjustFontFallback off, the CSS
// stack in globals.css (--ff-display) falls through to Onest for Ukrainian
// letters instead of the metric-adjusted Arial fallback next/font would add.
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  adjustFontFallback: false,
  display: "swap",
});

export const onest = Onest({
  subsets: ["cyrillic", "latin"],
  variable: "--font-onest",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontVariables = [
  spaceGrotesk.variable,
  onest.variable,
  inter.variable,
  jetbrainsMono.variable,
].join(" ");
