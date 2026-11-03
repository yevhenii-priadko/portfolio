import Image from "next/image";
import { useTranslations } from "next-intl";
import { clientProjects, teamProjects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import ExternalLink from "./ExternalLink";
import styles from "./Projects.module.css";

export default function Projects() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          id="projects-title"
          eyebrow={t("eyebrow")}
          title={t("title")}
          lead={t("lead")}
        />

        <div className={styles.group}>
          <GroupLabel>{t("clientGroup")}</GroupLabel>
          <div className={styles.clientGrid}>
            {clientProjects.map((p) => (
              <article key={p.key} className={styles.card}>
                <div className={styles.shot}>
                  <Image
                    src={p.image}
                    alt={t(`items.${p.key}.alt`)}
                    width={1458}
                    height={812}
                    sizes="(max-width: 1100px) 100vw, 580px"
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <h3 className={styles.name}>{t(`items.${p.key}.name`)}</h3>
                  <p className={styles.description}>{t(`items.${p.key}.description`)}</p>
                  <ul className={styles.points}>
                    {(t.raw(`items.${p.key}.points`) as string[]).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <ul className={styles.tags}>
                    {p.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className={styles.links}>
                    <ExternalLink href={p.live} variant="primary" hint={t("opensNewTab")}>
                      {t("live")} ↗
                    </ExternalLink>
                    <ExternalLink href={p.code} hint={t("opensNewTab")}>
                      {t("code")}
                    </ExternalLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.group}>
          <GroupLabel>{t("teamGroup")}</GroupLabel>
          {teamProjects.map((p) => {
            const featured = p.key === "harmoniq";
            return (
              <article
                key={p.key}
                className={`${styles.card} ${styles.wide} ${featured ? "" : styles.compact}`}
              >
                <div className={styles.shot}>
                  <Image
                    src={p.image}
                    alt={t(`items.${p.key}.alt`)}
                    width={1458}
                    height={812}
                    sizes={featured ? "(max-width: 1100px) 100vw, 640px" : "(max-width: 1100px) 100vw, 400px"}
                    className={styles.image}
                  />
                </div>
                <div className={styles.body}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.name}>{t(`items.${p.key}.name`)}</h3>
                    <span className={styles.lead}>{t("ledTeam", { count: p.teamSize })}</span>
                  </div>
                  <p className={styles.description}>{t(`items.${p.key}.description`)}</p>
                  {featured && (
                    <dl className={styles.split}>
                      <div>
                        <dt>{t("frontend")}</dt>
                        <dd>{t(`items.${p.key}.frontendStack`)}</dd>
                      </div>
                      <div>
                        <dt>{t("backend")}</dt>
                        <dd>{t(`items.${p.key}.backendStack`)}</dd>
                      </div>
                    </dl>
                  )}
                  <div className={styles.links}>
                    <ExternalLink
                      href={p.live}
                      variant={featured ? "primary" : "secondary"}
                      hint={t("opensNewTab")}
                    >
                      {t("live")} ↗
                    </ExternalLink>
                    {p.repos.map((repo) => (
                      <ExternalLink key={repo.href} href={repo.href} hint={t("opensNewTab")}>
                        {t(repo.labelKey)}
                      </ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className={styles.groupLabel}>
      <span>{children}</span>
      <span aria-hidden="true" className={styles.rule} />
    </p>
  );
}
