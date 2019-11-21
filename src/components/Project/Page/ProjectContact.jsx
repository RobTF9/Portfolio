import React from "react";
import styled from "styled-components";
import ContactForm from "../../Contact/ContactForm";
import ContactCard from "../../Contact/ContactCard";
import colors from "../../../shared/colors";
import { FullContainer } from "../../Common/Container";

const ProjectContact = ({ color, client, link }) => {
  return (
    <ContactContainer color={color} client={client}>
      <ContactCard
        link={link}
        title="Want to know more?"
        copy="Take a look at the project or say hello!"
      />
      <ContactForm name="Contact Form" />
    </ContactContainer>
  );
};

const ContactContainer = styled(FullContainer)`
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, 0.25);
  background-color: ${({ color }) => color};
  color: ${({ client }) =>
    client === "MyEthvault" ? `#02394A` : colors.white};

  input,
  textarea {
    border: ${({ client }) =>
      client === "MyEthvault" ? `0.1rem solid #02394A` : null};
  }

  a {
    color: ${({ client }) =>
      client === "MyEthvault" ? `#02394A` : colors.white} !important;
  }

  label {
    p {
      background-color: ${({ color }) => color};
    }
  }

  button {
    color: ${({ color }) => color};
    background-color: ${({ client }) =>
      client === "MyEthvault" ? `#02394A` : colors.white};
  }
`;

export default ProjectContact;
