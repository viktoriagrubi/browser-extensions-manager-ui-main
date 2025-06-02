import React from "react";
import styles from "./ToggleSwitch.module.css";

export default function ToggleSwitch({ isActive, onToggle }) {
  return (
    <div
      className={`${styles.switch} ${isActive ? styles.active : ""}`}
      onClick={onToggle}
      role="button"
      aria-pressed={isActive}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.circle}></div>
    </div>
  );
}
