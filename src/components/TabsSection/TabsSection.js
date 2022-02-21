import React from "react";
import ImageSlider from "../../Ui-Kit/ImageSlider/ImageSlider";
import TextButton from "../../Ui-Kit/TextButton/TextButton";
import CheckList from "../../Ui-Kit/CheckList/CheckList";

import "../../styles/technicalClasses.scss";
import "./TabsSection.scss";

function TabsSection() {
  const tabSectionText = {
    itemList: {
      columnOne: [
        {
          id: 1,
          text: "Powerful projector",
        },
        {
          id: 2,
          text: "Powerful computer",
        },
        {
          id: 3,
          text: "Сamera",
        },
        {
          id: 4,
          text: "Motion sensors",
        },
        {
          id: 5,
          text: "Remote control projector",
        },
      ],
      columnTwo: [
        {
          id: 1,
          text: "Keyboard",
        },
        {
          id: 2,
          text: "Mouse",
        },
        {
          id: 3,
          text: "Software",
        },
        {
          id: 4,
          text: "Soft white floor",
        },
        {
          id: 5,
          text: "24 geometric shapes",
        },
      ],
    },
  };
  return (
    <section className="tabs-section _container">
      <h2 className="tabs-section__title">Types of floors</h2>
      <p className="tabs-section__text tabs-section__text_center">
        An interactive floor is a game system that consists of a sensor,
        projector, computer and special software.
      </p>
      <div className="tabs-section__tabs-container">
        <TextButton className="tabs-section__tab" text="1. Ceiling version" />
        <TextButton className="tabs-section__tab" text="2. Mobile version" />
        <TextButton className="tabs-section__tab" text="3. Floor stand " />
      </div>
      <div className="tabs-section__content">
        <div className="tabs-section__photos">
          <ImageSlider />
        </div>
        <div className="tabs-section__description">
          <h3 className="tabs-section__subtitle">Ceiling version</h3>
          <p className="tabs-section__text">
            The color of the case can be any.
          </p>
          <p className="tabs-section__text">
            The play area depends on the height of your ceiling and can be up to
            14 m². We will calculate for you individual interactive floor
            projects for kindergartens, schools and entertainment institutions.
          </p>
          <p className="tabs-section__text">The set includes:</p>
          <div className="tabs-section__list">
            <CheckList list={tabSectionText.itemList.columnOne} />
            <CheckList list={tabSectionText.itemList.columnTwo} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabsSection;
