import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioGroupWrapper = styled.div`
  width: max-content;
  height: max-content;
  background-color: ${props => props.theme.colors.white};
`;

const onChangeRadio = (e, i, activeItem, setActiveItem, getActiveItem) => {
  setActiveItem(i);
  getActiveItem(e.target.value);
};

const getRadioButton = (values, titles, activeItem, setActiveItem, getActiveItem) => (
  titles.map((item, i) => (
    <RadioButton
      key={item}
      title={item}
      value={values[i]}
      checked={i === activeItem}
      onChange={e => onChangeRadio(e, i, activeItem, setActiveItem, getActiveItem)}
    />
  ))
);

const RadioGroup = ({ getActiveItem, values, titles, ...props }) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <RadioGroupWrapper
      values={values}
      titles={titles}
      {...props}
    >
      {getRadioButton(values, titles, activeItem, setActiveItem, getActiveItem)}
    </RadioGroupWrapper>
  );
};


const defaultProps = {
  getActiveItem: () => {},
};

const propTypes = {
  getActiveItem: PropTypes.func,
  values: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
};

RadioGroup.defaultProps = defaultProps;
RadioGroup.propTypes = propTypes;

export default RadioGroup;

