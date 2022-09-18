import {
  forwardRef,
  MutableRefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { SMTPClient } from "emailjs";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import Text, { TextSize } from "../../../../components/base/Text/Text";
import Button from "../../../../components/base/Buttons/Button";
import Checkbox from "../../../../components/base/Checkbox/Checkbox";
import Heading, {
  HeadingSizes,
  HeadingWeights,
} from "../../../../components/base/Heading/Heading";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../../components/base/Spacing/VerticalSpacing";
import TextInput from "../../../../components/base/TextInput/TextInput";
import "./ContactForm.css";
import VisitorContext from "../../../../contexts/VisitorContext/VisitorContext";
import { globalContactFormContent } from "../../../../constants/globalConstants";

// interface IProps {
//   data: any;
//   ref: any;
// }

const ContactForm = forwardRef((data?: any, ref?: any) => {
  const { language } = useContext(VisitorContext);

  const {
    heading,
    firstNamePlaceholder,
    lastNamePlaceholder,
    emailPlaceholder,
    phonePlaceholder,
    messagePlaceholder,
    GDPRCheckboxText,
    buttonText,
  } = globalContactFormContent[language];

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
  const [sent, setSent] = useState<boolean>(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_EvopackDesk",
        "evopack_contact",
        ref.current,
        "TjoMd8URgskSd49x1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.currentTarget.reset();
    setSent(!sent);
  };

  return (
    <div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <form className="row center-xs contactFormContainer" id="contactForm">
        <section className="contactForm col-xs-12 col-md-12 col-lg-10">
          {sent ? (
            <>
              <Heading
                level="h2"
                size={HeadingSizes.xl}
                text="Thank you for your getting in touch"
                theme="dark"
                weight={HeadingWeights.bold}
                accent={false}
              />
              <Text theme="dark" size={TextSize.xl}>
                We'll get back to you as soon as possible.
              </Text>
              <VerticalSpacing size={SpacingSizes.xl40px} />
              <Button
                label="Send another?"
                type="secondary-white"
                handleClick={() => setSent(false)}
              />
            </>
          ) : (
            <>
              <div className="row start-sm">
                <Heading
                  level="h2"
                  size={HeadingSizes.xl}
                  text={heading}
                  theme="dark"
                  accent={false}
                />
              </div>
              <form
                className="padding-top-8 row"
                action="mailto:contact@yourdomain.com"
                method="POST"
                encType="multipart/form-data"
                name="ContactForm"
                // id="ContactForm"
                ref={ref}
                onSubmit={sendEmail}
              >
                <div className="col-xs-12 col-md-4 contactForm__details">
                  <TextInput
                    label={firstNamePlaceholder}
                    icon="person"
                    handleChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                      setMessage({ fname: e.currentTarget.value })
                    }
                    fieldID="name"
                  />
                  <TextInput
                    label={lastNamePlaceholder}
                    icon="person"
                    handleChange={(e) =>
                      setMessage({ lname: e.currentTarget.value })
                    }
                    fieldID="company"
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
                    fieldID="message"
                  />
                </div>
                <div className="col-xs-12 col-md-8 padding-top-8">
                  <Checkbox label={GDPRCheckboxText} inputID="GDPRConsent" />
                </div>
                <div className="col-xs-12 center-xs col-md-4 end-md padding-top-8">
                  <input
                    type="submit"
                    className={
                      "secondary-white"
                        ? `button button--secondary-white col-xs end-md`
                        : "button end-md"
                    }
                    // form="ContactForm"
                    placeholder="Submit"
                  ></input>
                  {/* <Button label={buttonText} type="secondary-white" /> */}
                </div>
              </form>
            </>
          )}
        </section>
      </form>
    </div>
  );
});

export default ContactForm;
