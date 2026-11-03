import { useTranslations } from "next-intl";
import { stack } from "@/data/stack";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Stack.module.css";

export default function Stack() {
  const t = useTranslations("Stack");

  return (
    <section id="stack" className={styles.section} aria-labelledby="stack-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading id="stack-title" eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

        <div className={styles.grid}>
          {stack.map((group) => (
            <div key={group.key} className={styles.card}>
              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{t(`groups.${group.key}.title`)}</h3>
                <span aria-hidden="true" className={styles.channel}>
                  {group.channel}
                </span>
              </div>
              <ul className={styles.items}>
                {group.items.map((item) => (
                  <li key={item.name} className={item.daily ? styles.daily : styles.item}>
                    {item.name}
                    {item.daily && <span className="visually-hidden"> ({t("daily")})</span>}
                  </li>
                ))}
              </ul>
              <p className={styles.note}>{t(`groups.${group.key}.note`)}</p>
            </div>
          ))}
        </div>

        <div className={styles.legend} aria-hidden="true">
          <span className={styles.legendItem}>
            <span className={`${styles.swatch} ${styles.swatchDaily}`} />
            {t("daily")}
          </span>
          <span className={styles.legendItem}>
            <span className={styles.swatch} />
            {t("used")}
          </span>
        </div>
      </div>
    </section>
  );
}
