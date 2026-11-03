import { useTranslations } from "next-intl";
import { contacts } from "@/data/contacts";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Contact.module.css";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeading id="contact-title" eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} />

        <ul className={styles.list}>
          {contacts.map((c) => (
            <li key={c.key}>
              <a
                href={c.href}
                className={styles.row}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className={styles.channel}>{t(`channels.${c.key}`)}</span>
                <span className={styles.handle}>{c.handle}</span>
                <span aria-hidden="true" className={styles.arrow}>
                  ↗
                </span>
                {c.external && <span className="visually-hidden"> {t("opensNewTab")}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
