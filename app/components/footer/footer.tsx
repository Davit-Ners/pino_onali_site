"use client"; // ⚡ obligatoire pour écouter les clics côté client

import styles from "./footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  const [tapCount, setTapCount] = useState(0);

  function handleSecretTap() {
    setTapCount((prev) => prev + 1);
  }

  // Reset du compteur et détection triple tap
  useEffect(() => {
    if (tapCount === 3) {
      router.push("/admin");
      setTapCount(0);
      return;
    }

    // reset automatique après 600ms s’il ne continue pas
    const timeout = setTimeout(() => {
      setTapCount(0);
    }, 600);

    return () => clearTimeout(timeout);
  }, [tapCount, router]);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* zone secrète */}
        <div className={styles.left} onClick={handleSecretTap}>
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
}
