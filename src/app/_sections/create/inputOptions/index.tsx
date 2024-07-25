"use client"
import {INPUT_OPTIONS} from "@/app/_sections/create/inputOptions/options";
import styles from "./styles.module.css";
import React, {useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import {useDrag} from "@/app/_content/dragContext";
import {DragData} from "@/app/_types/dragTypes";

interface StateProps {
    isOpen: boolean;
    index: number | null;

}


const generateUniqueID = () => {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}





export function InputOptionsContent() {
    const {setDragData, setIsDragging} = useDrag()
    const [state, setState] = useState<StateProps>({
        isOpen: true,
        index: null,
    });
    const handleToggle = (index: number) => {
        setState((prev) => ({
            isOpen: !prev.isOpen || prev.index !== index,
            index: prev.index === index ? null : index,
        }));
    };
    const condition = (index: number) => {
        return state.isOpen && state.index === index;
    }

    const handleDragStart = (e:  React.DragEvent, inputInfo: DragData): void => {
        // Set the data for the drag event
        if (e.dataTransfer) {
            e.dataTransfer.setData("input", JSON.stringify(inputInfo));
        } else {
            console.error("e.dataTransfer is null");
        }

        setDragData((prev) => ({
            ...prev, ...inputInfo
        }));
    };



    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }

    return (
        <div className={styles.container}>
            {INPUT_OPTIONS.map((group, index) => (
                <div key={index} className={styles.group_container}>
                    <div className={`${styles.group_label_container}`}>
                        <p className={`${styles.group_label} ${condition(index) && styles.group_label_active}`}>{group.groupLabel}</p>
                        <div onClick={() => handleToggle(index)}>
                            {condition(index) ?  <MdKeyboardArrowUp />  : <MdKeyboardArrowDown />  }
                        </div>
                    </div>

                    {condition(index) && (
                        <div className={`${styles.inputs_container} ${condition(index) && styles.inputs_animation}`}>
                            {group.inputs.map((input, index) => (
                                <div
                                    draggable
                                    onDragOver={onDragOver}
                                    onDragEnd={() => setIsDragging(false)}
                                    onDragStart={(e: React.DragEvent) => handleDragStart(e, {
                                        id: input.id,
                                        index: index,
                                        label: input.label,
                                        uuid: generateUniqueID()
                                    })}
                                    key={index}
                                    className={styles.input_container}
                                >
                                    {input.icon}
                                    <span>{input.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}