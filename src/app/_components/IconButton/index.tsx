import React from "react";
import styles from "@/app/_components/FormItem/style.module.css";

type IconButtonProps = {
    icon: React.ReactElement;
    onClick: () => void;
    className?: string;
    [key: string]: any; // Allow any additional props

}


// styles in global.css
export const IconButton = ({icon, onClick}: IconButtonProps ) => {
    return (
        <button className={styles.iconButton}>
            {React.cloneElement(icon, {
                className: styles.icon
            } )}
        </button>
    )
}