import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const getValue = ({ max, min, value }) => {
  if (max<min) {
    return 100;
  }
  if (value < min) {
    return 0;
  }
  return (Math.abs(value-min)/Math.abs(max-min))*100;
};

const ProgressBarWrapper = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 1.25rem;
  background-color: #f5f5f6;
  box-shadow: inset 0 0.1rem 0.1rem rgba(90,97,105,.15);
  overflow:hidden
`;

const ProgressBarLine = styled.div`
  height: 100%;
  width: ${getValue}%;
  line-height: .625rem;
  color: #fff;
  background-color: ${props => props.theme.colors[props.color]};
  transition: width .6s ease;
`;

const ProgressBar = props => (
  <ProgressBarWrapper {...props}>
    <ProgressBarLine {...props} />
  </ProgressBarWrapper>
);

const defaultProps = {
  min: 0,
  max: 100,
  value: 0,
};

const propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;

