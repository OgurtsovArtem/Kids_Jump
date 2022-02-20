import React from "react";
import Icon from "../Icon/Icon";
import "./ViewButton.scss"

function ViewButton({ className, text }) {

  return (
    <button className={`${className} view-button`}>
      <Icon className="view-button__icon" name="eye" />
      <p className="view-button__text">{text}</p>
    </button>
  );
}

export default ViewButton;