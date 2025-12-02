"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../admin/confirmDialog/confirmDialog.module.css";

type Props = {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function LogoutDialog({ open, onConfirm, onCancel }: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !open) return null;

    return createPortal(
        <div className={styles.overlayyy}>
            <div className={styles.backdroppp} onClick={onCancel} />
            <div className={styles.dialoggg}>
                <h3>Se déconnecter ?</h3>
                <p>Vous allez quitter le mode administrateur.</p>

                <div className={styles.actions}>
                    <button onClick={onCancel} className={styles.cancelButton}>Annuler</button>
                    <button onClick={onConfirm} className={styles.confirmButton}>Déconnexion</button>
                </div>
            </div>
        </div>,
        document.body
    );
}
