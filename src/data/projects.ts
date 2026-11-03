// Non-translatable project data. Text lives in messages/*.json under Projects.items.<key>.

export type ClientProject = {
  key: "railway" | "flow";
  image: string;
  live: string;
  code: string;
  tags: string[];
};

export type TeamProject = {
  key: "harmoniq" | "meblerija";
  image: string;
  teamSize: number;
  live: string;
  repos: { labelKey: "code" | "frontend" | "backend"; href: string }[];
};

export const clientProjects: ClientProject[] = [
  {
    key: "railway",
    image: "/projects/railway-atelier.webp",
    live: "https://railway-atelier.studio",
    code: "https://github.com/yevhenii-priadko/railway-atelier",
    tags: ["Next.js", "TypeScript", "MongoDB", "i18n", "SEO"],
  },
  {
    key: "flow",
    image: "/projects/flow-atelier.webp",
    live: "https://www.flow-atelier.studio",
    code: "https://github.com/yevhenii-priadko/n8n.flow-atelier",
    tags: ["Astro", "TypeScript", "Web3Forms", "Vercel"],
  },
];

export const teamProjects: TeamProject[] = [
  {
    key: "harmoniq",
    image: "/projects/harmoniq.webp",
    teamSize: 13,
    live: "https://front-harmoniq.vercel.app",
    repos: [
      { labelKey: "frontend", href: "https://github.com/yevhenii-priadko/front-harmoniq" },
      { labelKey: "backend", href: "https://github.com/yevhenii-priadko/backend-harmoniq" },
    ],
  },
  {
    key: "meblerija",
    image: "/projects/meblerija.webp",
    teamSize: 10,
    live: "https://yevhenii-priadko.github.io/it-creators-project-meblerija/",
    repos: [
      { labelKey: "code", href: "https://github.com/yevhenii-priadko/it-creators-project-meblerija" },
    ],
  },
];
