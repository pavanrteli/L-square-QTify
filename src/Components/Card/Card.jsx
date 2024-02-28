import React from 'react'
import Chip from '@mui/material/Chip';
import styles from "./Card.module.css";

function Card({cardImage,follows,title}) {
  // console.log(cardImage,follows,title);
  return (
    // <div>
        <div className={styles.wrapper}>
            <img src={cardImage} alt="Card Logo" className={styles.imageBorder} width="100%" height="170px" />
            <div className={styles.chipBorder}>
                <Chip className={styles.chip}
                style={{ backgroundColor: '#121212',color:'#FFFFFF'}}
                size="small"
                label={`${follows} Follows`} />
            </div>
            <div style={{color:'#FFFFFF'}}>
                {title}
            </div>
        </div>
    // {/* </div> */}
  )
}

export default Card
