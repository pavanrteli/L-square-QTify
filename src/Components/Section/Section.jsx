import { Grid } from '@mui/material';
import React from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';

function Section({title, data, type}) {

  return (
    <>
      <div className={styles.flexContainer} style={{border:title==="Songs"?"1px solid #34C94B":""}}>
        <div className={styles.section1}>
          <h3 className={styles.topAlbums}>{title==="Top Albums"?"Top Albums":title==="New Albums"?"New Albums":"Songs"}</h3>
          <h4 className={styles.collapse}>Collapse</h4>
        </div>
        <div className={styles.topAlbumsSection}>
          {console.log(data.length)}
        { 
          data.map((item)=>{
            const {id}=item;
            // console.log(id,image,follows);
            return (
                <div key={id}>
                    <Card data={item} type={type}/>
                </div>
            )
          }) 
        }
        {/* {data=[]} */}
        </div>
      </div>
    </>
  )
}

export default Section




      {/* <Grid container className={styles.gridContainer}>
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
      </Grid> */}