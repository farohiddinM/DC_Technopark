import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import style from './hard.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Rasm import bolyapti";
import phone2 from '../Bizning Manzil/Photo/2.png'
import phone3 from '../Bizning Manzil/Photo/3.png'
import phone4 from '../Bizning Manzil/Photo/4.png'
import phone5 from '../Bizning Manzil/Photo/5.png'
import phone6 from '../Bizning Manzil/Photo/6.png'
import phone7 from '../Bizning Manzil/Photo/7.png'



// import required modules
import { FreeMode, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        className={style.swipers}
        slidesPerView={4}
        spaceBetween={25}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className={style.swiperSlides}>
            <img src={phone2} />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlides}>
            <img src={phone3} />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlides}>
            <img src={phone4} />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlides}>
            <img src={phone5} />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlides}>
            <img src={phone6} />
        </SwiperSlide>
        <SwiperSlide className={style.swiperSlides}>
            <img src={phone7} />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
