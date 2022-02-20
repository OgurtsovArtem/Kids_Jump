import React from 'react';
import ArrowButtonSmall from '../ArrowButtonSmall/ArrowButtonSmall';
import './SliderControls.scss'

function SliderControls({
  className,
  paginationClassName,
  leftButtonClassName,
  rightButtonClassName
}) {
  return (
    <div className={`${className} controls`}>
      <ArrowButtonSmall className={`${leftButtonClassName} controls__button-left`} />
      {paginationClassName && <div className={`${paginationClassName} controls__pagination`}></div>}
      <ArrowButtonSmall className={`${rightButtonClassName} controls__button-right`} />
    </div>
  );
}

export default SliderControls;
