import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>Pino Onali</div>

            <nav className={styles.nav}>
            <Link href="/">Accueil</Link>
            <Link href="/galerie">Galerie</Link>
            <Link href="/about">Á Propos</Link>
            <Link href="/contact">Contact</Link>
            </nav>
        </div>
        </header>
    );
};
