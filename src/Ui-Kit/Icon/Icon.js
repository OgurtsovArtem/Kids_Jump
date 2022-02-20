import React from 'react';
import sprite from '../../icons/sprite/sprite.svg';

function Icon({
  name,
  className = "",
}) {
  return (
    <svg className={`${className} ${className}_${name} icon`}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  )
}

export default Icon;