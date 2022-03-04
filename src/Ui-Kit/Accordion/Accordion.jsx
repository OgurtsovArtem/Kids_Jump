import React from "react";
import "./Accordion.scss";
import AccordionItem from "../AccordionItem/AccordionItem";
function Accordion({
  className,
  showOnlyOnce = true,
  list = [],
  showElementIndex = null,
}) {
  const [activeIndex, setActiveIndex] = React.useState(showElementIndex);
  return Array.isArray(list)
    ? list.map((item, index) => {
        return (
          <AccordionItem
            className={className}
            key={item.id}
            showOnlyOnce={showOnlyOnce}
            data={item}
            index={index}
            activeIndex={activeIndex}
            initRerender={() => {
              setActiveIndex(index);
            }}
          />
        );
      })
    : SyntaxError("<AccordionItem>: the { list } element is not an array");
}

export default Accordion;
