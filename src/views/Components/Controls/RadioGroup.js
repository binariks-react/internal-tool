import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RadioButton from './RadioButton';

const RadioGroupWrapper = styled.div`
  width: max-content;
  height: max-content;
  background-color: ${props => props.theme.colors.white};
`;

const onChangeRadio = (e, i, activeItem, setActiveItem, onChange) => {
  setActiveItem(i);
  onChange(e.target.value);
};

const RadioGroup = ({ onChange, values, titles, activeItem, setActiveItem, ...props }) => (
  <RadioGroupWrapper>
    {titles.map((item, i) => (
      <RadioButton
        key={item}
        title={item}
        value={values[i]}
        checked={0 === activeItem}
        onChange={e => onChangeRadio(e, 0, activeItem, setActiveItem, onChange)}
      />
    ))}
  </RadioGroupWrapper>
);


const defaultProps = {
  onChange: () => {},
  activeItem: 0,
  setActiveItem: () => {},
};

const propTypes = {
  activeItem: PropTypes.number,
  setActiveItem: PropTypes.func,
  onChange: PropTypes.func,
  values: PropTypes.array.isRequired,
  titles: PropTypes.array.isRequired,
};

RadioGroup.defaultProps = defaultProps;
RadioGroup.propTypes = propTypes;

export default RadioGroup;

