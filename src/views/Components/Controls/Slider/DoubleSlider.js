import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Range from './Range';
import Controller from './Controller';
import { CONTROLLER_TYPE } from './type';

const DoubleSlider = (props) => {
  const {
    sliderWidth,
    rangeValue,
    leftControllerValue,
    rightControllerValue,
    minDistanceBetweenControllers,
    rangeColour,
    showValue,
    getRange,
  } = props;

  const convertedOneValueToPixelPresentation = (rangeValue / sliderWidth);

  const getControllerPosition = controllerValue => Math.ceil(controllerValue / convertedOneValueToPixelPresentation);

  // eslint-disable-next-line max-len
  const getMinDistanceBetweenControllers = () => Math.ceil(minDistanceBetweenControllers / convertedOneValueToPixelPresentation);

  const calculateBorderCollision = (controllerType, positionOfNextController) => {
    const minDistanceBetweenControllersInPixels = getMinDistanceBetweenControllers();
    switch (controllerType) {
    case CONTROLLER_TYPE.LEFT: {
      return positionOfNextController - Math.ceil(minDistanceBetweenControllersInPixels / 2);
    }
    case CONTROLLER_TYPE.RIGHT: {
      return positionOfNextController + Math.ceil(minDistanceBetweenControllersInPixels / 2);
    }
    default: {
      throw new Error('We didn\'t get controller type');
    }
    }
  };

  const [leftController, setLeftController] = useState({
    position: getControllerPosition(leftControllerValue),
    minValue: 0,
    maxValue: calculateBorderCollision(CONTROLLER_TYPE.LEFT, getControllerPosition(rightControllerValue)),
  });
  const [rightController, setRightController] = useState({
    position: getControllerPosition(rightControllerValue),
    minValue: calculateBorderCollision(CONTROLLER_TYPE.RIGHT, getControllerPosition(leftControllerValue)),
    maxValue: sliderWidth,
  });

  const handleControllerChange = (controllerPosition, controllerType) => {
    switch (controllerType) {
    case CONTROLLER_TYPE.LEFT: {
      setLeftController({
        ...leftController,
        position: controllerPosition,
        maxValue: calculateBorderCollision(controllerType, rightController.position),
      });
      setRightController({
        ...rightController,
        minValue: calculateBorderCollision(controllerType, controllerPosition),
      });
      break;
    }
    case CONTROLLER_TYPE.RIGHT: {
      setLeftController({
        ...leftController,
        maxValue: calculateBorderCollision(controllerType, controllerPosition),
      });
      setRightController({
        ...rightController,
        position: controllerPosition,
        minValue: calculateBorderCollision(controllerType, leftController.position),
      });
      break;
    }
    default: {
      return new Error('Problem with controllers');
    }
    }
    getRange({
      leftPoint: 0,
      rightPoint: (controllerPosition * convertedOneValueToPixelPresentation).toFixed(2),
    });
  };

  return (
    <SliderWrapper sliderWidth={sliderWidth} showValue={showValue} >
      <Range
        id="tickmarks"
        sliderWidth={sliderWidth}
        leftPoint={leftController.position}
        rightPoint={rightController.position}
        rangeColour={rangeColour}
      />
      <Controller
        initialValue={leftController.position}
        controllerType={CONTROLLER_TYPE.LEFT}
        handleControllerChange={handleControllerChange}
        minValue={leftController.minValue}
        maxValue={leftController.maxValue}
        showValue={showValue}
        sliderWidth={sliderWidth}
        rangeValue={rangeValue}
      />
      <Controller
        initialValue={rightController.position}
        controllerType={CONTROLLER_TYPE.RIGHT}
        handleControllerChange={handleControllerChange}
        minValue={rightController.minValue}
        maxValue={rightController.maxValue}
        showValue={showValue}
        sliderWidth={sliderWidth}
        rangeValue={rangeValue}
      />

    </SliderWrapper>
  );
};

export default DoubleSlider;

DoubleSlider.defaultProps = {};

DoubleSlider.propTypes = {
  sliderWidth: PropTypes.number.isRequired,
  rangeValue: PropTypes.number.isRequired,
  leftControllerValue: PropTypes.number.isRequired,
  rightControllerValue: PropTypes.number.isRequired,
  minDistanceBetweenControllers: PropTypes.number.isRequired,
  rangeColour: PropTypes.string.isRequired,
  getRange: PropTypes.func.isRequired,
  showValue: PropTypes.bool.isRequired,
};

const SliderWrapper = styled.div`
  position: relative;
  margin: ${ props => props.showValue ? '55px 0 35px' : '35px 0'};
  width: ${ props => props.sliderWidth}px;
`;
