import React from 'react';
import Icon from '../Icon/Icon';
import "./ArrowButtonSmall.scss"

function ArrowButtonSmall({ className, onClick }) {

  return (
    <button className={`${className} arrow-button-small`} onClick={onClick}>
      <Icon className="arrow-button-small__icon" name="arrow-with-point" />
    </button>
  );
}

export default ArrowButtonSmall;
