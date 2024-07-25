import React, {ReactElement} from "react";
import styles from "style.module.css"

interface IconButtonProps {
    onClick: () => void;
    icon: ReactElement
}
export function IconButton({
    onClick,
    icon,

                           }: IconButtonProps) {
    return (
        <button onClick={onClick}>
            {React.cloneElement(icon, {className: `${styles.icon}`})}
        </button>
    )
}