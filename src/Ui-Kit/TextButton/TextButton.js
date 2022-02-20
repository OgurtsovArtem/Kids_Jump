import React from "react";
import "./TextButton.scss"

function TextButton({ className, text }) {

  return (
    <button className={`${className} text-button`}>
      <p className="text-button__text">{text}</p>
    </button>
  );
}

export default TextButton;