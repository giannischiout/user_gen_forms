"use client"
import React, {useState} from "react";
import styles from "./styles.module.css";
import { DndContext, DragEndEvent, DragStartEvent, Active} from '@dnd-kit/core';
import {Sidebar} from "@/app/_components/createForm/sidebar";
import {DroppableBucket} from "@/app/_components/createForm/droppableBucket";
import { DropItemProps} from "@/app/_types/createFormTypes";
import {Button} from "@/app/_components/button";
import { IoEye } from "react-icons/io5";
import { MdPublishedWithChanges } from "react-icons/md";
import {DragProvider, useDrag} from "@/app/_content/dragContext";

const generateUniqueID = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}
export default function CreateFormPage() {
    const {dragData, setDragData} = useDrag();
    const [items, setItems] = useState<DropItemProps[]>([])
    const handleDragEnd = (e:  DragEndEvent ) => {
        const {active, over} = e;
        if (!over) return;
        // setItems((prev) => ([...prev, {
        //     label: active?.data?.current?.label,
        //     type: active?.data?.current?.type,
        //     uuid: generateUniqueID()
        // }]))
        setDragData(prev => [...prev, {
            label: active?.data?.current?.label,
            type: active?.data?.current?.type,
            uuid: generateUniqueID()
        }])
    }


    const handlePreview  = () => {
    }

    return (
                <DndContext onDragEnd={handleDragEnd}  >
                    <section className={styles.container}>
                        <Sidebar/>
                        <main className={styles.main}>
                            <nav className={styles.nav}>
                                <Button
                                    onClick={handlePreview}
                                    label="Preview"
                                    variant="secondary"
                                    icon={<IoEye />}
                                />
                                <Button
                                    onClick={() => console.log('click')}
                                    variant="primary"
                                    label="Publish"
                                    icon={<MdPublishedWithChanges />}
                                />
                            </nav>
                            <div className={styles.droppable_container}>
                                <DroppableBucket />
                            </div>
                        </main>
                    </section>
                </DndContext>

    )
}