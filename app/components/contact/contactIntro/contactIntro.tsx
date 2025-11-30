import styles from "./contactIntro.module.css";

export default function ContactIntro() {
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <h1>Contact</h1>
            <p>
            Pour toute question, intérêt pour une œuvre ou projet d’exposition,
            vous pouvez contacter directement Pino Onali ou utiliser le formulaire.
            </p>
        </div>
        </section>
    );
};
