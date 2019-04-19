import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Range from './Range';
import Controller from './Controller';

const SingleSlider = (props) => {
  const { sliderWidth, rangeValue, controllerValue, rangeColour, showValue, getRange } = props;
  const convertedOneValueToPixelPresentation = (rangeValue / sliderWidth);

  // eslint-disable-next-line max-len
  const getControllerPosition = controllerValueForCalculating => Math.ceil(controllerValueForCalculating / convertedOneValueToPixelPresentation);

  const [controllerPosition, setControllerPosition] = useState(getControllerPosition(controllerValue));

  const handleControllerChange = (newControllerPosition) => {
    setControllerPosition(newControllerPosition);

    getRange({
      leftPoint: 0,
      rightPoint: (newControllerPosition * convertedOneValueToPixelPresentation).toFixed(2),
    });
  };

  return (
    <SliderWrapper data-test="single-slider" sliderWidth={sliderWidth} showValue={showValue} >
      <Range
        sliderWidth={sliderWidth}
        leftPoint={0}
        rightPoint={controllerPosition}
        rangeColour={rangeColour}
      />
      <Controller
        initialValue={controllerPosition}
        handleControllerChange={handleControllerChange}
        minValue={0}
        maxValue={sliderWidth}
        showValue={showValue}
        sliderWidth={sliderWidth}
        rangeValue={rangeValue}
      />
    </SliderWrapper>
  );
};

SingleSlider.defaultProps = {
  controllerValue: 0,
};

SingleSlider.propTypes = {
  sliderWidth: PropTypes.number.isRequired,
  rangeValue: PropTypes.number.isRequired,
  controllerValue: PropTypes.number,
  rangeColour: PropTypes.string.isRequired,
  showValue: PropTypes.bool.isRequired,
  getRange: PropTypes.func.isRequired,
};

export default SingleSlider;

const SliderWrapper = styled.div.attrs({ 'data-test': 'slider-wrapper' })`
  position: relative;
  margin: ${ props => props.showValue ? '55px 0 35px' : '35px 0'};
  width: ${ props => props.sliderWidth}px;
`;
