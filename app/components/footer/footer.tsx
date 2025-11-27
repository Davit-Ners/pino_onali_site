import styles from "./footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.left}>
            <p>© 2025 Pino Onali. Tous droits réservés.</p>
            <p>Toutes les œuvres et images présentes sur ce site sont la propriété de l’artiste.</p>
            </div>

            <div className={styles.right}>
            <Link href="https://instagram.com" target="_blank">
                <FaInstagram />
            </Link>
            <Link href="https://facebook.com" target="_blank">
                <FaFacebook />
            </Link>
            </div>
        </div>
        </footer>
    );
};
