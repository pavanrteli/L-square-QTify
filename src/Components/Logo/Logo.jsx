import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo(){
    return <img src={LogoImage} alt="Logo Icon" className={styles.Logo} width="75"/>
}
