"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';
import {DragItemProps} from "@/app/_types/createForm";

interface DragContextProps {
    dragData: DragItemProps[];
    setDragData: React.Dispatch<React.SetStateAction<DragItemProps[]>>;
    dragItems: DragItemProps[];
    setDragItems: React.Dispatch<React.SetStateAction<DragItemProps[]>>;
}


const DragContext = createContext<DragContextProps | undefined>(undefined);


export const DragProvider = ({children}: {children: ReactNode}) => {
    const [dragData, setDragData] = useState<DragItemProps[]>([]);
    const [dragItems, setDragItems] = useState<DragItemProps[]>([])
    return (
       <DragContext.Provider value={{
           dragData, setDragData,
           dragItems, setDragItems
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
