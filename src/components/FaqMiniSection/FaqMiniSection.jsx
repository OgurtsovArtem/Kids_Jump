import Accordion from "../../Ui-Kit/Accordion/Accordion";

function FaqMiniSectiono() {
  const data = [
    {
      id: 1,
      title: "1. How to install the floor?",
      text: "Let's first understand what kind of floor you will need to install. If the mobile interactive floor does not suit you and you want to use a stationary installation, then in order to install an interactive floor KIDSjumpTECH in a metal case you also do not need to do anything, our technician will do everything for you at this absolutely free of charge.",
    },
    {
      id: 2,
      title: "2. How to order?",
      text: "Let's first understand what kind of floor you will need to install. If the mobile interactive floor does not suit you and you want to use a stationary installation, then in order to install an interactive floor KIDSjumpTECH in a metal case you also do not need to do anything, our technician will do everything for you at this absolutely free of charge.",
    },
    {
      id: 3,
      title: "3. Do you have an installation guide?",
      text: "Let's first understand what kind of floor you will need to install. If the mobile interactive floor does not suit you and you want to use a stationary installation, then in order to install an interactive floor KIDSjumpTECH in a metal case you also do not need to do anything, our technician will do everything for you at this absolutely free of charge.",
    },
    {
      id: 4,
      title: "4. How many games come with KIDSjumpTECH?",
      text: "Let's first understand what kind of floor you will need to install. If the mobile interactive floor does not suit you and you want to use a stationary installation, then in order to install an interactive floor KIDSjumpTECH in a metal case you also do not need to do anything, our technician will do everything for you at this absolutely free of charge.",
    },
    {
      id: 5,
      title: "5. What’s your return policy?",
      text: "Let's first understand what kind of floor you will need to install. If the mobile interactive floor does not suit you and you want to use a stationary installation, then in order to install an interactive floor KIDSjumpTECH in a metal case you also do not need to do anything, our technician will do everything for you at this absolutely free of charge.",
    },
  ];
  return (
    <section className="faq-mini-section">
      <div className="faq-mini-section__container">
        <h2 className="faq-mini-section__title">FAQ</h2>
        <h3 className="faq-mini-section__subtitle">
          Nulla facilisi nullam vehicula ipsum. Purus sit amet volutpat
          consequat mauris nunc congue nisi vitae.
        </h3>
        <div className="faq-mini-section___lsit">
          <Accordion
            className={"faq-mini-section___accordion-item"}
            list={data}
          />
        </div>
      </div>
    </section>
  );
}

export default FaqMiniSectiono;
