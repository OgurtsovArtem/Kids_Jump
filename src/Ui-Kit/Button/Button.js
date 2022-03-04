import React from "react";
import Icon from "../Icon/Icon";
import "./Button.scss";

function Button({ className, text, type = "button" }) {
  return (
    <button className={`${className} button`} type={type}>
      <p className="button__text">{text}</p>
      <Icon className="button__icon" name="arrow-with-point" />
    </button>
  );
}

export default Button;
