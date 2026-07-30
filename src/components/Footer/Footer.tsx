import styles from "./Footer.module.css"


function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footer__inner}`}>
                <p className={styles.footer__copy}>© 2026 Bruno de Oliveira - feito com React, TypeScript & muito café</p>

                <a href="#top" className={styles.footer__link}>voltar ao topo <i className="fa-solid fa-arrow-up"></i></a>
            </div>
        </footer>
    )
}

export default Footer