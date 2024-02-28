import React from 'react'
import Chip from '@mui/material/Chip';
import styles from "./Card.module.css";

function Card({data, type}) {
  // console.log(data,"ddddddddddddddd");
  const {image, follows, title}=data;
  if(type==="album"){
  return (
        <div className={styles.wrapper}>
            <img src={image} alt="Card Logo" className={styles.imageBorder} width="100%" height="170px" />
            <div className={styles.chipBorder}>
                <Chip className={styles.chip}
                style={{ backgroundColor: '#121212',color:'#FFFFFF'}}
                size="small"
                label={`${follows} Follows`} />
            </div>
            <div name={title} style={{color:'#FFFFFF'}}>
              {title}
            </div>
        </div>
  )
  } else{
  const {image, likes, title}=data;

    return (
          <div className={styles.wrapper}>
              <img src={image} alt="Card Logo" className={styles.imageBorder} width="100%" height="170px" />
              <div className={styles.chipBorder}>
                  <Chip className={styles.chip}
                  style={{ backgroundColor: '#121212',color:'#FFFFFF'}}
                  size="small"
                  label={`${likes} Likes`} />
              </div>
              <div name={title} style={{color:'#FFFFFF'}}>
                {title}
              </div>
          </div>
    )

  }
}

export default Card
