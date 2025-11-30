import styles from "./contact.module.css";
import ContactIntro from "../components/contact/contactIntro/contactIntro";
import ContactSection from "../components/contact/contactSection/contactSection";

export default function ContactPage() {
    return (
        <div className={styles.page}>
        <ContactIntro />
        <ContactSection />
        </div>
    );
};
