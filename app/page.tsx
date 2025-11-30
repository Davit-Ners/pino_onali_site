import HomeVideoSection from "./components/home/videoSection";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.overlay} />
      <section className={styles.hero}>

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
            <h3>LA FACE CACHÉE DE L&apos;ARTISTE</h3>
            <p>
              Personne ne se doutait de l’artiste qui sommellait en lui, mais
              depuis 4 ans Pino Onali crée sans compter. Les pigments
              jaillissent et débordent maintenant de ses toiles aux tailles de
              plus en plus impressionnantes. Le résultat est surprenant et les
              murs de son atelier ne suffisent plus à afficher cette rage de
              peinde. Pino vous invite à ce voyage et à découvrirl’autre coté de
              ce miroir à facettes où se reflètent les couleurs de la vie. Une
              vie foisonnante qui nous entraîne des émotions verde, rosso à un
              petit clin d’oeil à la lune.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION VIDÉO */}
      <HomeVideoSection />
    </>
  );
}
