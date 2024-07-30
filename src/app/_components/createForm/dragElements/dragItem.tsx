import {useDraggable} from "@dnd-kit/core";
import React from "react";
import styles from "./styles.module.css"
import {DragItemProps} from "@/app/_types/createFormTypes";
import { RiDragMove2Fill } from "react-icons/ri";



export default function DragItem({id, type, icon, label, uuid}: DragItemProps) {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: `drag-btn-${id}`,
        data: {
            type,
            label,
            id,
        }
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;




    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`${styles.drag_item_container} `}
            {...attributes}
            {...listeners}
        >

            <div className={styles.drag_item}>
                {React.cloneElement(icon, {className: styles.icon})}
                <span>{label}</span>
            </div>
            <div className={styles.dragIcon}>
                <RiDragMove2Fill />
            </div>
        </div>
    )
}




