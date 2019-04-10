import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const selectWrapperConditionStyle = ({ condition, theme: { colors: { success, danger } } }) => {
  switch (condition) {
  case null: return;
  case true: return `
                border-color: ${success};
                box-shadow: 0 5px 11.5px rgba(23,198,113,.1);
                `;
  case false: return `
                border-color: ${danger};
                box-shadow: 0 5px 11.5px rgba(196,24,60,.1);
                `;
  }
};

const messageWrapperConditionStyle = ({ condition, theme: { colors: { success, danger } } }) => {
  switch (condition) {
  case true: return `color: ${success}`;
  case false: return `color: ${danger}`;
  }
};

const Wrapper = styled.div`
  min-width: 7.5rem;
  width: 100%;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  width: 100%;
  min-width: 7.5rem;  
`;

const InputWrapper = styled.input`
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
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0.313rem 0.719rem rgba(0,123,255,.1), 0 0.156rem 0.125rem rgba(0,0,0,.06);
  }

  ${props => selectWrapperConditionStyle(props)};

  ${({ icon }) =>
    icon && `
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    `
};
`;

const MessageWrapper = styled.div`
  display: block;
  margin-top: .25rem;
  font-size: 80%;

  ${props => messageWrapperConditionStyle(props)};
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const Icon = styled.span`
  font-size: .8125rem;
  padding: .375rem .75rem;
  font-weight: 300;
  line-height: 1.5;
  color: ${props => props.theme.colors.icon};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: .25rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  margin-right: -1px;
`;

const Input = props => (
  <Wrapper>
    <IconWrapper>
      {props.icon && <FlexWrapper><Icon>{props.icon}</Icon></FlexWrapper>}
      <InputWrapper
        {...props}
      />
    </IconWrapper>
    {props.message && <MessageWrapper {...props}>{props.message}</MessageWrapper>}
  </Wrapper>
);

Input.defaultProps = {
  icon: '',
  message: '',
  condition: null,
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
  condition: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password']),
};

export default Input;
