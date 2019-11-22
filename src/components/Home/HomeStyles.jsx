import styled from "styled-components";
import { animated } from "react-spring";
import Div100vh from "react-div-100vh";

import breakpoints from "../../shared/breakpoints";
import spacings from "../../shared/spacings";

export const HomeContainer = styled(Div100vh)`
  position: relative;
  grid-column: 2 / 12;
  display: grid;

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`;

export const Text = styled(animated.div)`
  position: absolute;
  top: ${spacings.xLarge};
  left: 0;

  ${breakpoints.desktop} {
    top: ${spacings.xxLarge};
  }

  p {
    margin: ${spacings.xSmall} 0 ${spacings.medium} 0;

    ${breakpoints.desktop} {
      margin: ${spacings.xSmall} 0 ${spacings.large} 0;
    }
  }
`;

export const Image = styled(animated.div)`
  position: absolute !important;
  bottom: 0;
  right: 0;
  width: 50%;
  padding-top: 50%;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  ${breakpoints.desktop} {
    width: 40%;
  }
`;
