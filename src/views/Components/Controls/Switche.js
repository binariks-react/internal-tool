import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getColorBackGround = (props) => {
  if (props.disable) {
    if (props.checked) {
      return '#e1e5eb';
    }
    return '#fff';
  }
  if (props.checked) {
    return '#17c671';
  }
  return '#fff';
};

const getColorSwitcher = (props) => {
  if (props.disable) {
    if (props.checked) {
      return '#becad6';
    }
    return '#e1e5eb';
  }
  if (props.checked) {
    return '#fff';
  }
  return '#e1e5eb';
};


const getColorBorder = (props) => {
  if (props.disable) {
    return '#e1e5eb';
  }
  if (props.checked) {
    return '#17c671';
  }
  return '#e1e5eb';
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
  //left: .1875rem;
  //left: 1.25rem;
  width: .75rem;
  height: .75rem;
  background-color: ${getColorSwitcher};
  border-radius: 6.25rem;
  transition: 0.2s ease-in-out;
`;

const Label = styled.label`
  cursor: ${props => props.disable ? 'not-allowed' : 'pointer'};
  line-height: 15px;
  color: #5a6169;
  font-size: 15px;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`;


const Switch = ({ preventDefault, stopPropagation, ...props }) => (
  <Wrapper
    {...props} onClick={
      (e) => {
        if (preventDefault) e.preventDefault();
        if (stopPropagation) e.stopPropagation();
        props.onClick(!props.checked);
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
};

const defaultProps = {
  checked: false,
  onClick: () => {},
  title: '',
  preventDefault: true,
  stopPropagation: true,
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
