import Link from "next/link";
import styles from "./header.module.css";
import { cookies } from "next/headers";
import LanguageToggle from "../languageToggle/languageToggle";
import HeaderNav from "./headerNav";
import { ADMIN_COOKIE, verifyAdminToken } from "@/app/lib/auth";

export default async function Header() {
    let isAdmin = false;
    try {
        const token = (await cookies()).get(ADMIN_COOKIE)?.value;
        isAdmin = Boolean(await verifyAdminToken(token));
    } catch {
        isAdmin = false;
    }

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
