import { BookOpen, Home, LayoutGrid, Menu, ScrollText, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Giới thiệu", to: "/", icon: Home },
  { label: "Bài tập", to: "/projects", icon: LayoutGrid },
  { label: "Tổng kết", to: "/reflection", icon: ScrollText },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Điều hướng chính">
        <NavLink to="/" className="brand" aria-label="Về trang giới thiệu">
          <span className="brand-mark">
            <BookOpen size={20} strokeWidth={1.8} />
          </span>
          <span>
            <strong>Digital Portfolio</strong>
            <small>CNS & AI</small>
          </span>
        </NavLink>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
