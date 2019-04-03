import React from 'react';
import { ThemeProvider } from 'styled-components';
import render from 'react-test-renderer';
import theme from 'views/App/theme';
import TestPageContainer from 'views/Pages/TestPage/TestPageContainer';
import 'jest-styled-components';

describe('TestPageContainer', () => {
  it('snapshot', () => {
    const testPage = render.create(
      <ThemeProvider theme={theme}>
        <TestPageContainer />
      </ThemeProvider>
    );
    expect(testPage.toJSON()).toMatchSnapshot();
  });
});
