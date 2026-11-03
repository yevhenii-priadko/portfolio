import styles from "./SectionHeading.module.css";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
};

/** "01 · Projects" label, big heading and an optional lead on the right. Shared by all sections. */
export default function SectionHeading({ id, eyebrow, title, lead }: Props) {
  return (
    <div className={styles.heading}>
      <div className={styles.titles}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id={id} className={styles.title}>
          {title}
        </h2>
      </div>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
