// import React from 'react'

// function Carousel() {
//   return (
//     <div>Carousel</div>
//   )
// }

// export default Carousel

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import LeftNavigation from "../Button/LeftNavigation";
import RightNavigation from "../Button/RightNavigation";

// import './styles.css';
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};

export default function App({ data, type }) {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation
        // className="mySwiper"
        initialSlide={0}
        slidesPerView={'auto'}
        spaceBetween={30}
        allowTouchMove
      >
        <Controls data={data} />
        {/* <LeftNavigation/> */}
        {/* <RightNavigation/> */}
        {data.map((item) => {
          return (
            // <div key={item.id}>
              <SwiperSlide key={item.id} className={styles.swiperSlide}>
                <Card data={item} type={type} />
              </SwiperSlide>
            //  {/* </div>  */}
          );
        })}
      </Swiper>
    </div>
  );
}
