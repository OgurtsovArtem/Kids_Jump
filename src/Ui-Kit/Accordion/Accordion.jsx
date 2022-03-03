import React from "react";
import "./Accordion.scss";
import AccordionItem from "../AccordionItem/AccordionItem";
function Accordion({ className, showOnlyOnce = true, list = [], show = null }) {
  const [activeIndex, setActiveIndex] = React.useState(show);

  return (
    list &&
    list.map((item, index) => {
      return (
        <AccordionItem
          className={className}
          key={item.id}
          showOnlyOnce={showOnlyOnce}
          data={item}
          index={index}
          activeIndex={activeIndex}
          showOnce={() => {
            setActiveIndex(index);
          }}
        />
      );
    })
  );
}

export default Accordion;
