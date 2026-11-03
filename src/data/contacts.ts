export type Contact = {
  key: "telegram" | "email" | "linkedin" | "github";
  handle: string;
  href: string;
  external: boolean;
};

export const contacts: Contact[] = [
  { key: "telegram", handle: "@Evgeniy_02084", href: "https://t.me/Evgeniy_02084", external: true },
  {
    key: "email",
    handle: "yevheniipriadko.111@gmail.com",
    href: "mailto:yevheniipriadko.111@gmail.com",
    external: false,
  },
  {
    key: "linkedin",
    handle: "in/yevhenii-priadko",
    href: "https://www.linkedin.com/in/yevhenii-priadko",
    external: true,
  },
  {
    key: "github",
    handle: "yevhenii-priadko",
    href: "https://github.com/yevhenii-priadko",
    external: true,
  },
];
