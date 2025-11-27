import styles from "./aboutColumns.module.css";

export default function AboutColumns() {
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <h2>Biographie</h2>
            <p>
                Pino Onali a commencé à peindre tardivement, mais intensément. 
                Là où d’autres remplissent des carnets, lui a directement investi les murs : 
                grandes toiles, formats généreux, couches successives de matière. 
            </p>
            <p>
                En quelques années, son atelier s’est transformé en cosmos coloré. 
                Chaque toile est un fragment de paysage intérieur : des lunes, des 
                astres, des constellations qui semblent flotter dans un espace sans 
                gravité, entre abstraction et réminiscences figuratives.
            </p>
            </div>

            <aside className={styles.right}>
            <h3>Repères</h3>
            <ul>
                <li>
                <span className={styles.label}>Basé à</span>
                <span className={styles.value}>Bruxelles, Belgique</span>
                </li>
                <li>
                <span className={styles.label}>Thèmes récurrents</span>
                <span className={styles.value}>Lunes, constellations, matières cosmiques</span>
                </li>
                <li>
                <span className={styles.label}>Techniques</span>
                <span className={styles.value}>Acrylique, huile, techniques mixtes</span>
                </li>
                <li>
                <span className={styles.label}>Formats</span>
                <span className={styles.value}>Toiles de grand format, séries modulaires</span>
                </li>
            </ul>
            </aside>
        </div>
        </section>
    );
};
