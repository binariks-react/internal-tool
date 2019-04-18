import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import Slider from 'views/Components/Controls/Slider/Slider';
import { SLIDER_TYPE } from 'views/Components/Controls/Slider/type';
import 'jest-styled-components';

describe('<Slider />', () => {
  const fakeProps = {
    sliderWidth: 100,
    rangeValue: 100,
    type: SLIDER_TYPE.SINGLE,
    controllerValue: 50,
    leftControllerValue: 10,
    rightControllerValue: 50,
    minDistanceBetweenControllers: 10,
    rangeColour: 'primary',
    getRange: () => { },
    showValue: false,
  };
  it('snapshot with one controller without showing value', () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('With one controller with showing value', () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} showValue />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('With two controllers without showing value', () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} type={SLIDER_TYPE.DOUBLE} />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('With two controllers with showing value', () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} type={SLIDER_TYPE.DOUBLE} showValue />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('position more than 0, and max range value', () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} showValue controllerValue={-10} />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('left controller more or equal than 0 and right controller less than', () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} showValue leftControllerValue={-10} />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('right controller less than slider size', () => {
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} showValue rightControllerValue={200} />
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('show error message if did not pass slider type', () => {
    const cle = console.error;
    console.error = jest.fn();
    const wrapper = render(
      <ThemeProvider theme={theme}>
        <Slider {...fakeProps} type={null} />
      </ThemeProvider>
    );
    expect(console.error).toHaveBeenCalledTimes(1);
    console.error = cle;
    expect(wrapper).toMatchSnapshot();
  });
});
