import { forwardRef, MutableRefObject, useRef } from "react";
import Button from "../../../../components/base/Buttons/Button";
import Checkbox from "../../../../components/base/Checkbox/Checkbox";
import Heading from "../../../../components/base/Heading/Heading";
import Spacing from "../../../../components/base/Spacing/Spacing";
import TextInput from "../../../../components/base/TextInput/TextInput";
import "./ContactForm.css";

// interface IProps {
//   data: any;
//   ref: any;
// }

const ContactForm = forwardRef((data: any, ref: any) => {
  const {
    title,
    firstNamePlaceholder,
    lastNamePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    messagePlaceholder,
    GDPRCheckboxText,
    buttonText,
  } = data.data;

  console.log(data.buttonText);

  // function scrollToContactSection() {
  //   if (contact === undefined) {
  //     throw Error;
  //   } else {
  //     contact.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }
  // console.log(ref.current);
  // const contactReference = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref}>
      <Spacing size="lg" />
      <div className="row center-xs contactFormContainer" id="contactForm">
        <section className="contactForm col-xs-12 col-md-12 col-lg-10">
          <div className="row start-sm">
            <Heading type="h2" text={title} theme="dark" accent={false} />
          </div>
          <form className="padding-top-8 row">
            <div className="col-xs-12 col-md-4 contactForm__details">
              <TextInput label={firstNamePlaceholder} icon="person" />
              <TextInput label={lastNamePlaceholder} icon="person" />
              <TextInput label={emailPlaceholder} icon="mail" />
              <TextInput label={phonePlaceholder} icon="phone" />
            </div>
            <div className="col-xs-12 col-md-8  contactForm__message">
              <TextInput
                label={messagePlaceholder}
                theme="full-height"
                type="textarea"
              />
            </div>
          </form>
          <div className="row justify-between align-center padding-top-8">
            <div className="col-xs-12 col-md-8">
              <Checkbox label={GDPRCheckboxText} />
            </div>
            <div className="col-xs-12 center-xs col-md-4 end-md">
              <Button label={buttonText} type="secondary-white" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default ContactForm;
