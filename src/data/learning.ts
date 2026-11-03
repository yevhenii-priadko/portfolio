const GH = "https://github.com/yevhenii-priadko";

export type LearningRepo = { name: string; href: string; demo?: string };

export const nextRepos: LearningRepo[] = [
  "01-ts-basics",
  "02-react-cafe",
  "03-react-movies",
  "04-react-query",
  "05-notehub",
  "06-notehub-nextjs",
  "07-routing-nextjs",
  "08-zustand",
  "09-auth",
].map((name) => ({
  name,
  href: `${GH}/${name}`,
  ...(name === "04-react-query" ? { demo: "https://04-react-query-roan-rho.vercel.app/" } : {}),
}));

export const nodeRepo: LearningRepo = { name: "nodejs-hw", href: `${GH}/nodejs-hw` };

/** Numbered homework series: shown as a range, linked to a filtered repo list. */
export const jsSeries = {
  label: "goit-js-hw-01 … 12",
  href: `${GH}?tab=repositories&q=goit-js-hw`,
};

export const markupSeries = {
  label: "goit-markup-hw-01 … 06",
  href: `${GH}?tab=repositories&q=goit-markup-hw`,
};

export const ecoTote: LearningRepo = {
  name: "eco-tote",
  href: `${GH}/it-creators-13-project-eco-tote`,
};
