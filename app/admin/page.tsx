import styles from "./admin.module.css";
import AdminPanel from "../components/admin/adminPanel/adminPanel";
import { getArtworks } from "../lib/artworks.model";

export default async function AdminPage() {

    return (
        <div className={styles.page}>
        <AdminPanel />
        </div>
    );
};
