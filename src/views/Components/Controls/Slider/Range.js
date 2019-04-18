import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Range = (props) => {
  const { sliderWidth, leftPoint, rightPoint, rangeColour } = props;

  return (
    <RangeWrapper>
      <RangeLine
        leftPoint={leftPoint}
        rightPoint={rightPoint}
        sliderWidth={sliderWidth}
        rangeColour={rangeColour}
      />
    </RangeWrapper>
  );
};

Range.defaultProps = {
  leftPoint: 0,
};

Range.propTypes = {
  sliderWidth: PropTypes.number.isRequired,
  leftPoint: PropTypes.number,
  rightPoint: PropTypes.number.isRequired,
  rangeColour: PropTypes.string.isRequired,
};

export default Range;

const RangeWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 5px;
  background: #eceeef;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(90, 97, 105, 0.1);
`;

const RangeLine = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.leftPoint}px;
  right: ${props => props.sliderWidth - props.rightPoint - 5}px;
  height: 5px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors[props.rangeColour]};
`;
