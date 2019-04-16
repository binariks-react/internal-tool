import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({ 'data-test': 'wrapper' })`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  align-self: flex-end;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  padding: 0 25px;
  border-top: 1px solid ${props => props.theme.colors.lightGrey};
`;

const PagesList = styled.ul.attrs({ 'data-test': 'pageList' })`
  display: flex;
  margin: 0;
  padding: 0;
`;

const PageOption = styled.li`
  font-family: Roboto, sans-serif;
  list-style: none;
  cursor: pointer;
  margin-right: 20px;
  color: ${props => props.theme.colors.primary};
  
  &:hover {
    color: ${props => props.theme.colors.text};
  }
`;

const Copyright = styled.span.attrs({ 'data-test': 'copyright' })`
  color: ${props => props.theme.colors.secondary};
`;

const Footer = props => (
  <Wrapper>
    <PagesList>
      <PageOption><span>About</span></PageOption>
      <PageOption><span>Services</span></PageOption>
      <PageOption><span>About</span></PageOption>
      <PageOption><span>Products</span></PageOption>
      <PageOption><span>Blog</span></PageOption>
    </PagesList>
    <Copyright>Copyright © 2019 Binariks</Copyright>
  </Wrapper>
);

export default Footer;
