import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getColor = (props) => {
  if (props.fill === 'fill') {
    if (props.color === 'white') {
      return props.theme.colors.text;
    }
    return props.theme.colors.white;
  }

  if (props.fill === 'outline') {
    if (props.color === 'white') {
      return props.theme.colors.text;
    }
    return props.theme.colors[props.color];
  }
};

const getHoverColor = (props) => {
  if (props.fill === 'fill') return getColor(props);


  if (props.fill === 'outline') {
    if (props.color === 'white') {
      return props.theme.colors.text;
    }
    return props.theme.colors.white;
  }
};

const getBackgroundColor = (props) => {
  if (props.fill === 'fill') {
    return props.theme.colors[props.color];
  }

  if (props.fill === 'outline') {
    return props.theme.colors.white;
  }
};

const getBorderColor = (props) => {
  if (props.fill === 'fill') {
    if (props.color === 'white') {
      return props.theme.colors.border;
    }
    return props.theme.colors[props.color];
  }

  if (props.fill === 'outline') {
    if (props.color === 'white') {
      return 'transparent';
    }
    return props.theme.colors[props.color];
  }
};

const getHoverBorderColor = (props) => {
  if (props.fill === 'fill') {
    if (props.color === 'white') {
      return props.theme.colors.border;
    }
    return props.theme.colors.hoverColors[props.color];
  }

  if (props.fill === 'outline') {
    if (props.color === 'white') {
      return 'transparent';
    }
    return props.theme.colors.hoverColors[props.color];
  }
};


const getActiveBackgroundColor = (props) => {
  if (props.fill === 'fill') {
    if (props.color === 'white') {
      return props.theme.colors.primary;
    }
    return props.theme.colors.hoverColors[props.color];
  }
};

const ButtonWrapper = styled.button`
  background-color: ${getBackgroundColor};
  border-color: ${getBorderColor};
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  line-height: ${props => props.small ? 1.5 : 1.125};
  padding: ${props => props.small ? '0.4286rem 0.875rem' : '.5625rem 1rem'};
  font-size: ${props => props.small ? '0.6875rem' : '.75rem'};
  transition: all 250ms cubic-bezier(.27,.01,.38,1.06);
  cursor: pointer;
  color: ${getColor};

  &:hover {
    background-color: ${props => props.theme.colors.hoverColors[props.color]};
    border-color: ${getHoverBorderColor};
    box-shadow: ${props => props.theme.shadows[props.color]};
    color: ${getHoverColor}
  }

  &:active {
    background-color: ${getActiveBackgroundColor};
    border-color: ${props => props.theme.colors.activeColors[props.color]};
    box-shadow: ${props => props.theme.shadows.inset};
    color: ${props => props.theme.colors.white};
  }
`;

const Button = ({ onClick, preventDefault, stopPropagation, ...props }) => (
  <ButtonWrapper
    type="button"
    onClick={(e) => {
      preventDefault && e.preventDefault();
      stopPropagation && e.stopPropagation();
      onClick(e);
    }}
    {...props}
  />
);

const defaultProps = {
  fill: 'fill',
  onClick: () => {},
  preventDefault: true,
  stopPropagation: true,
};

const propTypes = {
  fill: PropTypes.oneOf(['fill', 'outline']),
  onClick: PropTypes.func,
  preventDefault: PropTypes.bool,
  stopPropagation: PropTypes.bool,
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
