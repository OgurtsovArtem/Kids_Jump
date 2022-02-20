import React from 'react';
import Icon from '../Icon/Icon';
import "./ArrowButtonMedium.scss"

function ArrowButtonMedium({ className, onClick }) {

  return (
    <button className={`${className} arrow-button-medium`} onClick={onClick}>
      <Icon className="arrow-button-medium__icon" name="arrow-with-point" />
    </button>
  );
}

export default ArrowButtonMedium;
