import React from "react";
import styles from "./styles.module.css";
import { IoSearchSharp } from "react-icons/io5";

export function SearchInput() {
    return (
        <div>
            <label className={styles.container} htmlFor="search_inputs">
                <IoSearchSharp />
                <input
                    className={styles.search_input}
                    type="text"
                    id="search_inputs"
                    placeholder="Find..."
                />
            </label>
        </div>
    )
}