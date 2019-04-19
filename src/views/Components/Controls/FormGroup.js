import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormGroupWrapper = styled.div`
  margin-bottom: 1rem;

  ${({ width }) =>
    width && `width: ${width}px`
};

`;

const FormGroup = props => (
  <FormGroupWrapper {...props}>{props.children}</FormGroupWrapper>
);

FormGroup.defaultProps = {
  width: 250,
};

FormGroup.propTypes = {
  width: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default FormGroup;
