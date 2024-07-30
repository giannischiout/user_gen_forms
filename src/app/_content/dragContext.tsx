"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';
import {DragItemProps, DropItemProps} from "@/app/_types/createFormTypes";

interface DragContextProps {
    dragData: DropItemProps[];
    setDragData: React.Dispatch<React.SetStateAction<DropItemProps[]>>;

}


const DragContext = createContext<DragContextProps | undefined>(undefined);


export const DragProvider = ({children}: {children: ReactNode}) => {
    const [dragData, setDragData] = useState<DropItemProps[]>([]);
    const [isPreview, setIsPreview] = useState<boolean>(false);
    return (
       <DragContext.Provider value={{
           dragData, setDragData,
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
