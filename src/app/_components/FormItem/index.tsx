"use client"
import React, {ReactNode} from "react";
import styles from "./style.module.css"
import { Trash2,Plus,Grip } from 'lucide-react';
import {Button} from "@/components/ui/button";
export const ElementContainer = () => {
    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.iconButton_Container}>
                <IconButton icon={<Plus />} onClick={() => console.log("plus")} />
                <IconButton icon={<Grip />} onClick={() => console.log("grip")} />
                <IconButton icon={<Trash2 />} onClick={() => console.log("trash")} />
            </div>
        </div>
    )
}


type IconButtonProps = {
    icon: React.ReactElement;
    onClick: () => void;
    className?: string;
    [key: string]: any; // Allow any additional props

}


// styles in global.css
const IconButton = ({icon, onClick}: IconButtonProps ) => {
        return (
           <button className={styles.iconButton}>
               {React.cloneElement(icon, {
                   className: styles.icon
               } )}
           </button>
        )
}