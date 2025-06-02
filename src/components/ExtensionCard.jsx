import styles from "./ExtensionCard.module.css";
import ToggleSwitch from "./ToggleSwitch";

export default function ExtensionCard({
  extension,
  onToggle,
  onRemove,
  theme,
}) {
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.info}>
        <img
          src={extension.logo}
          alt={`${extension.name} logo`}
          className={styles.logo}
        />
        <div>
          <h3 className={styles.name}>{extension.name}</h3>
          <p className={styles.description}>{extension.description}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          className={styles.remove}
          onClick={onRemove}
          title="Remove extension"
        >
          Remove
        </button>
        <ToggleSwitch isActive={extension.isActive} onToggle={onToggle} />
      </div>
    </div>
  );
}
