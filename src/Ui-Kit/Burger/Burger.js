import "./Burger.scss"
import React from "react";

function Burger({ className }) {

  return (
    <button className={`${className} burger `}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Burger;
