import AdvantagesCard from "../../Ui-Kit/AdvantagesCard/AdvantagesCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "./GetSection.scss";
import SliderControls from "../../Ui-Kit/SliderControls/SliderControls";
function GetSection() {
  const cards = [
    {
      id: 1,
      iconName: "launch-1",
    },
    {
      id: 2,
      iconName: "launch-1",
    },
    {
      id: 3,
      iconName: "launch-1",
    },
    {
      id: 4,
      iconName: "launch-1",
    },
  ];

  const breakpoints = {
    0: {
      spaceBetween: 30,
    },
    520: {
      spaceBetween: 40,
    },
    788: {
      spaceBetween: 60,
    },
  };
  const navigation = {
    prevEl: ".get-section__button-left",
    nextEl: ".get-section__button-right",
  };
  const pagination = {
    clickable: true,
    type: "fraction",
    el: ".get-section__pagination",
    currentClass: `swiper-pagination-current get-section__pagination`,
    totalClass: `swiper-pagination-total get-section__pagination`,
  };

  return (
    <section className="get-section">
      <div className="get-section__container _container">
        <h2 className="get-section__title">What do you get?</h2>
        <p className="get-section__text get-section__text_center">
          In an increasingly competitive environment, educational institutions
          are constantly searching for new techniques that can be used in
          education to increase the prestige of their institution. The use of an
          interactive floor or wall will allow you to:
        </p>
        <div className="get-section__cards">
          <Swiper
            className="get-section__swiper _swiper _auto-width"
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            freeMode={true}
            breakpoints={breakpoints}
            navigation={navigation}
            pagination={pagination}
          >
            {cards
              ? cards.map((card) => {
                  return (
                    <SwiperSlide key={card.id}>
                      <AdvantagesCard
                        className="get-section__card"
                        iconName={card.iconName}
                      />
                    </SwiperSlide>
                  );
                })
              : null}
            <SliderControls
              className="get-section__controls"
              leftButtonClassName={navigation.prevEl.replace(/\./g, "")}
              rightButtonClassName={navigation.nextEl.replace(/\./g, "")}
              paginationClassName={pagination.el.replace(/\./g, "")}
            />
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default GetSection;
