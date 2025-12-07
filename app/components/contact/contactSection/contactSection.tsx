import { Suspense } from "react";
import styles from "./contactSection.module.css";
import ContactInfo from "../contactInfo/contactInfo";
import ContactForm from "../contactForm/contactForm";

function ContactFormSkeleton() {
    return (
        <div className={styles.skeletonCard} aria-hidden="true">
        <div className={styles.skeletonLine} style={{ width: "60%", height: 22 }} />
        <div className={styles.skeletonLine} style={{ width: "75%", marginTop: "10px" }} />

        <div className={styles.skeletonStack}>
            <div className={styles.skeletonStack}>
            <div className={styles.skeletonLine} style={{ width: "32%" }} />
            <div className={styles.skeletonInput} />
            </div>

            <div className={styles.skeletonStack}>
            <div className={styles.skeletonLine} style={{ width: "28%" }} />
            <div className={styles.skeletonInput} />
            </div>

            <div className={styles.skeletonStack}>
            <div className={styles.skeletonLine} style={{ width: "36%" }} />
            <div className={styles.skeletonBlock} />
            </div>
        </div>

        <div className={styles.skeletonButton} style={{ marginTop: "16px" }} />
        </div>
    );
};

export default function ContactSection() {
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <ContactInfo />
            <Suspense fallback={<ContactFormSkeleton />}>
            <ContactForm />
            </Suspense>
        </div>
        </section>
    );
};
