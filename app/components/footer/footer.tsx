"use client";

import styles from "./footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "../languageProvider/languageProvider";

export default function Footer() {
  const router = useRouter();
  const tapCountRef = useRef(0);
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = useTranslations();

  function handleSecretTap() {
    const next = tapCountRef.current + 1;
    tapCountRef.current = next;

    if (next === 3) {
      tapCountRef.current = 0;
      router.push("/admin");
      return;
    }

    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }

    resetTimeout.current = setTimeout(() => {
      tapCountRef.current = 0;
    }, 600);
  }

  useEffect(() => {
    return () => {
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left} onClick={handleSecretTap}>
          <p>{t.footer.c1}</p>
          <p>{t.footer.c2}</p>
          <p className={styles.signature}>{t.footer.c3}</p>
          <p className={styles.legal}>
            <Link href="/legal">{t.footer.legalLink}</Link>
          </p>
        </div>

        <div className={styles.right}>
          <Link href="https://www.instagram.com/pinoonali/" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/pino.onali" target="_blank">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </footer>
  );
}
