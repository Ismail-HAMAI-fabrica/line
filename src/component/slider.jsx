import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import React from 'react'
import bgc from './poster/bgc.png'
import i1 from './poster/crealla.jpg'
import i2 from './poster/joker.jpg'
import i3 from './poster/71v2Tz+8ToL.jpg'
import i4 from './poster/uk_imax_online_1sht.jpg'
import i5 from './poster/image.jpg'
import i6 from './poster/91jrKX9xjQL.jpg'
import ii1 from './poster/Fight_club_RVB_72.jpg'
import ii2 from './poster/forrest.jpg'
import ii3 from './poster/s-l1600.jpg'
import ii4 from './poster/madmax.jpg'
import ii5 from './poster/yourName.jpg'
import ii6 from './poster/silenVoice.jpg'


function Slider() {
  return (
    <div className="containers">
      <img src={bgc} className='bgc' />
     
      <h1 className="heading">Most Watch Movies</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={i1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={i2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={i3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={i4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ii4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={i6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ii5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ii6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ii2} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider