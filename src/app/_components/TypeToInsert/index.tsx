"use client"
import React from "react";
import styles from "./style.module.css"


interface InputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

export function TypeToInsert({onChange, value}: InputProps) {
    return (
        <div>
            <label
                hidden
                htmlFor={"type-to-insert"}
                id="search-label">Search:</label>
            <input
                autoFocus={true}
                placeholder={"Type '/' to search for a block"}
                className={styles.input}
                type="text"
                id={"type-to-insert"}
                name="search"
                value={value}
                onChange={onChange}
                aria-required="true"
                aria-label="Search"
            />
        </div>
    )
}