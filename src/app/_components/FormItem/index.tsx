"use client"
import React, {ReactNode, useState} from "react";
import styles from "./style.module.css"
import { Trash2,Plus,Grip } from 'lucide-react';
import {IconButton} from "@/app/_components/IconButton";
import {ChooseItemDialog} from "@/app/_components/ChooseItemDialog";

export const ElementContainer = () => {

    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className={styles.container}>
            <div>
            </div>
            <div className={styles.iconButton_Container}>
                <IconButton icon={<Trash2 />} onClick={() => console.log("trash")} />
                <ChooseItemDialog
                    open={open}
                    onClose={handleClose}
                    />
                <IconButton icon={<Grip />} onClick={() => console.log("grip")} />

            </div>
        </div>
    )
}


