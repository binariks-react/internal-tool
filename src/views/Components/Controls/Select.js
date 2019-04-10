import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  min-width: 7.5rem;
  width: 100%;
`;

const SelectWrapper = styled.select`
  width: 100%;
  padding: .4375rem .75rem;
  flex: 1 1 auto;
  font-size: .8125rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  font-weight: 300;
  border-radius: .25rem;
  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(.27,.01,.38,1.06), border 250ms cubic-bezier(.27,.01,.38,1.06);

  &:hover {
    border-color: ${props => props.theme.colors.hoverColors.border};
  }

  &:focus {
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.white};
    border-color: ${props => props.theme.colors.activeColors.white};
    box-shadow: 0 0.313rem 0.719rem rgba(0,123,255,.1), 0 0.156rem 0.125rem rgba(0,0,0,.06);
  }
`;

const Select = ({ onChangeOption, ...props }) => {
  const changeOption = (e) => {
    const option = props.options.find(op => parseInt(op.value) === parseInt(e.target.value));
    onChangeOption && onChangeOption(option);
  };

  return (
    <Wrapper>
      <SelectWrapper {...props} defaultValue={-1} onChange={changeOption}>
        <option value={-1} disabled hidden>{props.placeholder}</option>
        {props.options && props.options.length > 0 && props.options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </SelectWrapper>
    </Wrapper>);
};

Select.defaultProps = {
  placeholder: 'Select option',
  onChangeOption: () => {},
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  placeholder: PropTypes.string,
  onChangeOption: PropTypes.func,
};

export default Select;
