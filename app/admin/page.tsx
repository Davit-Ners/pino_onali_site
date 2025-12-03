import styles from "./admin.module.css";
import AdminPanel from "../components/admin/adminPanel/adminPanel";
import { getArtworks } from "../lib/artworks.model";
import { Suspense } from "react";

export default async function AdminPage() {
    return (
        <Suspense fallback={<h2>TEST</h2>}>
            <div className={styles.page}>
                <AdminPageRender />
            </div>
        </Suspense>
    );
};

async function AdminPageRender() {
    const artworks = await getArtworks();
    return <AdminPanel artworks={artworks}/>
};
