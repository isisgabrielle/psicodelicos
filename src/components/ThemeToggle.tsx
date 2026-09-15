"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "transparent",
        border: "1px solid var(--border)",
        color: "var(--foreground)",
        padding: "0.5rem 1rem",
        borderRadius: "var(--radius-full)",
        cursor: "pointer",
        fontWeight: "bold",
        marginLeft: "1rem"
      }}
    >
      {theme === "light" ? "Modo Escuro" : "Modo Dia"}
    </button>
  );
}
