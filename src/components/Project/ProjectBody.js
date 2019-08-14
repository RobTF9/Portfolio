import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";

const Body = styled.article`
  grid-column: 2 / 12;
  margin: 5rem 0;

  ${breakpoints.desktop} {
    grid-column: 3 / 11;
    margin: 15rem 0;
  }

  * {
    box-shadow: none !important;
  }

  p {
    margin-bottom: 2.5rem;
  }

  .FullWidthImage {
    margin-bottom: 10rem;

    ${breakpoints.desktop} {
      margin-bottom: 20rem;
    }
  }

  .OffsetContent {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    margin-bottom: 5rem;

    p,
    a {
      font-weight: 400;
    }

    a {
      color: ${colors.blue};
    }

    img {
      max-width: 30rem;
    }

    .title {
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
      font-weight: 200;
      border-bottom: 0.05rem ${colors.white} solid;
    }

    ${breakpoints.tablet} {
      grid-template-columns: 1fr 3fr;
      grid-column-gap: 2rem;
      padding-top: 5rem;
      margin-bottom: 10rem;
      border-top: 0.05rem ${colors.white} solid;

      .title {
        border-bottom: none;
      }
    }

    ${breakpoints.desktop} {
      grid-template-columns: 2fr 2fr;
    }
  }
`;

export default Body;
