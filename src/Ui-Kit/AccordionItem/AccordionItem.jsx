import React from "react";
import img from "../../icons/check-mark-arrow.svg";
import "./AccordionItem.scss";

function AccordionItem({
  className,
  showOnlyOnce,
  activeIndex,
  data,
  index,
  showOnce,
}) {
  // Ссылка на тело аккордиона.
  const [bodyActive, setBodyActive] = React.useState(false);
  // Ссылка на тело аккордиона.
  const body = React.useRef(null);

  function showBody() {
    // Показ только 1 открытого аккордиона.
    if (showOnlyOnce) {
      showOnce();
    }
    //открытие/закрытие
    if (bodyActive) {
      body.current.style.maxHeight = null;
    } else {
      body.current.style.maxHeight = body.current.scrollHeight + "px";
    }
    setBodyActive(!bodyActive);
  }
  // Рендер элементов.
  React.useEffect(() => {
    if (activeIndex === index) {
      body.current.style.maxHeight = body.current.scrollHeight + "px";
      setBodyActive(true);
    } else {
      body.current.style.maxHeight = null;
      setBodyActive(false);
    }
  }, [activeIndex, index]);

  return (
    <div className={`${className ? className : ""} accordion-item`}>
      <button className="accordion-item__button" onClick={showBody}>
        <h3 className="accordion-item__title">{data.title}</h3>
        <img
          className={
            bodyActive
              ? "accordion-item__icon accordion-item__icon_active"
              : "accordion-item__icon"
          }
          src={img}
          alt="arrow"
        />
      </button>
      <div className="accordion-item__body" ref={body}>
        <p className="accordion-item__text">{data.text}</p>
      </div>
    </div>
  );
}

export default AccordionItem;
