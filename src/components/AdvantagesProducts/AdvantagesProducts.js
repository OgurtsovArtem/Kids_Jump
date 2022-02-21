import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import components
import ViewButton from "../../Ui-Kit/ViewButton/ViewButton";
import ArrowButtonMedium from "../../Ui-Kit/ArrowButtonMedium/ArrowButtonMedium";
import AdvantagesCardProducts from "../../Ui-Kit/AdvantagesCardProducts/AdvantagesCardProducts";
// Import styles
import "./AdvantagesProducts.scss";

function AdvantagesProducts() {
  const breakpoints = {
    0: {
      spaceBetween: 10,
    },
    375: {
      spaceBetween: 20,
    },
    500: {
      spaceBetween: 30,
    },
    800: {
      spaceBetween: 40,
    },
    1025: {
      spaceBetween: 50,
    },
  };

  const navigation = {
    prevEl: ".advantages-products__button-left",
    nextEl: ".advantages-products__button-right",
  };

  return (
    <div className="advantages-products">
      <div className="advantages-products__header">
        <div className="advantages-products__description-block">
          <h2 className="advantages-products__title">
            <span className="advantages-products__title-number">90+</span>
            <span className="advantages-products__title-text">Games</span>
          </h2>
          <p className="advantages-products__text">
            More than 90 educational games and applications are included with
            the delivery of the interactive floor.
          </p>
        </div>
        <ViewButton
          className="advantages-products__view-button"
          text="view  all games"
        />
      </div>
      <div className="advantages-products__cards">
        <Swiper
          className="_swiper _off-overflow _auto-width advantages-products__swiper"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={"auto"}
          navigation={navigation}
          // centeredSlides={true}
          breakpoints={breakpoints}
        >
          <SwiperSlide>
            <AdvantagesCardProducts className="advantages-products__card" />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantagesCardProducts className="advantages-products__card" />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantagesCardProducts className="advantages-products__card" />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantagesCardProducts className="advantages-products__card" />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantagesCardProducts className="advantages-products__card" />
          </SwiperSlide>
        </Swiper>
        <div className="advantages-products__buttons">
          <ArrowButtonMedium className="advantages-products__button-left" />
          <ArrowButtonMedium className="advantages-products__button-right" />
        </div>
      </div>
    </div>
  );
}

export default AdvantagesProducts;
