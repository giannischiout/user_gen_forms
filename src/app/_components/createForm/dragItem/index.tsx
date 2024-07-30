import {useDraggable} from "@dnd-kit/core";
import React from "react";
import styles from "./styles.module.css"
import {formElementProps} from "@/app/_types/createForm";



export default function DragItem({formElement}: {formElement: formElementProps}) {
    const {attributes, listeners, setNodeRef, transform, isDragging} = useDraggable({
        id: `drag-btn-${formElement.type}`,
        data: {
           formElement
        }
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;




    return (
        <div className={styles.drag_item_container}>
            <div
                ref={setNodeRef}
                style={style}
                className={`${styles.drag_item} `}
                {...attributes}
                {...listeners}
            >
                {formElement.type}
            </div>
        </div>
    )
}




