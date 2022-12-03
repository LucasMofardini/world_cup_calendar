import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ImageLogo from '../../Assets/images/2022_FIFA_World_Cup.svg.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./style_calendar.css";

// import required modules
import { FreeMode, Navigation } from "swiper";

const Calendar = () => {
  
  const loadInfos = async () => {
    const res = await fetch('https://copa22.medeiro.tech/matches');
    const data = await res.json();
    console.log(data)

  } 
  useEffect(() => {
    loadInfos()
  },[]);

  return (
    <>
    <section className="section-calendar">
      <div className="container-header-calendar">
        <img className="img-logo-header-calendar" src={ImageLogo} alt="" /> <h1>CALENDÁRIO</h1>
      </div>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        rewind={true}
        navigation={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </section>
    </>
  );
};

export default Calendar;
