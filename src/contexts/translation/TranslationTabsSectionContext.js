import React from "react";

export const TranslationTabsSection = {
  en: {
    title: "Types Of Floors",
    subtitle: "Ceiling version",
    text: {
      0: "An interactive floor is a game system that consists of a sensor, projector, computer and special software.",
      1: "The color of the case can be any.",
      2: "The play area depends on the height of your ceiling and can be up to 14 m². We will calculate for you individual interactive floor projects for kindergartens, schools and entertainment institutions.",
      3: "The set includes:",
    },
    itemList: {
      columnOne: [
        {
          id: 1,
          text: "Powerful projector",
        },
        {
          id: 2,
          text: "Powerful computer",
        },
        {
          id: 3,
          text: "Сamera",
        },
        {
          id: 4,
          text: "Motion sensors",
        },
        {
          id: 5,
          text: "Remote control projector",
        },
      ],
      columnTwo: [
        {
          id: 1,
          text: "Keyboard",
        },
        {
          id: 2,
          text: "Mouse",
        },
        {
          id: 3,
          text: "Software",
        },
        {
          id: 4,
          text: "Soft white floor",
        },
        {
          id: 5,
          text: "24 geometric shapes",
        },
      ],
    },
  },
};

export const TranslationTabsSectionContext = React.createContext();
