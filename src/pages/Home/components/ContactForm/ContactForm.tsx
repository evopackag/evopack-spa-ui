import { forwardRef, MutableRefObject, useRef, useState } from "react";
import { SMTPClient } from "emailjs";
import emailjs from "@emailjs/browser";
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

  const [message, setMessage] = useState<any>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
    GDPRAccepted: false,
    mailSent: false,
    error: null,
  });

  const sendEmail = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "evo_gmail",
        "evopack_contact_form",
        ref.current,
        "B6SI4O34Hd5aSQLgx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log(ref.current);

  return (
    <div ref={ref} onSubmit={() => sendEmail}>
      <Spacing size="lg" />
      <div className="row center-xs contactFormContainer" id="contactForm">
        <section className="contactForm col-xs-12 col-md-12 col-lg-10">
          <div className="row start-sm">
            <Heading type="h2" text={title} theme="dark" accent={false} />
          </div>
          <form
            className="padding-top-8 row"
            action="mailto:contact@yourdomain.com"
            method="POST"
            encType="multipart/form-data"
            name="ContactForm"
          >
            <div className="col-xs-12 col-md-4 contactForm__details">
              <TextInput
                label={firstNamePlaceholder}
                icon="person"
                handleChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  setMessage({ fname: e.currentTarget.value })
                }
                fieldID="fname"
              />
              <TextInput
                label={lastNamePlaceholder}
                icon="person"
                handleChange={(e) =>
                  setMessage({ lname: e.currentTarget.value })
                }
                fieldID="lname"
              />
              <TextInput
                label={emailPlaceholder}
                icon="mail"
                handleChange={(e) =>
                  setMessage({ email: e.currentTarget.value })
                }
                fieldID="mail"
              />
              <TextInput
                label={phonePlaceholder}
                icon="phone"
                handleChange={(e) =>
                  setMessage({ phone: e.currentTarget.value })
                }
                fieldID="phone"
              />
            </div>
            <div className="col-xs-12 col-md-8  contactForm__message">
              <TextInput
                label={messagePlaceholder}
                theme="full-height"
                type="textarea"
                handleChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  setMessage({ message: e.currentTarget.value })
                }
                fieldID={message.message}
              />
            </div>
          </form>
          <div className="row justify-between align-center padding-top-8">
            <div className="col-xs-12 col-md-8">
              <Checkbox label={GDPRCheckboxText} />
            </div>
            <div className="col-xs-12 center-xs col-md-4 end-md">
              <input
                type="submit"
                className={
                  "secondary-white"
                    ? `button button--secondary-white col-xs end-md`
                    : "button end-md"
                }
                placeholder="Submit"
              ></input>
              {/* <Button label={buttonText} type="secondary-white" /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
});

export default ContactForm;
