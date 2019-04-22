import React from 'react';
import styled from 'styled-components';
import Button from 'views/Components/Controls/Button';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ErrorCodeDiv = styled.div`
  height: 88px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  font-size: 75px;
  line-height: normal;
  letter-spacing: -11.5385px;
  color: ${ props => props.theme.colors.darkGrey };
`;

const ErrorTitleDiv = styled.div`
  height: 59px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: normal;
  letter-spacing: -5px;
  color: ${props => props.theme.colors.darkBlue};
`;

const ErrorMessageDiv = styled.div`
  height: 23.5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -1px;
  color: ${props => props.theme.colors.secondary};
`;

const ErrorPage = ({ errorCode, errorTitle, errorMessage, goBack }) => (

  <Wrapper>
    <ErrorCodeDiv>{errorCode}</ErrorCodeDiv>
    <ErrorTitleDiv>{errorTitle}</ErrorTitleDiv>
    <ErrorMessageDiv>{errorMessage}</ErrorMessageDiv>
    <Button onClick={goBack} color="primary">Go Back</Button>
  </Wrapper>

);

const defaultProps = {
  errorCode: '500',
  errorTitle: 'Something went wrong',
  errorMessage: 'There was a problem on our end. Please try again later',
  goBack: () => {},
};

const propTypes = {
  errorCode: PropTypes.string,
  errorTitle: PropTypes.string,
  errorMessage: PropTypes.string,
  goBack: PropTypes.func,
};

ErrorPage.defaultProps= defaultProps;
ErrorPage.propTypes = propTypes;

export default ErrorPage;
