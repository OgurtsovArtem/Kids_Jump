import PriceCard from "../../Ui-Kit/PriceCard/PriceCard";

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
          <PriceCard className="price-section__card" />
          <PriceCard className="price-section__card" />
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
