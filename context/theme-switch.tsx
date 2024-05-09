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
  toggleTheme: (newTheme: Theme) => void;
};

const initialState: ThemeSwitchContextType = {
  theme: "light", // Default to 'light' or could be set based on 'prefers-color-scheme'
  toggleTheme: () => {},
};

const ThemeSwitchContext = createContext<ThemeSwitchContextType>(initialState);

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("bridge-theme", newTheme);
    }
  };

  useEffect(() => {
    const storedTheme =
      (localStorage.getItem("bridge-theme") as Theme) ||
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(storedTheme);
  }, []);

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
