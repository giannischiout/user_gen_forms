"use client"
import React, {ReactElement, ReactNode, useState} from "react";
import styles from "./style.module.css"
import { Trash2,Plus,Grip, Search,Minus, Equal, SquareCheckBig, CircleCheckBig, ChevronDown, Hash,AtSign, Phone, Link } from 'lucide-react';
import {IconButton} from "@/app/_components/IconButton";
import Modal from "@/app/_components/Modal";
import {InputOptions as Options} from "./options";
import {TypeToInsert} from "@/app/_components/TypeToInsert";


interface InputOption {
    icon: ReactElement ;
    label: string;
}

interface GroupOption {
    groupLabel: string;
    inputs: InputOption[];
}

interface OptionsProps {
    options: GroupOption[];
    searchTerm: string;
}



export const FormActionsAndSearch = () => {
    const [searchValue,setSearchValue] = useState<string>("")
    const handleChange = () => {
        console.log("Change")

    }
    return (
        <div className={styles.formActonsSearch}>
            <CreateFormActions/>
            <TypeToInsert onChange={ handleChange} value={searchValue} />
        </div>
    )
}
export const CreateFormActions = () => {
    //
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [options, setOptions] = useState(Options);
    //
    const handleSearch = (value: string) => {
        setSearch(value);
        const filteredOptions = Options.map(option => ({
            ...option,
            inputs: option.inputs.filter(input => input.label.toLowerCase().includes(value.toLowerCase()))
        })).filter(group => group.inputs.length > 0);
        setOptions(filteredOptions);
    }
    //
    return (
        <div className={styles.container}>
            <div className={styles.btn_container}>
                <IconButton icon={<Trash2 />} onClick={() => console.log("trash")} />
                <Modal
                    trigger={<IconButton icon={<Plus />} onClick={() => console.log("Plus")} />}
                    isVisible={open}
                    setIsVisible={setOpen}
                >
                    <div className={styles.modal_content}>
                        <SearchInput
                            value={search}
                            setValue={handleSearch}
                        />
                        <div className={styles.modal_grid}>
                                <InputGroups
                                    options={options}
                                    searchTerm={search}
                                />
                                <Details />
                        </div>

                    </div>
                </Modal>
                <IconButton icon={<Grip />} onClick={() => console.log("grip")} />
            </div>
        </div>
    )
}


// ......................................................
// Map all the inputs from the Options config and display them in groups, with a label and child elements:
// ......................................................
const InputGroups = ({ options, searchTerm}: OptionsProps) => {
    return (
        <div className={styles.inputGroupContainer}>
            {
                options.map((option, index) => (
                    <div className={styles.list_container}  key={index}>
                        <p >{option.groupLabel}</p>
                        {option.inputs.map((input, index2) => (
                            <div className={styles.list_item} key={index2}>
                                {React.cloneElement(input.icon, {size: 14})}
                                <span>{input.label}</span>
                            </div>
                        ))}
                    </div>
                ))
            }

        </div>
    )
}

// ......................................................
// Right screen details of the modal, when an input is clicked:
// ......................................................
const Details = () => {
    return (
        <div className={styles.modal_details}>
            Search for any input field or layout option. Use ↑ and ↓ to browse the list, then hit Enter to insert the selected block.
        </div>
    )
}

// ......................................................
// Search and filter inputs:
// ......................................................
type SearchInputProps = {
    value: string;
    setValue: (value: string) => void;

}
const SearchInput = ({value, setValue}: SearchInputProps) => {
    return (
        <div className={styles.searchInput}>
            <Search size={16} />
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    id="search"
                    placeholder="Find questions, input fields and options"
                />
        </div>
    )
}