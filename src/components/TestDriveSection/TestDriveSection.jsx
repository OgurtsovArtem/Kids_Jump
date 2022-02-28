import ViewButton from "../../Ui-Kit/ViewButton/ViewButton";
import "./TestDriveSection.scss";

function TestDriveSection() {
  return (
    <section className="test-drive-section">
      <div className="test-drive-section__container _container">
        <h2 className="test-drive-section__title">20 days</h2>
        <h3 className="test-drive-section__subtitle"> Free test drive</h3>
        <div className="test-drive-section__description">
          <p className="test-drive-section__text">
            Our company offers a free interactive floor test drive throughout
            the United States. We set up your mobile interactive floor for 20
            days free of charge.
          </p>
          <p className="test-drive-section__text">
            You do not have to install or bore anything, just have our expert
            bring you a mobile interactive floor kit.
          </p>
        </div>

        <ViewButton
          className="test-drive-section__button"
          text="veiw check-list with requirements"
        />
      </div>
    </section>
  );
}

export default TestDriveSection;
