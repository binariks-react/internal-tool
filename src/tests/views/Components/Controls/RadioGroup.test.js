import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, render } from 'enzyme';
import theme from 'views/App/theme';
import RadioGroup from 'views/Components/Controls/RadioGroup';
import 'jest-styled-components';

describe('RadioButton', () => {
  const onChange = jest.fn();

  beforeEach(() => {
    onChange.mockClear();
  });

  it('default with empth props', () => {
    const radio = render(
      <ThemeProvider theme={theme}>
        <RadioGroup values={[]} titles={[]} />
      </ThemeProvider>
    );
    expect(radio).toMatchSnapshot();
  });
  it('default with empth props', () => {
    const radio = render(
      <ThemeProvider theme={theme}>
        <RadioGroup onChange={() => {}} values={['value1', 'value2']} titles={['Title1', 'Title2']} />
      </ThemeProvider>
    );
    expect(radio).toMatchSnapshot();
  });
  it('onChange clicked', () => {
    const radio = mount(
      <ThemeProvider theme={theme}>
        <RadioGroup onChange={onChange} values={['value1', 'value2']} titles={['Title1', 'Title2']} />
      </ThemeProvider>
    );
    radio.find('input').at(0).simulate('change');
    expect(onChange).toHaveBeenCalledTimes(1);
  });
  it('onChange clicked', () => {
    const radio = mount(
      <ThemeProvider theme={theme}>
        <RadioGroup values={['value1', 'value2']} titles={['Title1', 'Title2']} />
      </ThemeProvider>
    );
    radio.find('input').at(0).simulate('change');
  });
});
