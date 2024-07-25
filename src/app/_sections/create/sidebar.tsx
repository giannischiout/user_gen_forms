"use client";
import React, {useEffect} from "react";
import styles from "./styles/styles.module.css"
import { FiMinimize } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import {useState, useRef} from "react";
import useClickOutside from "@/app/hooks/useClickOutside";
import Image from "next/image";
import {SearchInput} from "@/app/_components/SearchInput";
import { VscSettings } from "react-icons/vsc";
import {InputOptionsContent} from "@/app/_sections/create/inputOptions";
// --------------------
// --- typescript ---
// --------------------
interface TitleInputProps {
    fileName: string;
    setFileName: React.Dispatch<React.SetStateAction<string>>;
}

// --------------------
// --- content ---
// --------------------

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [fileName, setFileName] = useState<string>("Untitled");

    const handleCollapse = () => {
        setIsCollapsed(prev => !prev);
    }
    return (
        <aside >
            <div className={`${styles.sidebar_container} ${!isCollapsed  && styles.sidebar_open}`}>
                <div className={`${styles.sidebar_nav} ${!isCollapsed && styles.sidebar_nav_border }` }>
                    <div>
                        <div className={styles.logo}>
                            <Image
                                src={"/logo.png"}
                                alt="logo"
                                width={30}
                                height={30}
                                className={styles.logo}
                            />
                            <RiArrowDropDownLine />
                        </div>
                        {isCollapsed && <span className={styles.fileName_text}>{fileName}</span>}
                        <FiMinimize
                            onClick={handleCollapse}
                            className={styles.minimize}
                        />

                    </div>
                    {!isCollapsed && (
                        <TitleInput
                            fileName={fileName}
                            setFileName={setFileName}
                        />
                    )}
                </div>
                {!isCollapsed && (
                    <SidebarOpenContent

                    />
                )}
            </div>
        </aside>
    );
}




const SidebarOpenContent = () => {
    return (
       <>
           <div className={styles.search_container}>
               <SearchInput />
               <Filter />
           </div>
           <InputOptionsContent />
       </>
    )
}


const Filter = () => {
    return (
        <div className={styles.iconButton}>
            <VscSettings  />
        </div>
    )
}


const TitleInput = ({fileName, setFileName, }: TitleInputProps ) => {
    const [isEdit, setIsEdit] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    useClickOutside(inputRef, () => {
        if (isEdit) {
            setIsEdit(false);
        }
    });
    const handleDoubleClick = () => {
        setIsEdit(true);

    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFileName(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setIsEdit(false);
        }
    };

    // Focus and select text when input is rendered and is in edit mode
    useEffect(() => {
        if (isEdit && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [isEdit]);
    return (
        <div >
        {!isEdit ? (
                <div className={styles.fileName_container}>
                 <span
                     className={styles.fileName_text}
                     onClick={handleDoubleClick}
                 >{fileName}
                </span>
                    <RiArrowDropDownLine className={styles.icon}/>
                </div>
            ) : (
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    value={fileName}
                    onKeyDown={handleKeyDown}
                    className={styles.nameInput}
                    type="text"
                    placeholder="Untitled"
                />
            )}
        </div>
    )
}
