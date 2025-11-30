"use client";

import { useEffect } from "react";
import styles from "./toast.module.css";

export type ToastType = "success" | "error" | "info";

type Props = {
    message: string;
    type: ToastType;
    onClose: () => void;
};

export default function Toast({ message, type, onClose }: Props) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
        {message}
        </div>
    );
};
