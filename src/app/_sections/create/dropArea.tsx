"use client"
import React, {useState} from "react";
import styles from "./styles/dropArea.module.css"
import {useDrag} from "@/app/_content/dragContext";

import {DragData} from "@/app/_types/dragTypes";
import {Reorder} from "framer-motion";

export function DropArea() {
    //
    // -- drag hook --
    //
    // -- state --
    //
    const [displayInputs, setDisplayInputs] = useState<DragData[] >([]);
    //
    // -- handlers --
    //
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    console.log({displayInputs})

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dataTransfer = e.dataTransfer;
        if (dataTransfer) {
            const data = dataTransfer.getData("input");

            try {
                const parsedData: DragData = JSON.parse(data);
                setDisplayInputs((prev) => [...prev, parsedData]);

            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        } else {
            console.error('dataTransfer is null');
        }
    };




    return (
        <main className={styles.container}>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`${styles.drop_container} `}>
                    {/*{isDragging && <DropIndicator  />}*/}
                <Reorder.Group values={displayInputs} onReorder={(e) => setDisplayInputs(e)}>
                {displayInputs.map((item, index) => (
                           <Reorder.Item
                                 key={item.uuid}
                                 value={item}
                           >
                               <div
                                   className={`${styles.drop_item} `}
                               >
                                   {item.label + " " + item.uuid}
                               </div>
                               {/*{isDragging  && <DropIndicator index={index} />}*/}
                           </Reorder.Item>
                    ))}
                </Reorder.Group>

            </div>

        </main>
    )
}


const DropIndicator = ({index}: {index: number}) => {
    const [active, setActive] = useState<boolean>(false)
    const onDragOver = () => {
        setActive(true)
    }
    const onDragLeave = () => {
        setActive(false)
    }
    return (
        <div
            onDragLeave={onDragLeave}
            onDragOver={ onDragOver }
            className={`${styles.drop_indicator} ${active && styles.drop_indicator_active}`}
        >
        </div>
    )
}