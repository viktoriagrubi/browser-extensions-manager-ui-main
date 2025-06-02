import React, { useState } from "react";
import initialData from "./data/data.json";
import styles from "./App.module.css";
import TopBar from "./components/TopBar";
import Header from "./components/Hearder.jsx";
import ExtensionCard from "./components/ExtensionCard";

function App() {
  const [extensions, setExtensions] = useState(initialData);
  const [filter, setFilter] = useState("All");
  const [theme, setTheme] = useState("dark");

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

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
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
