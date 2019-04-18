import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CONTROLLER_TYPE } from './type';

const Controller = (props) => {
  const {
    initialValue,
    controllerType,
    handleControllerChange,
    minValue,
    maxValue,
    showValue,
    sliderWidth,
    rangeValue,
  } = props;
  const [controllerPosition, setControllerPosition] = useState(initialValue);
  const [clickedController, setClickedController] = useState(false);
  const [mousePosition, setMousePosition] = useState(NaN);
  const controllerReference = useRef(null);
  const convertedOneValueToPixelPresentation = rangeValue / sliderWidth;
  useEffect(() => {
    const handleMouseDown = (e) => {
      setClickedController(true);
      setMousePosition(e.clientX);
      document.body.style.cursor = 'grabbing';
    };

    const handleTouchStart = (e) => {
      setClickedController(true);
      setMousePosition(e.touches[0].clientX);
    };

    const handleMouseUp = () => {
      if (clickedController) {
        setClickedController(false);
        document.body.style.cursor = 'default';
      }
    };

    const handleTouchEnd = () => {
      if (clickedController) {
        setClickedController(false);
      }
    };

    const controllerMove = (nextPosition) => {
      if (clickedController && mousePosition !== nextPosition) {
        const nextControllerPosition = controllerPosition - (mousePosition - nextPosition);
        if (nextControllerPosition >= minValue && nextControllerPosition <= maxValue) {
          setControllerPosition(nextControllerPosition);
          setMousePosition(nextPosition);
          handleControllerChange(nextControllerPosition, controllerType);
        }
        if (nextControllerPosition <= minValue && controllerPosition !== minValue) {
          setControllerPosition(minValue);
          handleControllerChange(minValue, controllerType);
        }
        if (nextControllerPosition >= maxValue && controllerPosition !== maxValue) {
          setControllerPosition(maxValue);
          handleControllerChange(maxValue, controllerType);
        }
      }
    };

    const handleMouseMove = (e) => {
      controllerMove(e.clientX);
    };

    const handleTouchMove = (e) => {
      controllerMove(Math.ceil(e.touches[0].clientX));
    };

    controllerReference.current.addEventListener('mousedown', handleMouseDown);
    controllerReference.current.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      controllerReference.current.removeEventListener('mousedown', handleMouseDown);
      controllerReference.current.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [clickedController, mousePosition]);

  return (
    <ControllerWrapper controllerPosition={controllerPosition} tabindex="0">
      <ControllerButton ref={controllerReference} clickedController={clickedController} tabIndex="0">
        {showValue &&
          <ValueContainer clickedController={clickedController} >
            {(controllerPosition * convertedOneValueToPixelPresentation).toFixed(2)}
          </ValueContainer>
        }
      </ControllerButton>
    </ControllerWrapper>
  );
};

Controller.defaultProps = {
  controllerType: CONTROLLER_TYPE.LEFT,
};

Controller.propTypes = {
  initialValue: PropTypes.number.isRequired,
  controllerType: PropTypes.oneOf([CONTROLLER_TYPE.LEFT, CONTROLLER_TYPE.RIGHT]),
  handleControllerChange: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  showValue: PropTypes.bool.isRequired,
  sliderWidth: PropTypes.number.isRequired,
  rangeValue: PropTypes.number.isRequired,
};

export default Controller;

const ControllerWrapper = styled.div.attrs({ 'data-test': 'controller-wrapper' })`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(${ props => props.controllerPosition}px);
`;

const ControllerButton = styled.div.attrs({ 'data-test': 'controller-button' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #e7e9ea;
  transition: 250ms;

  ${(props) => {
    if (props.clickedController) {
      return `
          width: 23px;
          height: 23px;
          transform: translate(-17%, -9px); 
          box-shadow: 0 0 15px rgba(0,123,255,.65), 0 3px 15px rgba(90,97,105,.1), 0 2px 3px rgba(90,97,105,.2);
        `;
    }
    return `
        width: 21px;
        height: 21px;
        transform: translate(-15%, -8px);
        box-shadow: 0 3px 15px rgba(90, 97, 105, .1), 0 2px 3px rgba(90, 97, 105, .2);
      `;
  }
}

  &:active {
    cursor: grabbing;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 7px rgba(0,123,255,.65), 0 3px 15px rgba(90,97,105,.1), 0 2px 3px rgba(90,97,105,.2);
  }
`;

const ValueContainer = styled.div.attrs({ 'data-test': 'controller-text' })`
  position: absolute;
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  line-height: 15px;
  color: #5a6169;
  background-color: #fff; 
  font-weight: 300;
  letter-spacing: 0.03em;
  border-radius: 5px;
  box-shadow: 0 3px 15px rgba(90, 97, 105, .1), 0 2px 3px rgba(90, 97, 105, .2);
  user-select: none;
  transition: 250ms;

  ${ (props) => {
    if (props.clickedController) {
      return `
        font-size: 15px;
        padding: 7px 11px;
      `;
    }
    return `
      font-size: 14px;
      padding: 5px 10px;
    `;
  }}
`;
