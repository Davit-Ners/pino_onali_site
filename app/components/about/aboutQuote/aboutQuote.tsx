import styles from "./aboutQuote.module.css";

export default function AboutQuote({ text }: { text: string }) {
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <p>{text}</p>
        </div>
        </section>
    );
};
