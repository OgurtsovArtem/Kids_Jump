import Button from "../../Ui-Kit/Button/Button";
import Icon from "../../Ui-Kit/Icon/Icon";
import Input from "../../Ui-Kit/Input/Input";
import Textarea from "../../Ui-Kit/Textarea/Textarea";

import "./ContactUs.scss";

function ContactUsSection() {
  return (
    <section className="contact-us-section">
      <div className="contact-us-section__container _container">
        <form className="contact-us-section__form">
          <legend className="contact-us-section__legend">
            Questions? Comments? We'd love to hear from you!
          </legend>
          <Input
            className={"contact-us-section__input"}
            placeholder={"Your name"}
            type={"text"}
          />
          <Input
            className={"contact-us-section__input"}
            placeholder={"Your phone number"}
            type={"number"}
          />
          <Textarea
            className={"contact-us-section__texarea"}
            placeholder={"Text your message"}
            type={"text"}
          />
          <Button
            className={"contact-us-section__button"}
            text={"send my question"}
            type={"submit"}
          />
        </form>
        <div className="contact-us-section__info">
          <h2 className="contact-us-section__title">Contact us </h2>

          <p className="contact-us-section__text">
            You can contact our technical support for the lifetime of the
            KIDSjumpTECH interactive floor.
          </p>
          <p className="contact-us-section__text">
            We will respond within minutes, as our technical support works for
            everyone and we have to cater for all time zones.
          </p>
          <p className="contact-us-section__text">
            Technical support includes free game updates.
          </p>
          <a
            className="contact-us-section__social-link"
            href="mailto:supports@test.com"
          >
            <Icon
              className={"contact-us-section__social-icon"}
              name={"launch-1"}
            />
            <p className="contact-us-section__social-text">supports@test.com</p>
          </a>
          <a
            href="tel:+19993334466"
            className="contact-us-section__social-link"
          >
            <Icon
              className={"contact-us-section__social-icon"}
              name={"launch-1"}
            />
            <p className="contact-us-section__social-text">+1 (999) 333-4466</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
