import { useEffect, useState } from "react";

export default function Navbar({ sections }) {
  const [darkMode, setDarkMode] = useState(false);

  // Detectar tema del sistema al cargar la página
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark) {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDark = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <button
          key={section.label}
          onClick={() =>
            section.ref.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {section.label}
        </button>
      ))}

      <button onClick={toggleDark}>
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
