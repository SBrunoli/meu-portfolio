import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
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
        <button className={styles.header__themeBtn}>
          <i className="fa-solid fa-sun"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
