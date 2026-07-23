import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className="section">
      {/* container */}
      <div className="container">
        {/* eyebrow */}
        <span className="eyebrow">Sobre mim</span>
        {/* About Inner */}
        <div className={styles.about__inner}>
          {/* About facts */}
          <div>
            <h2 className="section__title">
              Sempre quis saber <span className="accent">como funcionava</span>.
            </h2>
            <p className={`text__muted ${styles.about__text}`}>
              Tecnologia sempre fez parte da minha vida. Desde cedo tive acesso
              a computador e nunca consegui só usar as coisas sem entender como
              funcionavam por dentro, e isso virou o motor de tudo. Há uns 2
              anos comecei a programar de verdade, focado em front-end, e é isso
              que ocupa boa parte do meu tempo hoje. Curso ADS e estou
              construindo minha base em React e TypeScript. Não sei tudo, mas
              gosto exatamente dessa parte: sempre vai ter algo novo pra
              aprender.
            </p>
          </div>
          {/* About Panel */}
          <div className={`glass__panel ${styles.about__panel}`}>
            {/* Pannel Item Degree */}
            <div className={styles.panel__item}>
              <span className={styles.panel__item__label}>Curso</span>
              <span>Análise e Desenvolvimento de Sistemas</span>
            </div>
            {/* Pannel Item Current Focus */}
            <div className={styles.panel__item}>
              <span className={styles.panel__item__label}>Foco atual</span>
              <span>React + TypeScript</span>
            </div>
            {/* Pannel Item Looking For*/}
            <div className={styles.panel__item}>
              <span className={styles.panel__item__label}>Buscando</span>
              <span>Vaga de estágio em dev front-end</span>
            </div>
            {/* Pannel Item Version Control*/}
            <div className={styles.panel__item}>
              <span className={styles.panel__item__label}>Versionamento</span>
              <span>Git & GitHub no dia a dia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
