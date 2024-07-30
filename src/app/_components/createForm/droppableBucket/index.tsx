"use client"
import React from "react";
import styles from "./styles.module.css"
import {useDroppable} from "@dnd-kit/core";
import {DropItemProps} from "@/app/_types/createFormTypes";
import {TextInput} from "@/app/_components/formInputs/textInput";
import {useDrag} from "@/app/_content/dragContext";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates, useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';

export function DroppableBucket() {
    const {dragData, setDragData} = useDrag();

    const {isOver, active, setNodeRef} = useDroppable({
        id: 'droppable-bucket',
    });



    return (
            <div ref={setNodeRef}
                 className={`${styles.droppable_bucket} 
                 ${isOver ? styles.droppable_bucket_active : ''}`}
            >
                <p>Drop Here</p>
                <SortableContext
                    items={dragData}
                    strategy={verticalListSortingStrategy}
                >
                    {dragData.map((item, index) => (
                       <SortbleItem
                            key={item.uuid}
                            uuid={item.uuid}
                            item={item}
                       />
                    ))}
                </SortableContext>

            </div>
    )
}

const SortbleItem = ({uuid, item}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: uuid});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <div
            ref={setNodeRef}
            style={style}
            className={styles.droppable_item}
            {...attributes}
            {...listeners}
        >
            <GetInput uuid={uuid} type={item.type} label={item.label} />
        </div>
    )

}




const GetInput =({type, uuid, label}: DropItemProps ) => {
    let node;
    if(type === "text-input") {
        node = <TextInput label={label} placeholder={'value here'} description={'description here...'}/>
    }
    if(type === "number-input") {
       node = <input type="number" />
    }

    return node;

}

