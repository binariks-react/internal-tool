import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import FormGroup from 'views/Components/Controls/FormGroup';
import Input from 'views/Components/Controls/Input';
import 'jest-styled-components';

describe('Input', () => {
  describe('snapshot', () => {
    it('form group with input', () => {
      const formGroup = render(
        <ThemeProvider theme={theme}>
          <FormGroup>
            <Input type="text" placeholder="Text" />
          </FormGroup>
        </ThemeProvider>
      );
      expect(formGroup).toMatchSnapshot();
    });
  });
});
