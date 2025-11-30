import styles from "./admin.module.css";
import AdminPanel from "../components/admin/adminPanel/adminPanel";

export default function AdminPage() {
    return (
        <div className={styles.page}>
        <AdminPanel />
        </div>
    );
};
