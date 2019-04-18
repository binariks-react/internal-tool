import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SingleSlider from './SingleSlider';
import DoubleSlider from './DoubleSlider';

import { SLIDER_TYPE } from './type';

const Slider = props => (
  <React.Fragment>
    {props.type === SLIDER_TYPE.SINGLE &&
      <SingleSlider
        {...props}
        controllerValue={
          props.controllerValue >= 0 && props.controllerValue <= props.rangeValue ?
            props.controllerValue : props.controllerValue > props.rangeValue ? props.rangeValue : 0
        }
      />
    }
    {props.type === SLIDER_TYPE.DOUBLE &&
      <DoubleSlider
        {...props}
        leftControllerValue={props.leftControllerValue >= 0 ? props.leftControllerValue : 0}
        rightControllerValue={props.rightControllerValue <= props.rangeValue ?
          props.rightControllerValue :
          props.rangeValue}
      />
    }
    {
      props.type !== SLIDER_TYPE.SINGLE &&
      props.type !== SLIDER_TYPE.DOUBLE &&
      (<ErrorMessage>You didn't pass normal type of range</ErrorMessage>)
    }
  </React.Fragment>
);

Slider.defaultProps = {
  rangeColour: 'primary',
  showValue: false,
};

Slider.propTypes = {
  sliderWidth: PropTypes.number.isRequired,
  rangeValue: PropTypes.number.isRequired,
  type: PropTypes.oneOf([SLIDER_TYPE.SINGLE, SLIDER_TYPE.DOUBLE]).isRequired,
  // eslint-disable-next-line react/require-default-props
  controllerValue: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  leftControllerValue: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  rightControllerValue: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  minDistanceBetweenControllers: PropTypes.number,
  rangeColour: PropTypes.string,
  getRange: PropTypes.func.isRequired,
  showValue: PropTypes.bool,
};

export default Slider;

const ErrorMessage = styled.div``;
