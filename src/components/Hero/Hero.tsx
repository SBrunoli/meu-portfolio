import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* container */}
      <div className={`container ${styles.hero__inner}`}>
        {/* terminal */}
        <div className={`glass__panel ${styles.hero__terminal} `}>
          {/* terminal header */}
          <div className={styles.hero__terminal__header}>
            <span className={styles.hero__terminal__dot__marked}></span>
            <span className={styles.hero__terminal__dot}></span>
            <span className={styles.hero__terminal__dot}></span>
            <span>SBrunoli/meu-portfolio</span>
          </div>
          {/* terminal body*/}
          <div className={styles.hero__terminal__body}>
            <p>
              <span className={styles.hero__terminal__prompt}>$</span>
              whoami
            </p>

            <p className={styles.hero__terminal__output}>
              Bruno de Oliveira -{" "}
              <span className={styles.hero__terminal__cursor__line}>
                estudante de ADS
              </span>
              <span className={styles.hero__terminal__cursor}>▍</span>
            </p>
          </div>
        </div>

        {/* Hero title */}
        <h1 className={styles.hero__title}>
          Eu construo interfaces
          <br />
          que{" "}
          <span className={styles.accent__gradient}>funcionam de verdade.</span>
        </h1>
        {/* Hero description */}
        <p className={`text-muted ${styles.hero__description}`}>
          Curso Análise e Desenvolvimento de Sistemas e dedico boa parte do meu
          tempo estudando React, TypeScript e JavaScript. Esse portfólio é um
          projeto real, construído do zero por mim
        </p>

        <div className={styles.hero__actions}>
          <a href="#projects" className="btn btn-primary">
            Ver projetos ↓
          </a>
          <a href="#contact" className="btn btn-ghost">
            falar comigo
          </a>
          <div className={styles.hero__socials}>
            <a
              href="https://github.com/SBrunoli"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="www.linkedin.com/in/bruno-de-oliveira-profissional"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:br.oli.ribeiro@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              br.oli.ribeiro@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
