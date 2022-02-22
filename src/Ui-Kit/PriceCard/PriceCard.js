import Button from "../Button/Button";
import img from "../../images/PriceSection/price-card.jpg";

import "./PriceCard.scss";

function PriceCard({ className, text, price }) {
  return (
    <div className={`${className} price-card`}>
      <div className="price-card__image-box">
        <img className="price-card__image" src={img} alt="product" />
      </div>
      <p className="price-card__text">Ceiling version</p>
      <p className="price-card__price">$ 2.400</p>
      <Button className="price-card__button" text="I want to buy" />
    </div>
  );
}

export default PriceCard;
