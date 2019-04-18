import React from 'react';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import 'react-test-renderer/shallow';

import DoubleSlider from 'views/Components/Controls/Slider/DoubleSlider';
import { SLIDER_TYPE } from 'views/Components/Controls/Slider/type';

describe('<DoubleSlider />', () => {
  const fakeProps = {
    sliderWidth: 300,
    rangeValue: 400,
    type: SLIDER_TYPE.DOUBLE,
    leftControllerValue: 50,
    rightControllerValue: 100,
    minDistanceBetweenControllers: 20,
    rangeColour: 'primary',
    showValue: false,
    getRange: () => { },
  };
  describe('shallow', () => {
    it('contain range and two controllers', () => {
      const wrapper = render(
        <ThemeProvider theme={theme}>
          <DoubleSlider {...fakeProps} />
        </ThemeProvider>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
