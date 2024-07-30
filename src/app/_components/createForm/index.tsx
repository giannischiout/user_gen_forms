"use client"
import React, {useState} from "react";
import styles from "./styles.module.css";
import {Active, DndContext} from '@dnd-kit/core';
import {Sidebar} from "@/app/_components/createForm/sidebar";
import {DroppableBucket} from "@/app/_components/createForm/droppableBucket";
import {DragElementProps } from "@/app/_types/createForm";

const generateUniqueID = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}
export default function CreateFormPage() {
    const [items, setItems] = useState<DragElementProps[]>([])
    const handleDragEnd = (e ) => {
        setItems([...items, {
            ...e.active.data.current,
            uuid: generateUniqueID()
        }])


    }

    console.log({items})
    return (
            <DndContext onDragEnd={handleDragEnd} >
                <section className={styles.container}>
                    <Sidebar/>
                    <DroppableBucket data={items} />
                </section>
            </DndContext>
    )
}