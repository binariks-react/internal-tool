import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, mount } from 'enzyme';
import theme from 'views/App/theme';
import ErrorPage from 'views/Pages/ErrorPage/ErrorPage';
import 'jest-styled-components';

describe('ErrorPage', () => {
  const goBack = jest.fn();
  beforeEach(() => {
    goBack.mockClear();
  });

  it('default', () => {
    const errorPage = render(
      <ThemeProvider theme={theme}>
        <ErrorPage />
      </ThemeProvider>
    );
    expect(errorPage).toMatchSnapshot();
  });
  it('check error Code', () => {
    const errorPage = render(
      <ThemeProvider theme={theme}>
        <ErrorPage errorCode="404" errorTitle="PAGE NOT FOUND" errorMessage="please check your route" />
      </ThemeProvider>
    );
    expect(errorPage).toMatchSnapshot();
  });
  it('go back function', () => {
    const errorPage = mount(
      <ThemeProvider theme={theme}>
        <ErrorPage goBack={goBack} />
      </ThemeProvider>
    );
    errorPage.find('button').simulate('click');
    expect(goBack).toHaveBeenCalledTimes(1);
  });
  it('goback default', () => {
    const errorPage = mount(
      <ThemeProvider theme={theme}>
        <ErrorPage />
      </ThemeProvider>
    );
    errorPage.find('button').simulate('click');
  });
});


