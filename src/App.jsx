import React, { useState, useEffect } from "react";
import initialData from "./data/data.json";
import styles from "./App.module.css";
import TopBar from "./components/TopBar";
import Header from "./components/Hearder.jsx";
import ExtensionCard from "./components/ExtensionCard";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  const [extensions, setExtensions] = useState(() => {
    const stored = localStorage.getItem("extensions");
    return stored ? JSON.parse(stored) : initialData;
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("extensions", JSON.stringify(extensions));
  }, [extensions]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const toggleActive = (name) => {
    setExtensions((exts) =>
      exts.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const removeExtension = (name) => {
    setExtensions((exts) => exts.filter((ext) => ext.name !== name));
  };

  const filtered = extensions.filter((ext) => {
    if (filter === "Active") return ext.isActive;
    if (filter === "Inactive") return !ext.isActive;
    return true;
  });

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <TopBar theme={theme} onToggleTheme={toggleTheme} />
      <Header theme={theme} filter={filter} onFilterChange={setFilter} />
      <main className={styles.main}>
        <div className={styles.grid}>
          {filtered.map((ext) => (
            <ExtensionCard
              key={ext.name}
              extension={ext}
              theme={theme}
              onToggle={() => toggleActive(ext.name)}
              onRemove={() => removeExtension(ext.name)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
