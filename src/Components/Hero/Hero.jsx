import React from 'react'
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero_headphones.png";

function Hero() {

  return (
    <div className={styles.Hero}>
        <div className={styles.fontColor}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={HeroImage} alt="HeroImage" width="212px" />
        </div>
    </div>
  )
}

export default Hero