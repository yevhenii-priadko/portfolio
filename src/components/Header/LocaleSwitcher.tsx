"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import styles from "./Header.module.css";

type Locale = (typeof routing.locales)[number];

// Display order in the header: UA · EN.
const options: { locale: Locale; label: string }[] = [
  { locale: "uk", label: "UA" },
  { locale: "en", label: "EN" },
];

export default function LocaleSwitcher({ label }: { label: string }) {
  const current = useLocale();
  const pathname = usePathname();

  return (
    <div role="group" aria-label={label} className={styles.locales}>
      {options.map(({ locale, label: name }, i) => (
        <span key={locale} className={styles.localeItem}>
          {i > 0 && <span aria-hidden="true">·</span>}
          <Link
            href={pathname}
            locale={locale}
            hrefLang={locale}
            aria-current={locale === current ? "true" : undefined}
            className={styles.locale}
          >
            {name}
          </Link>
        </span>
      ))}
    </div>
  );
}
