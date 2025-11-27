"use client";

import Image from "next/image";
import styles from "./pageBackground.module.css";

type Props = {
    src: string;
    alt?: string;
};

export default function PageBackground({ src, alt = "background" }: Props) {
    return (
        <div className={styles.bg}>
        <Image
            src={src}
            alt={alt}
            fill
            priority
            // quality={95}
            className={styles.image}
        />
        <div className={styles.overlay} />
        </div>
    );
};
