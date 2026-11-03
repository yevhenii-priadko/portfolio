import { Inter, JetBrains_Mono, Onest, Space_Grotesk } from "next/font/google";

// Space Grotesk has no Cyrillic glyphs. globals.css (--ff-display) names it
// directly and puts Onest right after it, so Ukrainian letters use Onest.
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
