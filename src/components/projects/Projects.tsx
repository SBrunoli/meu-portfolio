import styles from "./Projects.module.css";

type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  image?: string;
};

const infosProjects: Project[] = [
  {
    title: "Reviva",
    description:
      "Plataforma pra adotar projetos abandonados de outras pessoas — continuando de onde a última pessoa parou. Tem busca, filtro por categoria, estatísticas calculadas em tempo real e uma barra de progresso customizada mostrando exatamente onde cada projeto travou.",
    stack: ["React", "TypeScript", "Vite", "CSS Modules"],
    repoUrl: "https://github.com/SBrunoli/Projeto-Inacabados",
    image: "/projeto_reviva.png",
  },
  {
    title: "FocusFlow",
    description:
      "Landing page de um app de produtividade com timer Pomodoro, construída em React com foco em componentização.",
    stack: ["React", "TypeScript", "CSS"],
    repoUrl: "https://github.com/SBrunoli/FocusFlow-App",
    image: "/focus_flow.png",
  },
  {
    title: "Consulta de CEP",
    description:
      "Aplicação web pra consulta de CEP, buscando endereço completo em tempo real através de requisição a uma API pública.",
    stack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/SBrunoli/Consulta-de-CEP",
    image: "/consulta_de_cep.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <span className="eyebrow">Projetos</span>
        <h2 className="section__title">
          O que eu já <span className="accent">construí</span>
        </h2>

        <div className={styles.project__list}>
          {infosProjects.map((item) => {
            return (
              <article
                key={item.title}
                className={`glass__panel ${styles.project__card}`}
              >
                <div className={styles.project__image}>
                  <img
                    className={styles.project__img}
                    src={item.image}
                    alt={`Screenshot do projeto ${item.title}`}
                  />
                </div>

                <div className={styles.project__infos}>
                  <h3 className={styles.project__title}>{item.title}</h3>
                  <p className={`text__muted ${styles.project__description}`}>
                    {item.description}
                  </p>

                  <div className={styles.project__stack}>
                    {item.stack.map((tech) => (
                      <span key={tech} className={styles.stack__tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn__ghost ${styles.btn__project}`}
                  >
                    <i
                      className="fa-solid fa-arrow-up-long fa-rotate-by"
                      style={
                        { "--fa-rotate-angle": "45deg" } as React.CSSProperties
                      }
                    ></i>
                    Ver Repositório
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
