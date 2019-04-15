import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, render } from 'enzyme';
import theme from 'views/App/theme';
import RadioButton from 'views/Components/Controls/RadioButton';
import 'jest-styled-components';

describe('RadioButton', () => {
  const onChange = jest.fn();
  beforeEach(() => {
    onChange.mockClear();
  });
  it('default', () => {
    const radio = render(
      <ThemeProvider theme={theme}>
        <RadioButton />
      </ThemeProvider>
    );
    expect(radio).toMatchSnapshot();
  });
  it('defaultChecked', () => {
    const radio = render(
      <ThemeProvider theme={theme}>
        <RadioButton title="radio" defaultChecked />
      </ThemeProvider>
    );
    expect(radio).toMatchSnapshot();
  });
  it('disabled', () => {
    const radio = render(
      <ThemeProvider theme={theme}>
        <RadioButton title="radio" disabled />
      </ThemeProvider>
    );
    expect(radio).toMatchSnapshot();
  });
  it('disabled defaultChecked', () => {
    const radio = render(
      <ThemeProvider theme={theme}>
        <RadioButton title="radio" defaultChecked disabled />
      </ThemeProvider>
    );
    expect(radio).toMatchSnapshot();
  });
  it('onChange clicked', () => {
    const radio = mount(
      <ThemeProvider theme={theme}>
        <RadioButton onChange={onChange} />
      </ThemeProvider>
    );
    radio.find('input').simulate('change');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('onChange default', () => {
    const radio = mount(
      <ThemeProvider theme={theme}>
        <RadioButton />
      </ThemeProvider>
    );
    radio.find('input').simulate('change');
  });
});
