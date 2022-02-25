import AdvantagesCard from "../../Ui-Kit/AdvantagesCard/AdvantagesCard";
import "./WarrantySection.scss";

function WarrantySection() {
  return (
    <section className="warranty-section">
      <div className="warranty-section__container _container">
        <h2 className="warranty-section__title">
          <span className="warranty-section__title_accent">3 years</span>
          <br />
          <span className="warranty-section__title_text">of warranty</span>
        </h2>
        <div className="warranty-section__right-box">
          <h3 className="warranty-section__subtitle">
            Warranty on all equipment
          </h3>

          <p className="warranty-section__text">
            As part of this warranty we will replace the equipment that broke
            down for free and very quickly.
          </p>
          <p className="warranty-section__text">
            On the phone with our specialist, we can quickly diagnose what is
            broken, and we take the equipment for repair, and for the period of
            repair we give you replacement equipment.
          </p>
          <p className="warranty-section__text">
            We give such an extended warranty and do not charge for it. Our
            equipment and components the most reliable.
          </p>
          <AdvantagesCard
            className="warranty-section__card warranty-section__card_mobile"
            iconName="launch-1"
          />
        </div>
        <div className="warranty-section__cards">
          <AdvantagesCard
            className="warranty-section__card"
            iconName="launch-1"
          />
          <AdvantagesCard
            className="warranty-section__card warranty-section__card_desctop"
            iconName="launch-1"
          />
        </div>
      </div>
    </section>
  );
}

export default WarrantySection;
