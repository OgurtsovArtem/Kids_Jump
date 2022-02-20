import React from 'react';
import Icon from '../Icon/Icon';
import "./AdvantagesCard.scss"

function AdvantagesCard({ className, iconName }) {

  const [changeCard, setChangeCard] = React.useState(false);


  const cardStatus = (event) => {
    console.log()
    event.currentTarget.addEventListener('transitionend', setChangeCard(!changeCard))

  }
  return (
    <div className={`${className} advantages-card`} onClick={cardStatus}>
      <div className="advantages-card__content">
        <div className={`advantages-card__front ${changeCard ? "_active " : ''}`}>
          <button className="advantages-card__button">
            <Icon className="advantages-card__change-icon" name="more-info-circle" />
          </button>
          <div className="advantages-card__body-img">
            <Icon className="advantages-card__body-icon" name={iconName} />
          </div>

          <p className="advantages-card__text">Comprehensive development of children</p>
        </div>
        <div className={`advantages-card__back ${changeCard ? "_active " : ''}`}>
          <button className="advantages-card__button">
            <Icon className="advantages-card__change-icon" name="close-circle" />
          </button>
          <p className="advantages-card__text">Comprehensive development of children</p>
        </div>
      </div>
    </div>
  );
}

export default AdvantagesCard;
