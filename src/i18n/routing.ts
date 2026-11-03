import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // "uk" is the ISO code for Ukrainian; the switcher shows it as "UA".
  locales: ["en", "uk"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
