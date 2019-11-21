import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../shared/colors";
import spacings from "../../shared/spacings";

export const TextInput = ({ id, required, label }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <input type="text" name={id} id={id} required={required} />
  </Input>
);

export const EmailInput = ({ id, required, label }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <input type="email" name={id} id={id} required={required} />
  </Input>
);

export const TextArea = ({ id, required, label }) => (
  <Input>
    <label htmlFor={id}>
      <p>{label}</p>
    </label>
    <textarea name={id} id={id} required={required} />
  </Input>
);

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${spacings.medium};

  p {
    padding: 0 1rem;
    width: fit-content;
    background-color: ${colors.black};
    transform: translate(${spacings.xSmall}, ${spacings.xSmall});
  }

  input,
  textarea {
    border: 0.1rem solid ${colors.white};
    color: ${colors.white};
    padding: ${spacings.small};
  }
`;

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};
