import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import ProgressBar from 'views/Components/Controls/ProgressBar';
import 'jest-styled-components';

describe('ProgressBar', () => {
  describe('snapshot', () => {
    it('primary', () => {
      const bar = render(
        <ThemeProvider theme={theme}>
          <ProgressBar color="primary" />
        </ThemeProvider>
      );
      expect(bar).toMatchSnapshot();
    });
  });
});
