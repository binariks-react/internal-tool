import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import theme from 'views/App/theme';
import 'jest-styled-components';
import Switch from '../../../../views/Components/Controls/Switch';

describe('Switch', () => {
  const preventDefault = jest.fn();
  const stopPropagation = jest.fn();
  beforeEach(() => {
    preventDefault.mockClear();
    stopPropagation.mockClear();
  });
  describe('snapshot', () => {
    it('onClick', () => {
      const onClick = jest.fn();
      const button = mount(
        <ThemeProvider theme={theme}>
          <Switch onClick={onClick} />
        </ThemeProvider>
      );

      button.find(Switch).simulate('click', { preventDefault, stopPropagation });
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(stopPropagation).toHaveBeenCalledTimes(1);
    });

    it('onClick - defaultProps', () => {
      expect(Switch.defaultProps.onClick).toBeDefined();
      expect(Switch.defaultProps.onClick()).toBeUndefined();
    });

    it('onClick - preventDefault', () => {
      const onClick = jest.fn();
      const button = mount(
        <ThemeProvider theme={theme}>
          <Switch preventDefault={false} onClick={onClick} />
        </ThemeProvider>
      );

      button.find(Switch).simulate('click', { preventDefault, stopPropagation });
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(0);
      expect(stopPropagation).toHaveBeenCalledTimes(1);
    });

    it('onClick - stopPropagation', () => {
      const onClick = jest.fn();
      const button = mount(
        <ThemeProvider theme={theme}>
          <Switch stopPropagation={false} onClick={onClick} />
        </ThemeProvider>
      );

      button.find(Switch).simulate('click', { preventDefault, stopPropagation });
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(stopPropagation).toHaveBeenCalledTimes(0);
    });
  });
});
