import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import ProgressBar from 'views/Components/Controls/ProgressBar';
import 'jest-styled-components';

describe('ProgressBar', () => {
  it('primary', () => {
    const bar = render(
      <ThemeProvider theme={theme}>
        <ProgressBar color="primary" />
      </ThemeProvider>
    );
    expect(bar).toMatchSnapshot();
  });
  it('max<min', () => {
    const bar = render(
      <ThemeProvider theme={theme}>
        <ProgressBar max={0} min={5} />
      </ThemeProvider>
    );
    expect(bar).toMatchSnapshot();
  });
  it('value<min', () => {
    const bar = render(
      <ThemeProvider theme={theme}>
        <ProgressBar min={5} value={0} />
      </ThemeProvider>
    );
    expect(bar).toMatchSnapshot();
  });
});
