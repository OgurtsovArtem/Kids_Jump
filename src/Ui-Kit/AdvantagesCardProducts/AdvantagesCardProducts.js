import React from 'react'
import img from '../../images/advantages/games_1.jpg'
import './AdvantagesCardProducts.scss'
function AdvantagesCardProducts({ className }) {
  return (
    <div className={`${className} advantages-card-products`}>
      <div className='advantages-card-products__body'>
        <div className='advantages-card-products__content'>
          <div className='advantages-card-products__image-block'>
            <img className='advantages-card-products__image' src={img} alt="card" />
            <div className='advantages-card-products__age'>
              <span className='advantages-card-products__number'></span>
            </div>
          </div>
          <ul className='advantages-card-products__tags'>
            <li className='advantages-card-products__tag'>adventure</li>
            <li className='advantages-card-products__tag'>collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdvantagesCardProducts