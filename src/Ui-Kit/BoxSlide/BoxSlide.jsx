import Icon from "../Icon/Icon";

import img from "../../images/BoxSlide/image.jpg";

import "./BoxSlide.scss";

function BoxSlide() {
  return (
    <div className="box-slider">
      <div className="box-slider__container">
        <h3 className="box-slider__title">Interactive sandbox</h3>
        <div className="box-slider__description">
          <p className="box-slider__text">
            Interactive complex of a table, sandbox, projector, camera and
            software. They combine the possibility of playing in the sand,
            bright interactivity and development through the game.
          </p>
          <p className="box-slider__text">
            Children create different landscapes in the sand. The structure and
            color change depending on the height of the sand. Children see a
            realistic picture of nature: a living volcano, living water.
          </p>
        </div>

        <div className="box-slider__pagination"></div>
        <div className="box-slider__image-box">
          <img className="box-slider__image" src={img} alt="" />
        </div>

        <div className="box-slider__icon-block">
          <div className="box-slider__icon-box">
            <Icon className="box-slider__icon" name={"launch-1"} />
            <p className="box-slider__icon-text">motor skills of hands</p>
          </div>
          <div className="box-slider__icon-box">
            <Icon className="box-slider__icon" name={"launch-1"} />
            <p className="box-slider__icon-text">emotional stability</p>
          </div>
          <div className="box-slider__icon-box">
            <Icon className="box-slider__icon" name={"launch-1"} />
            <p className="box-slider__icon-text">sensory perception</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxSlide;
