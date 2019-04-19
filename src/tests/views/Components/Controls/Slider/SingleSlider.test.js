import React from 'react';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';
import 'react-test-renderer/shallow';

import SingleSlider from 'views/Components/Controls/Slider/SingleSlider';
import { SLIDER_TYPE } from 'views/Components/Controls/Slider/type';

describe('<SingleSlider />', () => {
  const fakeProps = {
    sliderWidth: 300,
    rangeValue: 400,
    type: SLIDER_TYPE.SINGLE,
    controllerValue: 50,
    rangeColour: 'primary',
    showValue: false,
    getRange: (range) => { },
  };
  describe('shallow', () => {
    it('contain range and controller', () => {
      const wrapper = render(
        <ThemeProvider theme={theme}>
          <SingleSlider {...fakeProps} />
        </ThemeProvider>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
