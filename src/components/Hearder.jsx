import React from "react";
import styles from "./Header.module.css";

export default function Header({ theme, filter, onFilterChange }) {
  const filters = ["All", "Active", "Inactive"];

  return (
    <header className={`${styles.header} ${styles[theme]}`}>
      <h1 className={styles.title}>Extensions List</h1>
      <div className={styles.buttons}>
        {filters.map((f) => (
          <button
            key={f}
            className={`${styles.button} ${filter === f ? styles.active : ""}`}
            onClick={() => onFilterChange(f)}
          >
            {f}
          </button>
        ))}
      </div>
    </header>
  );
}
