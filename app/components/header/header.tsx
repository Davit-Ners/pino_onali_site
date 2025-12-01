import Link from "next/link";
import styles from "./header.module.css";
import { cookies } from "next/headers";
import LanguageToggle from "../languageToggle/languageToggle";

export default async function Header() {
    const isAdmin = (await cookies()).get("pino_admin")?.value === '1';

    return (
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}><Link href="/">Pino Onali</Link></div>

            <nav className={styles.nav}>
            <Link href="/">Accueil</Link>
            <Link href="/galerie">Galerie</Link>
            <Link href="/about">Á Propos</Link>
            <Link href="/contact">Contact</Link>
            <LanguageToggle />
            {isAdmin && <Link className={styles.adminBadge} href="/admin">Admin</Link>}
            </nav>
        </div>
        </header>
    );
};
