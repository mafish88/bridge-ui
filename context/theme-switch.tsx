"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Theme = "light" | "dark";
type ThemeSwitchContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeSwitchContext = createContext<ThemeSwitchContextType | undefined>(
  undefined
);

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeSwitchContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};

export const useThemeSwitch = () => {
  const context = useContext(ThemeSwitchContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
