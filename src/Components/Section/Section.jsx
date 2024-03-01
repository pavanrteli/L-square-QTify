import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Section.module.css';
import {useState} from 'react';
import Carousel from '../Carousel/Carousel';
import Filters from '../Filters/Filters';
import { FetchGenres } from '../Api/Api';

function Section({title, data, type}) {
  const [Toggle, setToggle]=useState(true);
  const [index, setIndex]=useState("all");
  // const [filters, setFilters]=useState([{key:"all", label:"All"}]);



  if(type==="songs" && index!=="all"){
     data=data.filter((item)=>{
      if(item.genre.key===index){
        return item;
      }
    })
    // console.log(newData);
  }

  // useEffect(()=>{
  //   console.log("uuuuuuuuuuuuuuuuuuu")
  // },[index])

console.log(index);
  return (
    <>
      <div className={styles.flexContainer} style={{border:title==="Songs"?"1px solid #34C94B":""}}>
        <div className={styles.section1}>
          <h3 className={styles.topAlbums}>{title==="Top Albums"?"Top Albums":title==="New Albums"?"New Albums":"Songs"}</h3>
          {type==="album"?
          <h4 className={styles.collapse} onClick={()=>{setToggle(!Toggle)}}>{Toggle?"Show all":"Collapse"}</h4>
          :""}
        </div>
        {type==="songs" && <Filters index={index} setIndex={setIndex}/>}
        <div className={styles.topAlbumsSection}>
          {/* {console.log(data.length)} */}
        { Toggle?
          <Carousel data={data} type={type}/>:
          data.map((item)=>{
            const {id}=item;
            // console.log(item,"iiiiiiiiiiiiii");
            return (
                <div key={id}>
                    <Card data={item} type={type}/>
                </div>
            )
          }) 
        }

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