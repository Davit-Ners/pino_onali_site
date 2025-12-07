'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import styles from "./artworkCard.module.css";
import { useTranslations } from "../../languageProvider/languageProvider";
import { Artwork } from "@/app/generated/prisma/client";

type Props = {
    artwork: Artwork;
    onSelect: (artwork: Artwork) => void;
    isActiveOverlay: boolean;
    hasAnyOverlay: boolean;
    onShowOverlay: () => void;
    onHideOverlay: () => void;
};

export default function ArtworkCard({
    artwork,
    onSelect,
    isActiveOverlay,
    hasAnyOverlay,
    onShowOverlay,
    onHideOverlay,
}: Props) {
    const interestHref = `/contact?artwork=${encodeURIComponent(
        artwork.title
    )}`;
    const t = useTranslations();
    const [isTouchMode, setIsTouchMode] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaHoverNone = window.matchMedia("(hover: none)");
        const mediaPointerCoarse = window.matchMedia("(pointer: coarse)");

        const update = () => {
            setIsTouchMode(mediaHoverNone.matches || mediaPointerCoarse.matches);
        };

        const handleFirstTouch = () => {
            setIsTouchMode(true);
            window.removeEventListener("touchstart", handleFirstTouch);
        };

        update();
        mediaHoverNone.addEventListener("change", update);
        mediaPointerCoarse.addEventListener("change", update);
        window.addEventListener("touchstart", handleFirstTouch, { passive: true });

        return () => {
            mediaHoverNone.removeEventListener("change", update);
            mediaPointerCoarse.removeEventListener("change", update);
            window.removeEventListener("touchstart", handleFirstTouch);
        };
    }, []);

    function handleCardClick() {
        if (isTouchMode) {
            if (isActiveOverlay) {
                onHideOverlay();
            } else {
                onShowOverlay();
            }
            return;
        }

        if (hasAnyOverlay && !isActiveOverlay) {
            onShowOverlay();
            return;
        }

        onSelect(artwork);
    }

    function handleZoom(e: MouseEvent) {
        e.stopPropagation();

        if (!isActiveOverlay) {
            onShowOverlay();
            return;
        }

        onHideOverlay();
        onSelect(artwork);
    }

    return (
        <div className={styles.card} onClick={handleCardClick}>
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

        <div className={`${styles.hoverOverlay} ${isActiveOverlay ? styles.showOverlay : ""}`}>
            {isTouchMode && (
                <button
                type="button"
                className={styles.closeBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    onHideOverlay();
                    console.log(isActiveOverlay);
                }}
                aria-label="Fermer"
                >
                ×
                </button>
            )}
            <div className={styles.actions}>
            {artwork.sold ? (
                <button className={styles.btn} onClick={(e) => e.stopPropagation()}>
                    {artwork.sold ? t.gallery.soldout : t.gallery.interess}
                </button>
            ) : (
                <Link href={interestHref} className={styles.btn} onClick={(e) => e.stopPropagation()}>
                    {artwork.sold ? t.gallery.soldout : t.gallery.interess}
                </Link>
            )}
            <button
                type="button"
                className={styles.secondaryBtn}
                onClick={handleZoom}
            >
                {t.gallery.zoom}
            </button>
            </div>
        </div>
        </div>
    );
};
