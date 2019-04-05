import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import Checkbox from 'views/Components/Controls/Checkbox';
import 'jest-styled-components';

describe('Checkbox', () => {
  it('common', () => {
    const checkbox = render(
      <ThemeProvider theme={theme}>
        <Checkbox />
      </ThemeProvider>
    );
    expect(checkbox).toMatchSnapshot();
  });

  it('with disabled', () => {
    const checkbox = render(
      <ThemeProvider theme={theme}>
        <Checkbox disable />
      </ThemeProvider>
    );
    expect(checkbox).toMatchSnapshot();
  });

  it('as checked', () => {
    const checkbox = render(
      <ThemeProvider theme={theme}>
        <Checkbox defaultChecked />
      </ThemeProvider>
    );
    expect(checkbox).toMatchSnapshot();
  });
});
