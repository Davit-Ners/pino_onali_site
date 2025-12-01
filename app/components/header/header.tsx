import Link from "next/link";
import styles from "./header.module.css";
import { cookies } from "next/headers";
import LanguageToggle from "../languageToggle/languageToggle";
import HeaderNav from "./headerNav";

export default async function Header() {
    const isAdmin = (await cookies()).get("pino_admin")?.value === '1';

    return (
        <header className={styles.header}>
        <div className={styles.container}>
            <div className={styles.logo}>
            <Link href="/">Pino Onali</Link>
            </div>
            
            <div style={{ display: 'flex', gap: "2rem" }}>
            <LanguageToggle />
            <HeaderNav isAdmin={isAdmin} />
            </div>
        </div>
        </header>
    );
};
