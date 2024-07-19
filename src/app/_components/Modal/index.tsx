// Modal.js
import React, {useState, useEffect, useRef} from 'react';
import {createPortal} from "react-dom";
import styles from "./style.module.css";

interface ModalProps {
    children: React.ReactElement;
    isVisible: boolean;
    setIsVisible: (open: boolean) => void;
    trigger: React.ReactElement;
}
const Modal = ({children, isVisible, setIsVisible, trigger  }: ModalProps) => {
    const bodyRef = useRef<HTMLDivElement>(null);


    const handleClickOutside = (event: MouseEvent ) => {

        if (bodyRef.current && !bodyRef.current.contains(event.target as Node)) {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

        // eslint-disable-next-line
    }, [isVisible]);

    return (
        <>
        {React.cloneElement(trigger, {onClick: () => setIsVisible(true)})}
            {createPortal(
               <>
                   {isVisible && (
                       <div  className={styles.container}>
                           <div ref={bodyRef} className={styles.modal_body}>
                               {children}
                               {/*<button*/}
                               {/*    onClick={() => setIsVisible(false)}*/}
                               {/*>close</button>*/}
                           </div>

                       </div>
                   )}
               </>,
                document.body
            )}
        </>
    )

};

export default Modal;