import styles from "./admin.module.css";
import AdminPanel from "../components/admin/adminPanel/adminPanel";
import AdminSkeleton from "../components/admin/adminSkeleton/adminSkeleton";
import { getArtworks } from "../lib/artworks.model";
import { Suspense } from "react";

export default async function AdminPage() {
    return (
        <Suspense fallback={<AdminSkeleton />}>
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
