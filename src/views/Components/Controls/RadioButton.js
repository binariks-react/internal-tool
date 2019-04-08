import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RadioButtonWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const RadioButtonInput = styled.input`
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
  overflow: visible;
`;

const RadioButtonIcon = styled.span`
  display: inline-block;
  box-sizing: border-box;
  color: #818994;
  width: 1.125rem;
  border-radius: 50%;
  height: 1.125rem;
  background-color: #fff;
  border: 1px solid #e1e5eb;
  transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
  box-shadow: none;
  input:checked + & {
    border: 5px solid #007bff;
  }

  input[type='radio'][|checked][disabled] + & {
    background-color: #818994;
    border: 5px solid #e9ecef;
  }

  input:disabled + & {
    background-color: #e9ecef;
  }
`;

const RadioButtonSpan = styled.span`
  margin-left: 5px;
  color: #5a6169;

  input:disabled ~ &{
    color: #818994;
  }
`;

const RadioButton =	({ defaultChecked, disabled, title }) => (
  <RadioButtonWrapper {...{ disabled }}>
    <RadioButtonInput
      type="radio"
      {...{ defaultChecked, disabled }}
    />
    <RadioButtonIcon />
    <RadioButtonSpan>
      {title || 'radio'}
    </RadioButtonSpan>
  </RadioButtonWrapper>
);

const defaultProps = {
  defaultChecked: false,
  disabled: false,
  title: '',
};

const propTypes = {
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  title: PropTypes.string,
};

RadioButton.defaultProps = defaultProps;
RadioButton.propTypes = propTypes;

export default RadioButton;
