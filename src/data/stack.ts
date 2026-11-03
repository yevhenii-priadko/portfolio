// Tool names are not translated. `daily` = used in every project (highlighted).

export type StackGroup = {
  key: "backend" | "frontend" | "tools";
  /** Mixing-console label shown in the card corner. */
  channel: "IN" | "OUT" | "BUS";
  items: { name: string; daily?: boolean }[];
};

export const stack: StackGroup[] = [
  {
    key: "backend",
    channel: "IN",
    items: [
      { name: "Node.js", daily: true },
      { name: "Express", daily: true },
      { name: "MongoDB", daily: true },
      { name: "Mongoose", daily: true },
      { name: "JWT sessions" },
      { name: "Joi / celebrate" },
      { name: "Swagger" },
      { name: "Cloudinary" },
      { name: "Nodemailer" },
    ],
  },
  {
    key: "frontend",
    channel: "OUT",
    items: [
      { name: "Next.js", daily: true },
      { name: "React", daily: true },
      { name: "TypeScript", daily: true },
      { name: "JavaScript" },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "Astro" },
      { name: "HTML" },
      { name: "CSS / Sass" },
      { name: "i18n" },
    ],
  },
  {
    key: "tools",
    channel: "BUS",
    items: [
      { name: "Git / GitHub", daily: true },
      { name: "Vercel", daily: true },
      { name: "Render" },
      { name: "Postman" },
      { name: "Vite" },
      { name: "Claude Code" },
    ],
  },
];
