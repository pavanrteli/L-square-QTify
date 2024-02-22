import React from "react";
import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";

function NavBar(){
    return (
        <nav className={styles.NavBar}>
            <Logo/>
            <SearchBar/>
            <Button/>
        </nav>
    );
}

export default NavBar;