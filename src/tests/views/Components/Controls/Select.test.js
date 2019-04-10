import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, mount } from 'enzyme';
import theme from 'views/App/theme';
import Select from 'views/Components/Controls/Select';
import 'jest-styled-components';

describe('Select', () => {
  const fakeOptions = [
    {
      value: 1,
      label: 'First',
    },
    {
      value: 2,
      label: 'Second',
    },
    {
      value: 3,
      label: 'Third',
    },
  ];
  describe('snapshot', () => {
    it('select with options', () => {
      const input = render(
        <ThemeProvider theme={theme}>
          <Select options={fakeOptions} />
        </ThemeProvider>
      );
      expect(input).toMatchSnapshot();
    });

    it('select input with options and onChangeOption', () => {
      const input = render(
        <ThemeProvider theme={theme}>
          <Select onChangeOption={(option) => {}} options={fakeOptions} />
        </ThemeProvider>
      );
      expect(input).toMatchSnapshot();
    });
  });

  it('onChangeOption', () => {
    const onChangeOption = jest.fn();

    const select = mount(
      <ThemeProvider theme={theme}>
        <Select onChangeOption={onChangeOption} options={fakeOptions} />
      </ThemeProvider>
    );

    select.find('select').simulate('change', { target: fakeOptions[1] });
    expect(onChangeOption).toHaveBeenCalledTimes(1);
    expect(onChangeOption).toHaveBeenCalledWith(fakeOptions[1]);
  });

  it('onChangeOption - defaultProps', () => {
    expect(Select.defaultProps.onChangeOption).toBeDefined();
    expect(Select.defaultProps.onChangeOption()).toBeUndefined();
  });
});
