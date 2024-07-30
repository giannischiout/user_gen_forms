import {ReactElement} from "react";



export interface formElementProps {
    uuid: string;
    type: string;
}

export interface  DragItemProps {
    icon: ReactElement;
    id: string;
    label: string;
    type: string;
}



// Interface for input groups
export interface InputGroup {
    groupLabel: string;
    inputs: DragItemProps[];
}