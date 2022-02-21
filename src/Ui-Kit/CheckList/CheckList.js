import React from "react";

// Style
import "./CheckList.scss";
import icon from "../../icons/icon-check.svg";

function CheckList({ list }) {
  return (
    <ul className="check-list">
      {list
        ? list.map((item, index) => {
            return (
              <li className="check-list__item" key={item.id}>
                <img className="check-list__icon" src={icon} alt="" />
                <p className="check-list__text">{item.text}</p>
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default CheckList;
