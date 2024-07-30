import {ReactElement} from "react";



export interface DropItemProps {
    uuid: string;
    type: string;
    label: string;
}

export interface  DragItemProps {
    icon: ReactElement;
    id: string;
    label: string;
    type: string;
    uuid?: string;
}



// Interface for input groups
export interface InputGroup {
    groupLabel: string;
    inputs: DragItemProps[];
}