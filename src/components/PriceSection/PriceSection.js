import PriceCard from "../../Ui-Kit/PriceCard/PriceCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "../../styles/technicalClasses.scss";
import "./PriceSection.scss";

function PriceSection() {
  return (
    <section className="price-section">
      <div className="price-section__container _container">
        <h2 className="price-section__title">Price</h2>
        <p className="price-section__text">
          KIDSjumpTECH provides free delivery in the USA in a short time, as
          usually all equipment is in stock.
        </p>
        <div className="price-section__cards-container">
          <Swiper
            className="price-section__swiper _swiper _auto-width"
            spaceBetween={40}
            slidesPerView="auto"
            freeMode={true}
          >
            <SwiperSlide>
              <PriceCard className="price-section__card" />
            </SwiperSlide>
            <SwiperSlide>
              <PriceCard className="price-section__card" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
