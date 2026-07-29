import { useState } from "react";
import styles from "./Skills.module.css";

type PanelItem = {
  id: string;
  label: string;
  x: number;
  y: number;
  category: "core" | "tool";
};

const panelItems: PanelItem[] = [
  { id: "react", label: "React", x: 50, y: 55, category: "core" },
  { id: "typescript", label: "TypeScript", x: 30, y: 30, category: "core" },
  { id: "javascript", label: "JavaScript", x: 20, y: 65, category: "core" },
  { id: "html", label: "HTML", x: 65, y: 25, category: "core" },
  { id: "css", label: "CSS", x: 75, y: 50, category: "core" },
  { id: "git", label: "Git", x: 70, y: 80, category: "tool" },
  { id: "vite", label: "Vite", x: 40, y: 85, category: "tool" },
  { id: "figma", label: "Figma", x: 15, y: 20, category: "tool" },
];

const panelItemsById = new Map(
  panelItems.map((item) => [item.id, item] as const),
);

const connections = [
  ["react", "javascript"],
  ["react", "typescript"],
  ["javascript", "typescript"],
  ["react", "html"],
  ["react", "css"],
  ["html", "css"],
  ["react", "vite"],
  ["react", "git"],
  ["javascript", "git"],
  ["figma", "html"],
  ["figma", "css"],
];

function Skills() {
  const [active, setActive] = useState<string | null>(null);

  function getConnectedIds(id: typeof active) {
    if (id === null) {
      return new Set();
    } else {
      const related = new Set([id]);

      connections.forEach((pair) => {
        if (pair[0] === id) {
          related.add(pair[1]);
        }
        if (pair[1] === id) {
          related.add(pair[0]);
        }
      });
      return related;
    }
  }

  const highlighted = getConnectedIds(active);

  return (
    <section id="skills" className="section">
      {/* container */}
      <div className="container">
        {/* Eyebrow */}
        <span className="eyebrow">Stack</span>

        {/* Skill */}
        <div>
          <h2 className="section__title">
            Como as peças <span className="accent">se conectam</span>
          </h2>
          <p className={`text__muted ${styles.skills__intro}`}>
            Passe o mouse sobre um nó para ver como as tecnologias se relacionam
            — em âmbar, a base do dia a dia; em azul-esverdeado, as ferramentas
            de apoio.
          </p>

          {/* Skill Panel */}
          <div className={`glass__panel ${styles.skills__panel}`}>
            {/* skills Panel Lines */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className={styles.skills__svg}
            >
              {connections.map((pair, index) => {
                const from = panelItemsById.get(pair[0]);
                const to = panelItemsById.get(pair[1]);

                if (!from || !to) return null;

                return (
                  <line
                    key={index}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    className={`${styles.skills__line} ${highlighted.has(pair[0]) && highlighted.has(pair[1]) ? styles.skills__lineOn : ""}`}
                  />
                );
              })}
            </svg>
            {/* Skills Panel Dots */}
            {panelItems.map((item) => {
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Tecnologia: ${item.label}`}
                  className={`${styles.skills__node} ${highlighted.has(item.id) ? styles.skills__nodeOn : ""} ${active !== null && !highlighted.has(item.id) ? styles.skills__nodeFaded : ""}`}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  onFocus={() => setActive(item.id)}
                  onBlur={() => setActive(null)}
                  onMouseEnter={() => setActive(item.id)}
                  onMouseLeave={() => setActive(null)}
                >
                  <span
                    className={`${styles.skills__dot} ${item.category === "tool" ? styles.skills__dotTool : ""}`}
                  ></span>
                  <span className={styles.skills__label}>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
