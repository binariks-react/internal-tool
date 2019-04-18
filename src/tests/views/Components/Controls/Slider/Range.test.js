import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, mount, shallow } from 'enzyme';
import theme from 'views/App/theme';
import Range from 'views/Components/Controls/Slider/Range';
import 'jest-styled-components';

describe('<Range />', () => {
  const fakeProps = {
    sliderWidth: 300,
    rightPoint: 500,
    rangeColour: 'primary',
  };
  describe('Snapshot', () => {
    it('without leftPoint props range value should equal 0', () => {
      const wrapper = render(
        <ThemeProvider theme={theme}>
          <Range {...fakeProps} />
        </ThemeProvider >
      );

      expect(wrapper).toMatchSnapshot();
    });
    it('start range value equal left point', () => {
      const wrapper = render(
        <ThemeProvider theme={theme}>
          <Range {...fakeProps} leftPoint={30} />
        </ThemeProvider >
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('range value equal right point', () => {
      const wrapper = render(
        <ThemeProvider theme={theme}>
          <Range {...fakeProps} rightPoint={500} />
        </ThemeProvider >
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
