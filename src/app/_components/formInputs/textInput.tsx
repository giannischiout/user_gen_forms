import styles from "./styles.module.css";
import React from "react";
interface TextInputProps {
    label: string;
    placeholder?: string;
    error?: string;
    description?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export function TextInput({label, placeholder, error,description, value, onChange}: TextInputProps) {
    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <input
                readOnly={true}
                disabled={true}
                className={styles.input}
                type="text"
                placeholder={placeholder}
            />
            {error && <span className={styles.error}>{error}</span>}
            {description && <span className={styles.description}>{description}</span>}
        </div>
    )
}