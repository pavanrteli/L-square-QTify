import { Grid } from '@mui/material';
import React from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';

function Section({title, data, type}) {

  return (
    <>

      <Grid container className={styles.gridContainer}>
        <Grid item sm={12}>
          <div>
            <h2 className={styles.headerSection}>Top Albums</h2>
          </div>
        </Grid>

        { 
          data.map((val)=>{
            const {id, image, follows, title}=val;
            console.log(id,image,follows);
            return (
                <Grid item key={id} sm={1.71}>
                    <Card cardImage={image} follows={follows} title={title}/>
                </Grid>
            )
          })
          
        }
      </Grid>
    </>
  )
}

export default Section