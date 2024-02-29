import React, { useEffect, useState } from 'react'
import {ReactComponent as LeftArrow} from '../../assets/LeftArrow.svg';
import styles from './LeftNavigation.module.css';
import { useSwiper, useSwiperSlide } from 'swiper/react';

function LeftNavigation() {
    const swiper=useSwiper();
    const [isBeginning, SetIsBeginning]=useState(swiper.isBeginning);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            SetIsBeginning(swiper.isBeginning);
        })
    },[])

  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default LeftNavigation