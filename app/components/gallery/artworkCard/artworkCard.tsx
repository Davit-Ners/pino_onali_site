'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./artworkCard.module.css";
import { useTranslations } from "../../languageProvider/languageProvider";
import { Artwork } from "@/app/generated/prisma/client";

type Props = {
    artwork: Artwork;
};

export default function ArtworkCard({ artwork }: Props) {
    const interestHref = `/contact?artwork=${encodeURIComponent(
        artwork.title
    )}`;
    const t = useTranslations();

    return (
        <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <Image
            src={artwork.imageUrl}
            alt={artwork.title}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            className={styles.image}
            />
        </div>

        <div className={styles.info}>
            <h3>{artwork.title}</h3>
            {artwork.sizeDescription && <p>{artwork.sizeDescription}</p>}
        </div>

        <div className={styles.hoverOverlay}>
            {artwork.sold ? (
                <button className={styles.btn}>
                    {artwork.sold ? t.gallery.soldout : t.gallery.interess}
                </button>
            ) : (
                <Link href={interestHref} className={styles.btn}>
                    {artwork.sold ? t.gallery.soldout : t.gallery.interess}
                </Link>
            )}
        </div>
        </div>
    );
};
