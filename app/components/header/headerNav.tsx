"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { useTranslations } from "../languageProvider/languageProvider";

type Props = {
    isAdmin: boolean;
};

export default function HeaderNav({ isAdmin }: Props) {
    const [open, setOpen] = useState(false);
    const t = useTranslations();

    function closeMenu() {
        setOpen(false);
    }

    return (
        <>
        {/* Nav desktop */}
        <nav className={styles.navDesktop}>
            <Link href="/">{t.nav.home}</Link>
            <Link href="/galerie">{t.nav.gallery}</Link>
            <Link href="/about">{t.nav.about}</Link>
            <Link href="/contact">{t.nav.contact}</Link>
            {/* <Link href="/legal">{t.nav.legal}</Link> */}
            {isAdmin && (
            <Link className={styles.adminBadge} href="/admin">
                Admin
            </Link>
            )}
        </nav>

        {/* Bouton burger (mobile) */}
        <button
            className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
        >
            <span />
            <span />
            <span />
        </button>

        {/* Nav mobile */}
        <nav
            className={`${styles.navMobile} ${
            open ? styles.navMobileOpen : ""
            }`}
        >
            <Link href="/" onClick={closeMenu}>
            {t.nav.home}
            </Link>
            <Link href="/galerie" onClick={closeMenu}>
            {t.nav.gallery}
            </Link>
            <Link href="/about" onClick={closeMenu}>
            {t.nav.about}
            </Link>
            <Link href="/contact" onClick={closeMenu}>
            {t.nav.contact}
            </Link>
            <Link href="/legal" onClick={closeMenu}>
            {t.nav.legal}
            </Link>
            {isAdmin && (
            <Link
                className={styles.adminBadgeMobile}
                href="/admin"
                onClick={closeMenu}
            >
                Admin
            </Link>
            )}
        </nav>
        </>
    );
};
