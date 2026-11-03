import { useTranslations } from "next-intl";
import { ecoTote, jsSeries, markupSeries, nextRepos, nodeRepo } from "@/data/learning";
import styles from "./LearningPath.module.css";

/** Deliberately low-key: the very last section, smaller type, muted colors. */
export default function LearningPath() {
  const t = useTranslations("Learning");
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const hint = <span className="visually-hidden"> {t("opensNewTab")}</span>;

  return (
    <section id="learning" className={styles.section} aria-labelledby="learning-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>{t("eyebrow")}</p>
          <h2 id="learning-title" className={styles.title}>
            {t("title")}
          </h2>
          <p className={styles.lead}>{t("lead")}</p>
        </div>

        <dl className={styles.groups}>
          <div className={styles.group}>
            <dt>{t("groups.node")}</dt>
            <dd>
              <a href={nodeRepo.href} {...ext} className={styles.repo}>
                {nodeRepo.name}
                {hint}
              </a>
              <span className={styles.note}>{t("notesApi")}</span>
            </dd>
          </div>

          <div className={styles.group}>
            <dt>{t("groups.next")}</dt>
            <dd>
              <ul className={styles.repos}>
                {nextRepos.map((r) => (
                  <li key={r.name}>
                    <a href={r.href} {...ext} className={styles.repo}>
                      {r.name}
                      {hint}
                    </a>
                    {r.demo && (
                      <a href={r.demo} {...ext} className={styles.demo}>
                        {t("movieSearch")} ↗{hint}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </div>

          <div className={styles.group}>
            <dt>{t("groups.js")}</dt>
            <dd>
              <a href={jsSeries.href} {...ext} className={styles.repo}>
                {jsSeries.label}
                {hint}
              </a>
              <span className={styles.note}>{t("allRepos")}</span>
            </dd>
          </div>

          <div className={styles.group}>
            <dt>{t("groups.markup")}</dt>
            <dd>
              <ul className={styles.repos}>
                <li>
                  <a href={markupSeries.href} {...ext} className={styles.repo}>
                    {markupSeries.label}
                    {hint}
                  </a>
                </li>
                <li>
                  <a href={ecoTote.href} {...ext} className={styles.repo}>
                    {ecoTote.name}
                    {hint}
                  </a>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
