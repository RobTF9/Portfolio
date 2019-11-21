import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import spacings from "../../shared/spacings";

const ExperienceCard = ({ experience }) => {
  const from = experience.from.split(" ").join("/");
  const to = experience.to.split(" ").join("/");
  return (
    <Card>
      <Company>{experience.title}</Company>
      <Date>
        {from} - {!experience.current ? to : "Present"}
      </Date>
      <p>{experience.description}</p>
    </Card>
  );
};

const Card = styled.article`
  position: relative;
  padding: ${spacings.small} 0;
`;

const Company = styled.p`
  font-weight: 900;
`;

const Date = styled.p`
  opacity: 0.6;
`;

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceCard;
