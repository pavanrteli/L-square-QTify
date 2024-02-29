import React, { useEffect, useState } from 'react'
import {ReactComponent as RightArrow} from '../../assets/RightArrow.svg';
import styles from './RightNavigation.module.css';
import { useSwiper, useSwiperSlide } from 'swiper/react';

function RightNavigation() {
    const swiper=useSwiper();
    const [isEnd, SetIsEnd]=useState(swiper.isEnd);

    useEffect(()=>{
        swiper.on("slideChange",function(){
            SetIsEnd(swiper.isEnd);
        })
    },[])

  return (
    <div className={styles.rightNavigation}>
        {!isEnd && <RightArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default RightNavigation