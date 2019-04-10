import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import Input from 'views/Components/Controls/Input';
import 'jest-styled-components';

describe('Input', () => {
  describe('snapshot', () => {
    it('text input with placeholder', () => {
      const input = render(
        <ThemeProvider theme={theme}>
          <Input type="text" placeholder="Text" />
        </ThemeProvider>
      );
      expect(input).toMatchSnapshot();
    });

    it('password input with placeholder', () => {
      const input = render(
        <ThemeProvider theme={theme}>
          <Input type="password" placeholder="Password" />
        </ThemeProvider>
      );
      expect(input).toMatchSnapshot();
    });

    it('text input with placeholder and icon', () => {
      const input = render(
        <ThemeProvider theme={theme}>
          <Input type="text" placeholder="Input w/ icon" icon="@" />
        </ThemeProvider>
      );
      expect(input).toMatchSnapshot();
    });

    it('text input with placeholder and truthy condition', () => {
      const input = render(
        <ThemeProvider theme={theme}>
          <Input type="text" placeholder="Input w/ true condition" condition message="Condition is correct" />
        </ThemeProvider>
      );
      expect(input).toMatchSnapshot();
    });

    it('text input with placeholder and falsy condition', () => {
      const input = render(
        <ThemeProvider theme={theme}>
          <Input type="text" placeholder="Input w/ false condition" condition={false} message="Condition is incorrect" />
        </ThemeProvider>
      );
      expect(input).toMatchSnapshot();
    });
  });
});
