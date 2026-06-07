import { useCallback, useEffect, useState } from "react";

export type PortfolioTheme = "light" | "dark";

const storageKey = "portfolio-theme";

const isTheme = (value: string | null): value is PortfolioTheme => value === "light" || value === "dark";

const readStoredTheme = (): PortfolioTheme | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    return isTheme(storedTheme) ? storedTheme : null;
  } catch {
    return null;
  }
};

const applyTheme = (theme: PortfolioTheme) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
};

const persistTheme = (theme: PortfolioTheme) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(storageKey, theme);
  } catch {
    // localStorage can be unavailable in strict privacy contexts.
  }
};

export function useTheme() {
  const [theme, setTheme] = useState<PortfolioTheme>(() => readStoredTheme() ?? "dark");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      persistTheme(nextTheme);
      return nextTheme;
    });
  }, []);

  return {
    isDark: theme === "dark",
    theme,
    toggleTheme,
  };
}
