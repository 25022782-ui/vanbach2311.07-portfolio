import {
  BookOpen,
  Film,
  Home,
  LayoutGrid,
  Mail,
  Menu,
  ScrollText,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Trang đầu", href: "#home", id: "home", icon: Home },
  { label: "Giới thiệu", href: "#about", id: "about", icon: UserRound },
  { label: "Hành trình học tập", href: "#projects", id: "projects", icon: LayoutGrid },
  { label: "Video giữa kỳ", href: "#midterm-video", id: "midterm-video", icon: Film },
  { label: "Tổng kết", href: "#summary", id: "summary", icon: ScrollText },
  { label: "Liên hệ", href: "#contact", id: "contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-34% 0px -52% 0px",
        threshold: [0.08, 0.18, 0.32, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Điều hướng chính">
        <a className="brand" href="#home" aria-label="Về trang đầu" onClick={() => setIsOpen(false)}>
          <span className="brand-mark">
            <BookOpen size={20} strokeWidth={1.8} />
          </span>
          <span>
            <strong>Portfolio CNS</strong>
            <small>CNS & AI</small>
          </span>
        </a>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${activeId === item.id ? "is-active" : ""}`}
                onClick={() => {
                  setActiveId(item.id);
                  setIsOpen(false);
                }}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
