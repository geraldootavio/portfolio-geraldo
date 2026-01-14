import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // aplica o tema no body
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // carrega tema salvo
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  // função de scroll centralizado
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrollPosition = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      setOpen(false); // fecha o menu após clicar
    }
  };

  return (
    <>
      <header className="header">
        <span className="brand">GERALDO OTÁVIO</span>

        <div className="header-actions">
          <FiMenu className="menu-icon" onClick={() => setOpen(true)} />
        </div>
      </header>

      {/* OVERLAY */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

      {/* MENU LATERAL */}
      <aside className={`side-menu ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <FiX />
        </button>

        <nav>
          <button onClick={() => scrollToSection("hero")}>Início</button>
          <button onClick={() => scrollToSection("about")}>Sobre</button>
          <button onClick={() => scrollToSection("projects")}>Projetos</button>
          <button onClick={() => scrollToSection("contact")}>Contato</button>
        </nav>
      </aside>
    </>
  );
}
