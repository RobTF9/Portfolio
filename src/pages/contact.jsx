import React from "react";
import SEO from "../components/Layout/SEO";
import { ContentContainer } from "../components/Common/Container";
import ContactForm from "../components/Contact/ContactForm";
import { animations } from "../shared/transitions";
import TitleCard from "../components/Common/TitleCard";

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
        <TitleCard title="Contact" copy="Leave a message and say hello!" />
        <ContactForm name="Contact Form" />
      </ContentContainer>
    </>
  );
};

export default Contact;
