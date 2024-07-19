"use client"
import React, {ReactNode, useState} from "react";
import styles from "./style.module.css"
import { Trash2,Plus,Grip, Search,Minus, Equal, SquareCheckBig, CircleCheckBig, ChevronDown, Hash,AtSign, Phone, Link } from 'lucide-react';
import {IconButton} from "@/app/_components/IconButton";
import Modal from "@/app/_components/Modal";

const Options = [
    {
        groupLabel: "Input blocks",
        inputs: [
            {
                label: "Short answer",
                icon: <Minus/>
            },
            {
                label: "Long answer",
                icon: <Equal/>
            },
            {
                label: "Multiple choise",
                icon: <CircleCheckBig />
            },
            {
                label: "Checkboxes",
                icon: <SquareCheckBig  />
            },
            {
                label: "Dropdown",
                icon: <ChevronDown />
            },
            {
                label: "Multi-select",
                icon: <Trash2 />
            },
            {
                label: "Number",
                icon: < Hash />
            },
            {
                label: "Email",
                icon: <AtSign />
            },
            {
                label: "Phone Number",
                icon: <Phone />
            },
            {
                label: "Link",
                icon: <SquareCheckBig />
            }
        ]
    },   {
        groupLabel: "Layout blocks",
        inputs: [

            {
                label: "Number",
                icon: <Trash2 />
            },
            {
                label: "Phone",
                icon: <Trash2 />
            },
            {
                label: "Date",
                icon: <Trash2 />
            },
            {
                label: "Time",
                icon: <Trash2 />
            },
            {
                label: "Paragraph",
                icon: <Trash2 />
            },
            {
                label: "Dropdown",
                icon: <Trash2 />
            },
            {
                label: "Radio",
                icon: <Trash2 />
            },
            {
                label: "Checkbox",
                icon: <Trash2 />
            }
        ]
    },
]


export const CreateFormActions = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [options, setOptions] = useState(Options);
    const handleSearch = (value: string) => {
        console.log(value)
        setSearch(value);
        const filteredOptions = Options.map(option => ({
            ...option,
            inputs: option.inputs.filter(input => input.label.toLowerCase().includes(value.toLowerCase()))
        })).filter(group => group.inputs.length > 0);
        setOptions(filteredOptions);
    }

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
                                    label="Input Blocks"
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


interface InputProps {
    size: number;
}

interface InputOption {
    icon: React.ComponentType<InputProps> ;
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


const Details = () => {
    return (
        <div className={styles.modal_details}>
            Search for any input field or layout option. Use ↑ and ↓ to browse the list, then hit Enter to insert the selected block.
        </div>
    )
}

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