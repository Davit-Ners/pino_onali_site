import styles from "./home.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        {/* Bloc gauche */}
        <div className={styles.left}>
          <h1>Pino Onali</h1>
          <h2>Peintre - Artiste</h2>

          <a href="/galerie" className={styles.btn}>
            VOIR LES OEUVRES
          </a>
        </div>

        {/* Bloc droite */}
        <div className={styles.right}>
          <h3>LA FACE CACH���%E DE L&apos;ARTISTE</h3>
          <p>
            Personne ne se doutait de l���?Tartiste qui sommeillait en lui, mais
            depuis 4 ans Pino Onali cr��e sans compter. Les pigments jaillissent
            et d��bordent maintenant de ses toiles aux tailles de plus en plus
            impressionnantes. Le r��sultat est surprenant et les murs de son
            atelier ne suffisent plus ������ afficher cette rage de peindre.
            <br />
            <br />
            Pino vous invite ������ ce voyage et ������ d��couvrir l���?Tautre c������t�� de ce
            miroir ������ facettes o������ se refl������tent les couleurs de la vie. Une vie
            foisonnante qui nous entra��ne des ��motions verdoyantes, rosso ������ un
            petit clin d���?T���"il ������ la lune.
          </p>
        </div>
      </div>
    </section>
  );
}
