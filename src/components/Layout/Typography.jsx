import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import breakpoints from "../../shared/breakpoints";

const Typography = props => <Styles {...props} />;

Typography.propTypes = {
  bodyFont: PropTypes.string.isRequired,
  bodySerif: PropTypes.bool,
  bodyWeight: PropTypes.number,
  headerFont: PropTypes.string.isRequired,
  headerSerif: PropTypes.bool,
  headerWeight: PropTypes.number,
};

const Styles = createGlobalStyle`
  *,
  button,
  input,
  label,
  select,
  button,
  textarea {
    font-family: '${({ bodyFont }) => bodyFont}',  ${({ bodySerif }) =>
  bodySerif ? ` serif` : ` sans-serif`};
    font-weight: ${({ bodyWeight }) => (bodyWeight ? bodyWeight : 400)};
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: '${({ headerFont }) => headerFont}',  ${({ headerSerif }) =>
  headerSerif ? ` serif` : ` sans-serif`};;
    font-weight: ${({ headerWeight }) => (headerWeight ? headerWeight : 900)};
  }

  h1 {
    font-size: 3.6rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 2.8rem;
    line-height: 1.1;
  }

  h3 {
    font-size: 2.4rem;
    line-height: 1.1;
  }

  h4 {
    font-size: 1.8rem;
    line-height: 1.1;
  }

  a {
    font-weight: 700;
  }

  ${breakpoints.tablet}{
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    h3 {
      font-size: 2.8rem;
    }
  }

  ${breakpoints.desktop}{
    h1 {
      font-size: 4.8rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3.4rem;
    }
  }
`;

export default Typography;
