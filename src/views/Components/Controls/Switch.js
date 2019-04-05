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

const getColorSwitcher = (props) => {
  if (props.disable) {
    if (props.checked) {
      return props.theme.colors.text;
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${props => props.disable ? 'not-allowed' : 'pointer'};
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


const Switch = ({ preventDefault, stopPropagation, ...props }) => (
  <Wrapper
    {...props} onClick={
      (e) => {
        if (preventDefault) e.preventDefault();
        if (stopPropagation) e.stopPropagation();
        if (!props.disable) props.onClick(!props.checked);
      }}
  >
    <SwitchWrapper {...props}>
      <Switcher {...props} />
    </SwitchWrapper>
    {!!props.title && <Label {...props}>{props.title}</Label>}
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
