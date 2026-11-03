import styles from "./Projects.module.css";

type Props = {
  href: string;
  /** Screen-reader note that the link opens a new tab. */
  hint: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function ExternalLink({ href, hint, variant = "secondary", children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "primary" ? styles.btnPrimary : styles.btnSecondary}
    >
      {children}
      <span className="visually-hidden"> {hint}</span>
    </a>
  );
}
