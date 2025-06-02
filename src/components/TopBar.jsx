import React from "react";
import styles from "./TopBar.module.css";
import logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import moonIcon from "../assets/images/icon-moon.svg";

export default function TopBar({ theme, onToggleTheme }) {
  return (
    <div className={`${styles.topbar} ${styles[theme]}`}>
      <div className={styles.left}>
        <img src={logo} alt="Logo" className={styles.icon} />
      </div>
      <button className={styles.toggle} onClick={onToggleTheme}>
        <img
          src={theme === "dark" ? sunIcon : moonIcon}
          alt="Toggle theme"
          className={styles.icon2}
        />
      </button>
    </div>
  );
}
