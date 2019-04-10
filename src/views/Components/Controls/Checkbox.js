import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CheckboxWrapper = styled.div`
    position: relative;
    line-height: 1.5rem;
    min-height: 1.5rem;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    box-sizing: border-box;
    padding: 0;
    position: absolute;
    z-index: -1;
    opacity: 0;
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'}

`;

const Text = styled.span`
    margin-left: 8px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: ${({ disabled }) => disabled ? 0.7 : 1};
`;

const Icon = styled.svg`
    fill: none;
    stroke: transparent;
    transform: scale(0);
    stroke-width: 3px;
    transition: transform 250ms cubic-bezier(.27,.01,.38,1.06),border 250ms cubic-bezier(.27,.01,.38,1.06),-webkit-transform 250ms cubic-bezier(.27,.01,.38,1.06);
    transition-delay: .1s;
`;

const CustomCheckbox = styled.div`
    display: inline-block;
    width: 1.125rem;
    height: 1.125rem;
    border: 1px solid #e1e5eb;
    border-radius: 2px;
    transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
    box-shadow: none;
    background-color: white;
    text-align: center;
    
    input:checked + & {
      background-color: ${({ theme }) => theme.colors.secondary};
    
      svg {
        stroke: white;
        transform: scale(1);
      } 
    }
`;

const Checkbox = props => (
  <CheckboxWrapper {...props}>
    <Label {...props}>
      <HiddenCheckbox {...props} />
      <CustomCheckbox {...props}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </CustomCheckbox>
      <Text {...props}>
        {props.label}
      </Text>
    </Label>
  </CheckboxWrapper>
);

Checkbox.defaultProps = {
  label: '',
  dafaultChecked: false,
  disable: false,
};

Checkbox.propTypes = {
  label: PropTypes.string,
  dafaultChecked: PropTypes.bool,
  disable: PropTypes.bool,
};


export default Checkbox;
