import Button from "../../Ui-Kit/Button/Button";
import Input from "../../Ui-Kit/Input/Input";
import "./BonusSection.scss";

function BonusSection() {
  return (
    <section className="bonus-section _container">
      <div className="bonus-section__container ">
        <h2 className="bonus-section__title">Bonus</h2>
        <h3 className="bonus-section__subtitle">
          10% discount on a purchase immediately after test drive
        </h3>
        <form className="bonus-section__form">
          <div className="bonus-section__box">
            <Input
              classname={"bonus-section__input"}
              placeholder={"Your name"}
            />
            <Input
              classname={"bonus-section__input"}
              placeholder={"Your phone number"}
            />
            <Button className={"bonus-section__button"} text={"Get my bonus"} />
          </div>
        </form>
      </div>
    </section>
  );
}

export default BonusSection;
