"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";
type ThemeSwitchContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const initialState: ThemeSwitchContextType = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeSwitchContext = createContext<ThemeSwitchContextType>(initialState);

export default function ThemeSwitchProvider({
  children,
}: {
  children: ReactNode;
}) {
  let defaultTheme: Theme = "light";

  if (typeof window !== "undefined") {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      defaultTheme = "dark";
    }
    let storedTheme = localStorage.getItem("bridge-theme");
    if (storedTheme) {
      defaultTheme = storedTheme as Theme;
    }
  }

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("bridge-theme", newTheme);
    }
  };

  return (
    <ThemeSwitchContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeSwitchContext.Provider>
  );
}

export const useThemeSwitch = () => {
  const context = useContext(ThemeSwitchContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
