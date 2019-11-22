import styled from "styled-components";
import { animated } from "react-spring";

import breakpoints from "../../shared/breakpoints";
import spacings from "../../shared/spacings";

const Container = styled(animated.div)`
  position: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-row-gap: ${spacings.large};
  margin-bottom: ${spacings.large};

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`;

export const ContentContainer = styled(Container)`
  grid-row-gap: ${spacings.small};
  margin-top: ${spacings.large};

  ${breakpoints.tablet} {
    margin-top: ${spacings.xLarge};
  }

  ${breakpoints.desktop} {
    margin-top: ${spacings.xxLarge};
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: min-content;

    h1 {
      grid-column: span 1;
    }

    article,
    p {
      grid-column-start: 2;
    }
  }
`;

export const FullContainer = styled.div`
  position: relative;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: calc(100vh / 6) 0;

  div {
    grid-column: 2 / 12;

    ${breakpoints.tablet} {
      grid-column: 3 / 11;
    }

    ${breakpoints.desktop} {
      grid-column: 3 / 6;
    }
  }

  form {
    grid-column: 2 / 12;

    ${breakpoints.tablet} {
      grid-column: 3 / 11;
    }

    ${breakpoints.desktop} {
      grid-column: 7 / 11;
    }
  }
`;

export default Container;
