import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowButtonSmall from "../../Ui-Kit/ArrowButtonSmall/ArrowButtonSmall";
import BoxSlide from "../../Ui-Kit/BoxSlide/BoxSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import styles
import "./OtherDevelopmentsSection.scss";

function OtherDevelopmentsSection() {
  const navigation = {
    prevEl: ".other-development-section__button-left",
    nextEl: ".other-development-section__button-right",
  };
  const pagination = {
    clickable: true,
    type: "fraction",
    el: ".other-development-section__pagination",
    currentClass: `swiper-pagination-current other-development-section__pagination-current`,
    totalClass: `swiper-pagination-total other-development-section__pagination-total`,
  };
  return (
    <section className="other-development-section">
      <div className="other-development-section__container _container">
        <h2 className="other-development-section__title">Other developments</h2>
        <h3 className="other-development-section__subtitle">
          Nulla facilisi nullam vehicula ipsum. Purus sit amet volutpat
          consequat mauris nunc congue nisi vitae.
        </h3>
        <div className="other-development-section__body">
          <ArrowButtonSmall
            className={
              "other-development-section__button-left other-development-section__button-left_desctop"
            }
          />
          <Swiper
            className="other-development-section__swiper"
            modules={[Navigation, Pagination]}
            spaceBetween={150}
            slidesPerView={1}
            navigation={navigation}
            pagination={pagination}
            centeredSlides={true}
          >
            <SwiperSlide>
              <BoxSlide />
            </SwiperSlide>
            <SwiperSlide>
              <BoxSlide />
            </SwiperSlide>
          </Swiper>
          <ArrowButtonSmall
            className={
              "other-development-section__button-right other-development-section__button-left_desctop"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default OtherDevelopmentsSection;
