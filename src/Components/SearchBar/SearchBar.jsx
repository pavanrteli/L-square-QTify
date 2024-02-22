import React from "react";
import styles from "./SearchBar.module.css";
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg";

export default function SearchBar(){
    return (
        <div className={styles.container}>
            <input name="search" className={styles.SearchBar} placeholder="Search a album of your choice"/>
            <button className={styles.SearchIcon}><SearchIcon /></button>
        </div>
    )
}