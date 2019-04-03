import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import render from 'react-test-renderer';
import theme from 'views/App/theme';
import Button from 'views/Components/Controls/Button';
import 'jest-styled-components';

describe('Button', () => {
  const preventDefault = jest.fn();
  const stopPropagation = jest.fn();
  beforeEach(() => {
    preventDefault.mockClear();
    stopPropagation.mockClear();
  });

  describe('snapshot', () => {
    it('primary', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button color="primary">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('primary small ', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button small color="primary">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('white ', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button color="white">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('white small', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button small color="white">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('primary outline', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button fill="outline" color="primary">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('primary small outline', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button fill="outline" small color="primary">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('white outline', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button fill="outline" color="white">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('white small outline', () => {
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button fill="outline" small color="white">button</Button>
        </ThemeProvider>
      );
      expect(button.toJSON()).toMatchSnapshot();
    });

    it('wrong fill prop', () => {
      const cle = console.error; // hide react error 'wrong prop type'
      console.error = jest.fn();
      const button = render.create(
        <ThemeProvider theme={theme}>
          <Button fill="wrong">button</Button>
        </ThemeProvider>
      );
      expect(console.error).toHaveBeenCalledTimes(1);
      console.error = cle; // return back console.error
      expect(button.toJSON()).toMatchSnapshot();
    });
  });

  it('onClick', () => {
    const onClick = jest.fn();
    const button = mount(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>button</Button>
      </ThemeProvider>
    );

    button.find('button').simulate('click', { preventDefault, stopPropagation });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(stopPropagation).toHaveBeenCalledTimes(1);
  });

  it('onClick - defaultProps', () => {
    expect(Button.defaultProps.onClick).toBeDefined();
    expect(Button.defaultProps.onClick()).toBeUndefined();
  });

  it('onClick - preventDefault', () => {
    const onClick = jest.fn();
    const button = mount(
      <ThemeProvider theme={theme}>
        <Button preventDefault={false} onClick={onClick}>button</Button>
      </ThemeProvider>
    );

    button.find('button').simulate('click', { preventDefault, stopPropagation });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(preventDefault).toHaveBeenCalledTimes(0);
    expect(stopPropagation).toHaveBeenCalledTimes(1);
  });

  it('onClick - stopPropagation', () => {
    const onClick = jest.fn();
    const button = mount(
      <ThemeProvider theme={theme}>
        <Button stopPropagation={false} onClick={onClick}>button</Button>
      </ThemeProvider>
    );

    button.find('button').simulate('click', { preventDefault, stopPropagation });
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(stopPropagation).toHaveBeenCalledTimes(0);
  });
});
