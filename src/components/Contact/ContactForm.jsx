import React from "react";
import PropTypes from "prop-types";

import { PrimaryButton } from "../Common/Buttons";
import { TextInput, EmailInput, TextArea } from "../Common/Inputs";

const ContactForm = ({ name }) => (
  <form
    name={name}
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/"
  >
    {/* These inputs will be entered by bot so filter spam submissions. */}
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value={name} />

    {/* Normal form inputs */}
    <TextInput id="name" label="Your name" required />
    <EmailInput id="email" label="Your email" required />
    <TextArea id="message" label="Message" />
    <PrimaryButton type="submit" text="Send" />
  </form>
);

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactForm;
