import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import components
import AdvantagesCard from "../../Ui-Kit/AdvantagesCard/AdvantagesCard";
import SliderControls from "../../Ui-Kit/SliderControls/SliderControls";

// Import style
import "../../styles/technicalClasses.scss";
import "./AdvantagesDescription.scss";

function AdvantagesTopSection({ className }) {
  const [swiperActive, setSwiperActive] = React.useState(false);

  const pagination = {
    clickable: true,
    type: "fraction",
    el: ".advantages-description__pagination",
    currentClass: `swiper-pagination-current advantages__pagination`,
    totalClass: `swiper-pagination-total advantages__pagination`,
  };
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    375: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1025: {
      enabled: false,
    },
  };
  const navigation = {
    prevEl: ".advantages-description__button-left",
    nextEl: ".advantages-description__button-right",
  };
  React.useEffect(() => {
    const changeStatus = () => {
      setSwiperActive(window.matchMedia("(max-width: 1024px)").matches);
    };
    window.addEventListener("resize", changeStatus);
    return () => {
      window.removeEventListener("resize", changeStatus);
    };
  });

  React.useEffect(() => {
    setSwiperActive(window.matchMedia("(max-width: 1024px)").matches);
  }, []);

  return (
    <div className={`${className} advantages-description`}>
      <div className="advantages-description__block">
        <h2 className="advantages-description__title">
          Our <br /> Advantages
        </h2>
        <p className="advantages-description__text">
          <b>KIDSjumpTECH</b> is part of the HighProject group of companies,
          which has implemented more than 3,000 interactive floor installation
          projects worldwide.
        </p>
        <p className="advantages-description__text">
          Due to the large number of projects our team has identified all the
          current problems and needs of the market, so we offer our customers
          the most optimal equipment.
        </p>
      </div>
      <div className="advantages-description__cards">
        {swiperActive ? (
          <>
            <Swiper
              className="advantages-description__swiper"
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation={navigation}
              pagination={pagination}
              centeredSlides={true}
              breakpoints={breakpoints}
            >
              <SwiperSlide>
                <AdvantagesCard
                  className="advantages-description__card"
                  iconName="launch-1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdvantagesCard
                  className="advantages-description__card"
                  iconName="launch-1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdvantagesCard
                  className="advantages-description__card"
                  iconName="launch-1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <AdvantagesCard
                  className="advantages-description__card"
                  iconName="launch-1"
                />
              </SwiperSlide>
            </Swiper>
            <SliderControls
              className="advantages-description__controls"
              paginationClassName={pagination.el.replace(/\./g, "")}
              leftButtonClassName={navigation.prevEl.replace(/\./g, "")}
              rightButtonClassName={navigation.nextEl.replace(/\./g, "")}
            />
          </>
        ) : (
          <>
            <AdvantagesCard
              className="advantages-description__card"
              iconName="launch-1"
            />
            <AdvantagesCard
              className="advantages-description__card"
              iconName="launch-1"
            />
            <AdvantagesCard
              className="advantages-description__card"
              iconName="launch-1"
            />
            <AdvantagesCard
              className="advantages-description__card"
              iconName="launch-1"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AdvantagesTopSection;
