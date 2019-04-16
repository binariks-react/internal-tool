import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, mount } from 'enzyme';
import theme from 'views/App/theme';
import Sidebar from 'views/App/Sidebar/Sidebar';
import 'jest-styled-components';

describe('Sidebar', () => {
  const preventDefault = jest.fn();
  const stopPropagation = jest.fn();
  const onClick = jest.fn();

  beforeEach(() => {
    preventDefault.mockClear();
    stopPropagation.mockClear();
    onClick.mockClear();
  });

  const titles = [
    {
      title: 'Blog Dashboard',
      icon: 'edit',
    },
    {
      title: 'Blog Posts',
      icon: 'vertical_split',
    },
    {
      title: 'Add New Post',
      icon: 'note_add',
    },
  ];

  it('without props expected not to render any panels', () => {
    const sidebar = render(
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    );

    const panels = sidebar.find('[data-test="panel"]');
    expect(panels.length).toBe(0);
    expect(sidebar).toMatchSnapshot();
  });

  describe('with "titles" prop', () => {
    it('expected to render those panels', () => {
      const sidebar = render(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} />
        </ThemeProvider>
      );

      const panels = sidebar.find('[data-test="panel"]');
      expect(panels.length).toBe(titles.length);
      expect(sidebar).toMatchSnapshot();
    });

    it('expected first panel to be selected (have "selected" prop)', () => {
      const sidebar = mount(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} />
        </ThemeProvider>
      );

      const panel = sidebar.find('[data-test="panel"]').first();
      expect(panel.prop('selected')).toBeDefined();
      expect(panel.prop('selected')).toBe(true);
    });

    it('onClick prop', () => {
      const sidebar = mount(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} onClick={onClick} />
        </ThemeProvider>
      );

      const panel = sidebar.find('[data-test="panel"]').at(1);

      panel.simulate('click', { preventDefault, stopPropagation });
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(stopPropagation).toHaveBeenCalledTimes(1);
    });

    it('onClick defaultProps', () => {
      expect(Sidebar.defaultProps.onClick).toBeDefined();
      expect(Sidebar.defaultProps.onClick()).toBeUndefined();
    });

    it('onClick preventDefault = false', () => {
      const sidebar = mount(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} onClick={onClick} preventDefault={false} />
        </ThemeProvider>
      );

      const panel = sidebar.find('[data-test="panel"]').at(1);

      panel.simulate('click', { preventDefault, stopPropagation });
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(0);
      expect(stopPropagation).toHaveBeenCalledTimes(1);
    });

    it('onClick stopPropagation = false', () => {
      const sidebar = mount(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} onClick={onClick} stopPropagation={false} />
        </ThemeProvider>
      );

      const panel = sidebar.find('[data-test="panel"]').at(1);

      panel.simulate('click', { preventDefault, stopPropagation });
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(preventDefault).toHaveBeenCalledTimes(1);
      expect(stopPropagation).toHaveBeenCalledTimes(0);
    });

    it('while clicked on another panel, expected "selected" prop change from false to true', () => {
      const sidebar = mount(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} onClick={onClick} />
        </ThemeProvider>
      );

      const selectPanel = index => sidebar.find('[data-test="panel"]').at(index);

      expect(selectPanel(0).prop('selected')).toBeDefined();
      expect(selectPanel(1).prop('selected')).toBeDefined();

      expect(selectPanel(0).prop('selected')).toBe(true);
      expect(selectPanel(1).prop('selected')).toBe(false);

      selectPanel(1).simulate('click');

      sidebar.update();

      expect(selectPanel(0).prop('selected')).toBe(false);
      expect(selectPanel(1).prop('selected')).toBe(true);
    });
  });
});
