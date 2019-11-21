import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import colors from "../../shared/colors";
import spacings from "../../shared/spacings";

const TitleCard = ({ title, copy, link, linkText, icon }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{copy}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText} {icon}
        </a>
      ) : null}
    </Card>
  );
};

const Card = styled.div`
  margin-bottom: ${spacings.medium};

  h1 {
    margin-bottom: ${spacings.small};
  }

  p {
    margin-bottom: ${spacings.small};
  }

  a {
    color: ${colors.blue};

    svg {
      transform: translate(0.75rem, 0.25rem);
    }
  }
`;

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired,
  link: PropTypes.string,
  linkText: PropTypes.string,
  icon: PropTypes.object,
};

export default TitleCard;
