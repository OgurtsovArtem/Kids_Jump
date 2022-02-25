import ViewList from "../../Ui-Kit/ViewList/ViewList";
import img from "../../images/PackageSection/image.jpg";
import "./PackageSection.scss";

function PackageSection() {
  const packageSectionText = {
    itemList: {
      columnOne: [
        {
          id: 1,
          text: "Body",
        },
        {
          id: 2,
          text: "Projector",
        },
        {
          id: 3,
          text: "Computer",
        },
        {
          id: 4,
          text: "Software",
        },
        {
          id: 5,
          text: "Motion sensor",
        },
      ],
      columnTwo: [
        {
          id: 1,
          text: "The tablet or keyboard control",
        },
        {
          id: 2,
          text: "Instruction and training manual",
        },
        {
          id: 3,
          text: "White mobile floor",
        },
        {
          id: 4,
          text: "Geometric shapes",
        },
      ],
    },
  };
  return (
    <section className="package-section">
      <div className="package-section__container _container">
        <h2 className="package-section__title">What is in the package?</h2>

        <p className="package-section__text">
          As a general rule, our company delivers turnkey equipment to
          customers; this means that you do not need to add anything, install,
          configure, modify, etc., you just need to plug the cable into the
          outlet and start using the equipment.
        </p>
        <p className="package-section__text">
          It is made for your convenience, so that our customers are not
          overloaded with unnecessary information and are not distracted from
          the educational process.
        </p>
        <p className="package-section__text"> The set includes:</p>
        <div className="package-section__box">
          <div className="package-section__list-box">
            <ViewList
              className="package-section__list"
              list={packageSectionText.itemList.columnOne}
            />
            <ViewList
              className="package-section__list"
              list={packageSectionText.itemList.columnTwo}
            />
          </div>
          <div className="package-section__image-box">
            <img src={img} alt="info" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageSection;
