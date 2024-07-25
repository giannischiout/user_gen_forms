"use client"
import React from "react";
import styles from "./style.module.css"
import {ReactElement} from "react";

interface ButtonProps {
    size?: string;
    variant?: string;
    onClick: () => void;
    label: string;
    icon?: ReactElement

}


export function Button(
    {
        size = "small",
        variant = "primary",
        onClick,
        label,
        icon,
    } : ButtonProps
) {
    return (
        <button
            onClick={onClick}
            className={ `${styles.button} ${icon && styles.button_icon}  ${styles[variant]} ${styles[size]}`}
        >
            {icon && React.cloneElement(icon, {className: `${styles.icon}`} )}
            {label}
        </button>
    )
}