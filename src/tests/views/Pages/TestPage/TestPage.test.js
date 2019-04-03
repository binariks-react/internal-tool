import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from 'views/App/theme';
import TestPageContainer from 'views/Pages/TestPage/TestPageContainer';
import 'jest-styled-components';

describe('TestPage', () => {
  it('snapshot', () => {
    const testPage = mount(
      <ThemeProvider theme={theme}>
        <TestPageContainer />
      </ThemeProvider>
    );
    expect(toJson(testPage)).toMatchSnapshot();
  });
});
