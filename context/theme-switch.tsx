import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Theme = "light" | "dark";
type ThemeSwitchContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const storedTheme =
  (localStorage.getItem("bridge-theme") as Theme) ||
  (window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

const initialState: ThemeSwitchContextType = {
  theme: storedTheme,
  toggleTheme: () => {},
};

const ThemeSwitchContext = createContext<ThemeSwitchContextType>(initialState);

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("bridge-theme", newTheme);
    }
  };

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
