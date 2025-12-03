import styles from "./aboutColumns.module.css";

export default function AboutColumns() {
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <div className={styles.left}>
            <h2>Biographie</h2>
            <p>
                Pino décide de se mettre à la peinture par obligation de trouver exactement le tableau idéal pour son intérieur en 2010, force est de croire que rien n’allait avec les murs « chocolat «  qui s’étendaient sur tout l’appartement.
                De fils en aiguille, il s’est découvert un talent qu’il n’a plus cessé de deréinventé !
            </p>
            <p>
                D’expos en expos, de bars d’hôtels en bars d’hôtels, de galeries en galeries, il n’a cessé de produire de nouvelles tonalités due au mélange infini de couleurs, il avoue d’ailleurs que même si légèrement daltonien, voir complètement, cet handicap est une force énorme qui le pousse à recrée des tonalités exceptionnelles que beaucoup de clients se sont déjà approprié au fils des ans.
                Sa devise est la couleur et la couleur, son domaine de prédilection.
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
                <span className={styles.value}>Acrylique, polyuréthane, huile, techniques mixtes</span>
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
