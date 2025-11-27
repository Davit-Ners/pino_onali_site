import styles from "./aboutPanels.module.css";

export default function AboutPanels() {
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <div className={`${styles.card} ${styles.cardOne}`}>
            <h3>Démarche artistique</h3>
            <p>
                La peinture de Pino ne cherche pas à dominer l’espace, mais à le
                faire respirer. Il construit ses toiles par couches successives :
                transparences, recouvrements, gestes spontanés, accidents assumés.
            </p>
            </div>

            <div className={`${styles.card} ${styles.cardTwo}`}>
            <h3>Univers visuel</h3>
            <p>
                Lunes, halos, éclats et fragments de lumière : ses toiles évoquent
                des cartes du ciel imaginaires, des paysages intérieurs traversés
                par des forces invisibles.
            </p>
            </div>

            <div className={`${styles.card} ${styles.cardThree}`}>
            <h3>Techniques & matières</h3>
            <p>
                Acrylique, huile, encres, parfois sable ou pigments bruts… Pino
                explore comment chaque matière réagit, se mélange ou résiste à la
                surface de la toile.
            </p>
            </div>
        </div>
        </section>
    );
};
