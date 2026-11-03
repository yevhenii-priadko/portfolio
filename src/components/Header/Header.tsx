import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import styles from "./Header.module.css";

const sections = ["projects", "stack", "about", "contact"] as const;

export default function Header() {
  const t = useTranslations("Nav");

  return (
    <header id="top" className={`container ${styles.header}`}>
      <a href="#top" className={styles.logo}>
        Yevhenii Priadko
      </a>

      <nav aria-label={t("label")} className={styles.nav}>
        {sections.map((id) => (
          <a key={id} href={`#${id}`}>
            {t(id)}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <LocaleSwitcher label={t("language")} />
        {/* EN and UA resumes live in public/cv/; the path comes from messages. */}
        <a href={t("cvFile")} className={styles.cv} download>
          {t("cv")}
        </a>
      </div>
    </header>
  );
}
