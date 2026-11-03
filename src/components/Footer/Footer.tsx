import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span>© 2026 Yevhenii Priadko</span>
        <span>{t("built")}</span>
        <a href="#top" className={styles.top}>
          {t("top")} ↑
        </a>
      </div>
    </footer>
  );
}
