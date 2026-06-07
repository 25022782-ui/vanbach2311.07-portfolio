import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const nextThemeLabel = isDark ? "Chế độ sáng" : "Chế độ tối";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="Chuyển chế độ sáng/tối"
      aria-pressed={isDark}
      title={nextThemeLabel}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-orb" aria-hidden="true">
        {isDark ? <Sun size={18} strokeWidth={1.9} /> : <Moon size={18} strokeWidth={1.9} />}
      </span>
      <span className="theme-toggle-text">{isDark ? "Sáng" : "Tối"}</span>
    </button>
  );
}
