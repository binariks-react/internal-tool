import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getColorBackGround = (props) => {
  if (props.disable) {
    if (props.checked) {
      return props.theme.colors.border;
    }
    return props.theme.colors.white;
  }
  if (props.checked) {
    return props.theme.colors.success;
  }
  return props.theme.colors.white;
};

const getColorBackGroundDisabled = (props) => {
  if (props.disable) {
    return props.theme.colors.lightGrey;
  }
};

const getColorSwitcher = (props) => {
  if (props.disable) {
    if (props.checked) {
      return props.theme.colors.darkGrey;
    }
    return props.theme.colors.border;
  }
  if (props.checked) {
    return props.theme.colors.white;
  }
  return props.theme.colors.border;
};


const getColorBorder = (props) => {
  if (props.disable) {
    return props.theme.colors.border;
  }
  if (props.checked) {
    return props.theme.colors.success;
  }
  return props.theme.colors.border;
};

const getLeftToSwitcher = (props) => {
  if (props.disable) {
    if (props.checked) {
      return 1.25;
    }
    return 0.1875;
  }
  if (props.checked) {
    return 1;
  }
  return 0.1875;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${props => props.disable ? 'not-allowed' : 'pointer'};
  &:active > div > div {
    width: ${props => props.disable ? 0.75 : 1}rem;
    left: ${getLeftToSwitcher}rem;
  }
  &:active > div {
    box-shadow: none;
    background-color: ${getColorBackGroundDisabled};
  }
`;

const SwitchWrapper = styled.div`
  background-color: ${getColorBackGround};
  border-radius: 100px;
  border: .0625rem solid ${getColorBorder} ;
  width: 2.1875rem;
  height: 1.125rem;
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 5px;
  transition: 0.3s;
  outline: none;
  box-shadow: ${props => !props.disable ? props.theme.shadows.focus.switch : 'none'};
`;

const Switcher = styled.div`
  content: '';
  position: absolute;
  left: ${props => props.checked ? 1.25 : 0.1875}rem;
  width: .75rem;
  height: .75rem;
  background-color: ${getColorSwitcher};
  border-radius: 6.25rem;
  transition: 0.2s ease-in-out;
`;

const Label = styled.label`
  cursor: ${props => props.disable ? 'not-allowed' : 'pointer'};
  line-height: 15px;
  color: ${props => props.theme.colors.text};
  font-size: 15px;
`;


const Switch = ({ preventDefault, stopPropagation, onClick, disable, checked, title, ...props }) => (
  <Wrapper
    {...props}
    disable={disable}
    checked={checked}
    onClick={
      (e) => {
        if (preventDefault) e.preventDefault();
        if (stopPropagation) e.stopPropagation();
        if (!disable) onClick(!checked);
      }}
  >
    <SwitchWrapper checked={checked} disable={disable}>
      <Switcher checked={checked} disable={disable} />
    </SwitchWrapper>
    {!!title && <Label checked={checked} disable={disable}>{title}</Label>}
  </Wrapper>
);


const propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  title: PropTypes.string,
  preventDefault: PropTypes.bool,
  stopPropagation: PropTypes.bool,
  disable: PropTypes.bool,
};

const defaultProps = {
  checked: false,
  onClick: () => {
  },
  title: '',
  preventDefault: true,
  stopPropagation: true,
  disable: false,
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
