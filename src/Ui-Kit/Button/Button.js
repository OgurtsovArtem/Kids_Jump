import React from "react";
import Icon from "../Icon/Icon";
import "./Button.scss"

function Button({ className, text }) {

  return (
    <button className={`${className} button`}>
      <p className="button__text">{text}</p>
      <Icon className="button__icon" name="arrow-with-point" />
    </button>
  );
}

export default Button;