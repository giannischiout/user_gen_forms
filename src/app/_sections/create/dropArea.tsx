"use client"
import React, {useState} from "react";
import styles from "./styles/dropArea.module.css"
import {useDrag} from "@/app/_content/dragContext";
import { FaTrash } from "react-icons/fa";

import {DragData} from "@/app/_types/dragTypes";
import {Reorder,  useDragControls, motion} from "framer-motion";

export function DropArea() {
    const controls = useDragControls()

    //
    // -- drag hook --
    //
    const {isDragging} = useDrag();
    // -- state --
    //
    const [displayInputs, setDisplayInputs] = useState<DragData[] >([]);
    const [activeDragItem, setActiveDragItem] = useState<string>("")
    //
    // -- handlers --
    //
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };


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




    const handleDelete = (item: string) => {
        const newData = displayInputs.filter((input) => input.uuid !== item);
        setDisplayInputs(newData);
    };

    const handleDragStart = (e: React.DragEvent, uuid: string, index: number) => {
        console.log('start')
        if (e.dataTransfer) {
            console.log('yes')
            e.dataTransfer.setData('text/plain', JSON.stringify({uuid, index}));
        } else {
            console.error("e.dataTransfer is null");
        }
    };

    const handleDropDelete = (e) => {
        e.preventDefault();
        if(e.dataTransfer) {
            const item = e.dataTransfer.getData('text/plain');
            if(!item) return;
            const {uuid} = JSON.parse(item);
            handleDelete(uuid);
        }

    };

    // Function to handle drag over event, necessary to allow dropping
    const handleDragOverDelete = (e: React.DragEvent) => {
        e.preventDefault();
    };


    const handleReorder = (e: React.DragEvent) => {
        e.preventDefault();
        if(e.dataTransfer) {
            const item = e.dataTransfer.getData('text/plain');
            if(!item) return;
            const {uuid, index} = JSON.parse(item);
            console.log({uuid, index})
        }

    }
    return (
        <main className={styles.container}>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className={`${styles.drop_container} `}>
                    {displayInputs.map((item, index) => (
                            <motion.div
                                draggable={true}
                                onDrop={handleReorder}
                                onDragStart={(e) => handleDragStart(e, item.uuid, index)}
                                key={item.uuid}
                                className={`${styles.drop_item} `}
                            >
                                {item.label + " " + item.uuid}
                            </motion.div>
                    ))}
                    <div
                        onDrop={handleDropDelete}
                        onDragOver={handleDragOverDelete}
                        style={{
                            marginTop: '20px',
                            width: '200px',
                            height: '50px',
                            background: 'red',
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        Delete
                    </div>
            </div>

        </main>
    )
}

// Define the props interface
interface DeleteBucketProps {
    data: DragData[];
    setData: React.Dispatch<React.SetStateAction<DragData[]>>;
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>

}


const DeleteBucket = ({setActiveItem, activeItem, setData, data}: DeleteBucketProps) => {
    const [active, setActive] = useState<boolean>(false);
    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        // setActive(false)
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const uuid = e.dataTransfer.getData("deleteItem");
        const newData = data.filter((item) => item.uuid !== uuid);
        setData(newData);
        setActive(false);
        setActiveItem("")
    };
   return (
       <>
           {activeItem ? (
               <div
                     onDragOver={onDragOver}
                     onDrop={onDrop}
                     className={`${styles.deleteBucket} ${active && styles.deleteBucket_active}`}
               >
                   <div>
                       <FaTrash/>
                   </div>
               </div>
           ): null}
       </>
   )
}


const DropIndicator = ({index}: { index: number }) => {
    const [active, setActive] = useState<boolean>(false)
    const onDragOver = () => {
        setActive(true)
    }
    const onDragLeave = () => {
        setActive(false)
    }
    return (
        <div
            draggable
            onDragLeave={onDragLeave}
            onDragOver={ onDragOver }
            className={`${styles.drop_indicator} ${active && styles.drop_indicator_active}`}
        >
        </div>
    )
}