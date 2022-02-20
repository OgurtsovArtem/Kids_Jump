import React from 'react';
import Button from '../../Ui-Kit/Button/Button';
import Social from '../../Ui-Kit/Social/Social';
// Images
import imgLarge from '../../images/Intro/intro-bg_1920.png'
import imgMedium from '../../images/Intro/intro-bg_1440.png'
import imgSmall from '../../images/Intro/intro-bg_768.png'
import imgMini from '../../images/Intro/intro-bg_375.png'
// Styles
import "../../styles/technicalClasses.scss"
import "./Intro.scss"

function Intro() {
  return (
    <section className="intro">
      <picture className="intro__background">
        <source srcSet={imgLarge} media="(min-width: 1441px)" />
        <source srcSet={imgMedium} media="(min-width: 769px)" />
        <source srcSet={imgSmall} media="(min-width: 376px)" />
        <source srcSet={imgMini} media="(min-width: 0px)" />
        <img className="intro__background-image" src={imgLarge} alt="background" />
      </picture>

      <div className="intro__container _container">
        <Social className="intro__social" />
        <div className="intro__content">
          <div className="intro__text-container>">
            <h1 className="intro__title">Turn any space into a virtual playground</h1>
            <p className="intro__text">an interactive projector game
              system that makes entertainment lively,
              hygienic, educational, and above all,
              a ton of fun</p>

          </div>
          <Button className="intro__button" text={"Get started for free"} />
        </div>
      </div>
    </section>
  );
}

export default Intro;
