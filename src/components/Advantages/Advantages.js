import React from 'react'
// Modules
import AdvantagesSection from '../AdvantagesDescription/AdvantagesDescription';
import AdvantagesProducts from '../AdvantagesProducts/AdvantagesProducts';
import background from "../../icons/Union.svg"
// Styles
import "./Advantages.scss";

function Advantages() {

  return (
    <section className="advantages">
      <span className='advantages__background'></span>
      {/* <img className='advantages__background' src={background} alt="background" /> */}
      <div className="advantages__container _container">
        <AdvantagesSection className="advantages__top" />
        <AdvantagesProducts />
      </div>
    </section>
  );
}

export default Advantages;
