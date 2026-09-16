"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) {
    return (
      <button
        aria-label="Alternar tema"
        style={{
          width: "36px",
          height: "36px",
          background: "var(--background-lighter)",
          border: "2px solid var(--border)",
          boxShadow: "2px 2px 0px 0px var(--border)",
          visibility: "hidden",
        }}
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Alternar para Modo Escuro" : "Alternar para Modo Dia"}
      title={theme === "light" ? "Modo Escuro" : "Modo Dia"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        background: "var(--background-lighter)",
        border: "2px solid var(--border)",
        color: "var(--foreground)",
        cursor: "pointer",
        boxShadow: "2px 2px 0px 0px var(--border)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        flexShrink: 0,
      }}
    >
      {theme === "light" ? <Moon size={18} strokeWidth={2.5} /> : <Sun size={18} strokeWidth={2.5} />}
    </button>
  );
}

