import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzeyvjy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <span className="eyebrow">Contato</span>
        {/* contact grid */}
        <div className={styles.contact}>
          {/* contact intro */}
          <div>
            <h2 className="section__title">
              Vamos <span className="accent">conversar</span>?
            </h2>

            <p className={`text__muted ${styles.contact__description}`}>
              Estou em busca de estágio na área de desenvolvimento front-end. Se
              você tem uma oportunidade — ou só quer trocar uma ideia sobre
              código — me chama.
            </p>

            {/* contact links */}
            <div className={styles.contact__links}>
              <a
                className={`text__muted ${styles.contact__link}`}
                href="mailto:br.oli.ribeiro@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-envelope"></i>
                br.oli.ribeiro@gmail.com
              </a>
              <a
                className={`text__muted ${styles.contact__link}`}
                href="https://github.com/SBrunoli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github"></i>
                github.com/SBrunoli
              </a>
              <a
                className={`text__muted ${styles.contact__link}`}
                href="https://www.linkedin.com/in/bruno-de-oliveira-profissional"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in"></i>
                linkedin.com/in/bruno-de-oliveira-profissional
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`glass__panel ${styles.contact__form}`}
          >
            <label htmlFor="name" className={styles.contact__label}>
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Como posso te chamar"
              className={styles.contact__input}
            />

            <label htmlFor="email" className={styles.contact__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="seu@email.com"
              className={styles.contact__input}
            />

            <label htmlFor="message" className={styles.contact__label}>
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Conte me um pouco sobre o motivo do contato"
              rows={4}
              className={styles.contact__input}
            ></textarea>

            <button
              className="btn btn__primary"
              type="submit"
              disabled={status === "sending"}
              aria-live="polite"
            >
              {status === "sending" && "Enviando..."}
              {status === "sent" && "Mensagem enviada com sucesso!"}
              {(status === "idle" || status === "error") && (
                <>Enviar mensagem &rarr;</>
              )}
            </button>
            {status === "error" && (
              <p className={styles.contact__errorMsg} role="alert">
                Algo deu errado. Tenta de novo, ou me chama direto por e-mail.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
