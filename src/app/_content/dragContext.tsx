"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';
import {DragData} from "@/app/_types/dragTypes";


interface DragContextProps {
    dragData: DragData[];
    setDragData: React.Dispatch<React.SetStateAction<DragData[]>>;
    isDragging: boolean;
    setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}


const DragContext = createContext<DragContextProps | undefined>(undefined);


export const DragProvider = ({children}: {children: ReactNode}) => {
    const [dragData, setDragData] = useState<DragData[]>([]);
    const [isDragging , setIsDragging] = useState<boolean>(false)
    return (
       <DragContext.Provider value={{
           dragData, setDragData,
           isDragging, setIsDragging
       }}>
     {children}
 </DragContext.Provider>
   )
}


export const useDrag = () => {
    const context = useContext(DragContext);
    if (!context) {
        throw new Error('useDrag must be used within a DragProvider');
    }
    return context;
};
