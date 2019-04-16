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
  color: ${props => props.theme.colors.secondary};
  width: 1.125rem;
  border-radius: 50%;
  height: 1.125rem;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
  box-shadow: none;
  input:checked + & {
    border: 5px solid ${props => props.theme.colors.primary};
  }

  input[type='radio'][checked][disabled] + & {
    background-color: ${props => props.theme.colors.secondary};
    border: 5px solid ${props => props.theme.colors.lightGrey};
  }

  input:disabled + & {
    background-color: ${props => props.theme.colors.lightGrey};
  }
`;

const RadioButtonSpan = styled.span`
  margin-left: 5px;
  color: ${props => props.theme.colors.secondary};

  input:disabled ~ & {
    opacity: 0.7;
    color: ${props => props.theme.colors.secondary};
  }
`;

const RadioButton = ({ defaultChecked, disabled, title, value, onChange, ...props }) => (
  <RadioButtonWrapper disabled={disabled} {...props}>
    <RadioButtonInput
      type="radio"
      // defaultChecked={defaultChecked}
      value={value}
      disabled={disabled}
      onChange={onChange}
      {...props}
    />
    <RadioButtonIcon {...props} />
    <RadioButtonSpan {...props}>{title}</RadioButtonSpan>
  </RadioButtonWrapper>
);

const defaultProps = {
  onChange: () => {},
  defaultChecked: false,
  disabled: false,
  title: '',
  value: '',
};

const propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  title: PropTypes.string,
  value: PropTypes.string,
};

RadioButton.defaultProps = defaultProps;
RadioButton.propTypes = propTypes;

export default RadioButton;
