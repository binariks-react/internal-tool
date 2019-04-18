import React from 'react';
import { render, mount } from 'enzyme';
import theme from 'views/App/theme';
import 'jest-styled-components';
import 'react-test-renderer/shallow';

import Controller from 'views/Components/Controls/Slider/Controller';
import { CONTROLLER_TYPE } from 'views/Components/Controls/Slider/type';
import { getByTestId } from './testUtils';

describe('<Controller />', () => {
  const fakeProps = {
    initialValue: 0,
    controllerType: CONTROLLER_TYPE.LEFT,
    handleControllerChange: () => { },
    minValue: 0,
    maxValue: 500,
    showValue: false,
    sliderWidth: 500,
    rangeValue: 500,
    theme,
  };

  describe('Snapshot', () => {
    it('Controller', () => {
      const controller = render(
        <Controller
          initialValue={0}
          controllerType={CONTROLLER_TYPE.LEFT}
          handleControllerChange={() => { }}
          minValue={0}
          maxValue={300}
          showValue={false}
          sliderWidth={500}
          rangeValue={1000}
        />
      );
      expect(controller).toMatchSnapshot();
    });
  });

  it('Should contain Button controller', () => {
    const wrapper = render(<Controller {...fakeProps} />);

    const buttonControllerNode = getByTestId(wrapper, 'controller-button');
    expect(buttonControllerNode.length).toBe(1);
  });

  it('Not showing value when we pass showValue: false', () => {
    const wrapper = render(<Controller {...fakeProps} />);

    const textValueNode = getByTestId(wrapper, 'controller-text');
    expect(textValueNode.length).toBe(0);
  });

  it('Show value when pased showValue: true', () => {
    const wrapper = render(<Controller {...fakeProps} showValue />);
    const textValueNode = getByTestId(wrapper, 'controller-text');
    expect(textValueNode.length).toBe(1);
  });

  it('Contain value', () => {
    const wrapper = mount(<Controller {...fakeProps} initialValue={0} showValue />);
    expect(getByTestId(wrapper, 'controller-text').text()).toBe('0.00');

    wrapper.unmount();
    const wrapperNew = mount(<Controller {...fakeProps} initialValue={70} showValue />);

    expect(getByTestId(wrapperNew, 'controller-text').text()).toBe('70.00');
  });
});
