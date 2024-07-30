"use client"
import {INPUT_OPTIONS} from "@/app/_components/createForm/options";
import styles from "./style.module.css";
import React, {useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import DragItem from "@/app/_components/createForm/dragItem";
import {InputGroup} from "@/app/_types/createForm";

interface StateProps {
    isOpen: boolean;
    index: number | null;

}




export function DragElements() {
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



    return (
        <div className={styles.container}>
            {INPUT_OPTIONS.map((group:  InputGroup, index) => (
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
                                <DragItem key={input.uuid} formElement={input}  />
                            ))}
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}


