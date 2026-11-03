// Absolute site URL for metadata, sitemap and robots.
// Vercel sets VERCEL_PROJECT_PRODUCTION_URL (without protocol) on every deployment.
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://yevhenii-priadko.vercel.app";

export const OG_LOCALE = { en: "en_US", uk: "uk_UA" } as const;
