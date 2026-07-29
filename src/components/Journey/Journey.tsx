import styles from "./Journey.module.css";

type JourneyInfos = {
  timeline: string;
  date: string;
  title: string;
  description: string;
};

const journeyInfos: JourneyInfos[] = [
  {
    timeline: "01",
    date: "2024 - atual",
    title: "Análise e Desenvolvimento de Sistemas",
    description:
      "Curso na Universidade Cruzeiro do Sul, na modalidade EAD, o que me dá liberdade pra estudar no meu ritmo e ainda sobrar tempo pra colocar a mão na massa em projetos por conta própria.",
  },
  {
    timeline: "02",
    date: "2025",
    title: "Imersão em React + TypeScript",
    description:
      "Passei a estudar React e TypeScript por conta própria, testando na prática em projetos reais — foi quando comecei a entender componentização, tipagem e como estruturar interfaces de verdade.",
  },
  {
    timeline: "03",
    date: "2026",
    title: "Buscando primeira oportunidade",
    description:
      "Com o curso rolando e uma base cada vez mais sólida em front-end, chegou a hora de procurar onde aplicar tudo isso na prática.",
  },
];

function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <span className="eyebrow">Trajetória</span>

        <h2 className="section__title">
          Minha <span className="accent">formação</span>
        </h2>

        {/* Journey */}
        <div className={styles.journey__container}>
          {journeyInfos.map((item) => {
            return (
              <div key={item.timeline} className={styles.journey__box}>
                {/* timeline markup */}
                <div className={styles.journey__markupCol}>
                  <span className={styles.journey__marker} aria-hidden="true">
                    {item.timeline}
                  </span>
                  <span className={styles.journey__markupLine}></span>
                </div>
                {/* Journey Infos */}
                <div className={`glass__panel ${styles.journey__infos}`}>
                  <span className={styles.journey__date}>{item.date}</span>
                  <h3 className={styles.journey__title}>{item.title}</h3>
                  <p className={styles.journey__description}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Journey;
