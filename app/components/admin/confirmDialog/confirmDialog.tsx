import styles from "./confirmDialog.module.css";

type Props = {
    open: boolean;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel: () => void;
};

export default function ConfirmDialog({
    open,
    title,
    message,
    confirmLabel = "Confirmer",
    cancelLabel = "Annuler",
    onConfirm,
    onCancel,
}: Props) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
        <div className={styles.backdrop} onClick={onCancel} />
        <div className={styles.dialog}>
            <h3>{title}</h3>
            <p>{message}</p>
            <div className={styles.actions}>
            <button
                type="button"
                className={styles.cancelButton}
                onClick={onCancel}
            >
                {cancelLabel}
            </button>
            <button
                type="button"
                className={styles.confirmButton}
                onClick={onConfirm}
            >
                {confirmLabel}
            </button>
            </div>
        </div>
        </div>
    );
};
