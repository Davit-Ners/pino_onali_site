import styles from "./about.module.css";
import AboutHero from "../components/about/aboutHero/aboutHero";
import AboutColumns from "../components/about/aboutColumns/aboutColumns";
import AboutPanels from "../components/about/aboutPanels/aboutPanels";
import AboutQuote from "../components/about/aboutQuote/aboutQuote";

export default function AboutPage() {
    return (
        <div className={styles.page}>
        <AboutHero />
        <AboutColumns />
        <AboutPanels />
        <AboutQuote />
        </div>
    );
};
