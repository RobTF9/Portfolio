import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";
import { transitions } from "../../shared/transitions";
import spacings from "../../shared/spacings";

export const PrimaryButton = ({ text }) => (
  <Button type="submit">
    <p>{text}</p>
    <ButtonSpan />
  </Button>
);

const Button = styled.button`
  cursor: pointer;
  position: relative;
  z-index: 0;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: ${spacings.small} ${spacings.large};
  float: right;
  width: 100%;

  ${breakpoints.tablet} {
    width: auto;
  }
`;

const ButtonSpan = styled.span`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.05;
  transform: scale3d(1, 0, 1);
  transform-origin: 50% 100%;
  ${transitions.mediumSnap}

  ${Button}:hover & {
    transform: scale3d(1, 1, 1);
  }
`;

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};
