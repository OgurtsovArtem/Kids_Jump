import React from 'react'

import { Navigation, Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderControls from '../SliderControls/SliderControls';
// img
import image from '../../images/ImageSlider/main2.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import styles
import './ImageSlider.scss'


function ImageSlider() {

  const [controlledSwiper, setControlledSwiper] = React.useState(null);

  const breakpoints = {

  }
  const navigation = {
    prevEl: '.image-slider__button-left',
    nextEl: '.image-slider__button-right',
  }
  return (
    <div className="image-slider">

      <Swiper
        className="image-slider__main _swiper _auto-width"
        modules={[Navigation, Pagination, Controller]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={navigation}
        controller={{ control: controlledSwiper }}
      >
        <SwiperSlide>
          <div className="image-slider__image-container">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider__image-container">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider__image-container">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider__image-container">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
        <SliderControls className='image-slider__controls' leftButtonClassName="image-slider__button-left" rightButtonClassName="image-slider__button-right" />
      </Swiper>


      <Swiper
        className="image-slider__mini _swiper _auto-width"
        modules={[Navigation, Controller]}
        spaceBetween={30}
        slidesPerView={2}
        onSwiper={setControlledSwiper}
      >
        <SwiperSlide>
          <div className="image-slider__image-container image-slider__image-container_mini">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider__image-container image-slider__image-container_mini">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider__image-container image-slider__image-container_mini">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-slider__image-container image-slider__image-container_mini">
            <img className="image-slider__img" src={image} alt="slide" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageSlider