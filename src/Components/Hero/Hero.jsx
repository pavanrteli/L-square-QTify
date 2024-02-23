import React from 'react'
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero_headphones.png";

function Hero() {

  return (
    <div className={styles.Hero}>
        <div className={styles.fontColor}>
            <h2>100 Thousands Songs, add-free</h2>
            <h2>Over thousands podcast episodes</h2>
        </div>
        <div>
            <img src={HeroImage} alt="HeroImage" width="212px" />
        </div>
    </div>
  )
}

export default Hero