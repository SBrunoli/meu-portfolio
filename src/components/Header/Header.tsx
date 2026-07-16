import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useTheme } from "../../contexts/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`container ${styles.header__inner}`}>
        {/* logo */}
        <a className={styles.header__logo} href="#top">
          <span className={styles.header__logoMark}>&lt;/&gt;</span>
          Bruno de Oliveira
        </a>

        {/* Navbar */}
        <nav className={styles.header__nav}>
          <a className={styles.header__link} href="#about">
            sobre
          </a>
          <a className={styles.header__link} href="#skills">
            skills
          </a>
          <a className={styles.header__link} href="#projects">
            projetos
          </a>
          <a className={styles.header__link} href="#training">
            formação
          </a>
          <a className={styles.header__link} href="#contact">
            contato
          </a>
        </nav>

        {/* Theme toggle */}
        <button className={styles.header__themeBtn} onClick={toggleTheme}>
          <i
            className={
              theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon"
            }
          ></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
