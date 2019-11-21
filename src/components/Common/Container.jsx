import styled from "styled-components";
import breakpoints from "../../shared/breakpoints";
import { animated } from "react-spring";

const Container = styled(animated.div)`
  position: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-row-gap: 8rem;
  margin-bottom: 8rem;

  ${breakpoints.tablet} {
    grid-column: 3 / 11;
  }
`;

export const ContentContainer = styled(Container)`
  grid-row-gap: 2rem;
  margin-top: 30vh;

  ${breakpoints.desktop} {
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
