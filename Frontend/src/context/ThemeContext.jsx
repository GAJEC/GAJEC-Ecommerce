import React, { createContext, useContext, useEffect, useState } from "react";

const DEFAULT_ACCENT = "#ef5a4d";
const ThemeContext = createContext(null);
const read = (key, fallback) => {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => read("mira-mode", "light"));
  const [accent, setAccent] = useState(() => read("mira-accent", DEFAULT_ACCENT));

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.setProperty("--danger", accent);
    try {
      localStorage.setItem("mira-mode", mode);
      localStorage.setItem("mira-accent", accent);
    } catch {
    }
  }, [mode, accent]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
};
