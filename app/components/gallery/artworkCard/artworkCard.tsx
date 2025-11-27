import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/app/galerie/page";
import styles from "./artworkCard.module.css";

type Props = {
    artwork: Artwork;
};

export default function ArtworkCard({ artwork }: Props) {
    const interestHref = `/contact?artwork=${encodeURIComponent(
        artwork.title
    )}`;

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
            {artwork.description && <p>{artwork.description}</p>}
        </div>

        <div className={styles.hoverOverlay}>
            <Link href={interestHref} className={styles.btn}>
            Cette œuvre m'intéresse
            </Link>
        </div>
        </div>
    );
};
