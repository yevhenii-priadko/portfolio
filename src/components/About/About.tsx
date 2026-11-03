import { useTranslations } from "next-intl";
import styles from "./About.module.css";

type TimelineItem = { when: string; what: string; detail: string; current?: boolean };
type Trait = { tag: string; title: string; text: string };
type Language = { name: string; level: string };

export default function About() {
  const t = useTranslations("About");
  const timeline = t.raw("timeline") as TimelineItem[];
  const traits = t.raw("traits") as Trait[];
  const languages = t.raw("languages") as Language[];

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.story}>
            <p className={styles.eyebrow}>{t("eyebrow")}</p>
            <h2 id="about-title" className={styles.title}>
              {t("title")}
            </h2>
            <p className={styles.p1}>{t("p1")}</p>
            <p className={styles.p2}>{t("p2")}</p>
          </div>

          <ol className={styles.timeline}>
            {timeline.map((item) => (
              <li key={item.what} className={styles.step}>
                <span className={item.current ? styles.whenCurrent : styles.when}>
                  {item.current && <span aria-hidden="true" className={styles.dot} />}
                  {item.when}
                </span>
                <span className={styles.stepText}>
                  <span className={styles.what}>{item.what}</span>
                  <span className={styles.detail}>{item.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <ul className={styles.traits}>
          {traits.map((trait) => (
            <li key={trait.tag} className={styles.trait}>
              <span className={styles.traitTag}>{trait.tag}</span>
              <span className={styles.traitTitle}>{trait.title}</span>
              <span className={styles.traitText}>{trait.text}</span>
            </li>
          ))}
        </ul>

        <div className={styles.languages}>
          <span className={styles.languagesLabel}>{t("languagesLabel")}</span>
          {languages.map((lang) => (
            <span key={lang.name}>
              <span className={styles.langName}>{lang.name}</span> · {lang.level}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
