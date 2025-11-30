import styles from "./contactSection.module.css";
import ContactInfo from "../contactInfo/contactInfo";
import ContactForm from "../contactForm/contactForm";

export default function ContactSection() {
    return (
        <section className={styles.wrap}>
        <div className={styles.inner}>
            <ContactInfo />
            <ContactForm />
        </div>
        </section>
    );
};
