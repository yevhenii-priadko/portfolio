import { useTranslations } from "next-intl";
import Waveform from "@/components/Waveform/Waveform";
import styles from "./Hero.module.css";

const facts = ["clients", "team", "stack"] as const;

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <p className={styles.badge}>
          <span aria-hidden="true" className={styles.dot} />
          {t("badge")}
        </p>
        <h1 id="hero-title" className={styles.title}>
          {t("titleLine1")}
          <br />
          {t("titleLine2")}
        </h1>
        <p className={styles.lead}>{t("lead")}</p>
        <div className={styles.ctas}>
          <a href="#projects" className={styles.primary}>
            {t("ctaProjects")}
          </a>
          <a href="#contact" className={styles.secondary}>
            {t("ctaContact")}
          </a>
        </div>
      </div>

      <Waveform label={t("waveLabel")} className={styles.wave} />

      <div className={`container ${styles.captions}`} aria-hidden="true">
        <span>◖ {t("signal")}</span>
        <span>{t("build")} ◗</span>
      </div>

      <dl className={`container ${styles.facts}`}>
        {facts.map((key) => (
          <div key={key} className={styles.fact}>
            <dt className={styles.factValue}>{t(`facts.${key}Value`)}</dt>
            <dd className={styles.factLabel}>{t(`facts.${key}Label`)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
