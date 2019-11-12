import React, { useEffect } from "react";
import styled from "styled-components";
import breakpoints from "../../../shared/breakpoints";
import colors from "../../../shared/colors";

const ProjectContent = ({ content, color, client }) => {
  return (
    <ProjectContentContainer
      color={color}
      client={client}
      dangerouslySetInnerHTML={{ __html: content }}
    ></ProjectContentContainer>
  );
};

const ProjectContentContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  display: grid;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 6rem;

  ${breakpoints.tablet} {
    grid-column: 1 / -1;
  }

  .ImageWithCaption {
    position: relative;
    grid-column: 1 / 10;

    .Caption {
      position: absolute;
      padding: 4rem;
      bottom: calc(-100vh / 12);
      right: calc(-100vh / 12);
      max-width: calc((100vh / 12) * 6);
      background-color: ${({ color }) => color};
      color: ${({ client }) =>
        client === "MyEthvault" ? `#02394A` : colors.white};
      margin-top: 2rem;
      box-shadow: 0 0 3rem rgba(0, 0, 0, 0.25);
    }
  }

  .full {
    margin-bottom: 6rem;

    ${breakpoints.desktop} {
      margin-bottom: 12rem;
    }
  }

  .gatsby-resp-image-background-image {
    background-image: none !important;
    box-shadow: none !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
  }
`;

export default ProjectContent;
