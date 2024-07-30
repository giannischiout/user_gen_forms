"use client"
import React from "react";
import styles from "./styles.module.css"
import {useDroppable} from "@dnd-kit/core";
import {DragItemProps} from "@/app/_types/createForm";


export function DroppableBucket({data} : {data:DragItemProps[] }) {
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable-bucket',
    });
    console.log({isOver})
    return (
        <main className={styles.container}>
            <div ref={setNodeRef}
                 className={`${styles.dropable_bucket} 
                 ${isOver ? styles.droppable_bucket_active : ''}`}
            >
                <p>Drop Here</p>
                {data.map((item, index) => (
                    <div key={index} className={styles.dropable_item}>
                        {item.label}
                    </div>
                ))}
            </div>
        </main>
    )
}




