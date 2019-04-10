import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, mount } from 'enzyme';
import theme from 'views/App/theme';
import Sidebar from 'views/App/Sidebar/index';
import 'jest-styled-components';

describe('Sidebar', () => {
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
    // expect(sidebar).toMatchSnapshot();
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
      // expect(sidebar).toMatchSnapshot();
    });

    it('expected first panel to be selected (have selected prop)', () => {
      const sidebar = mount(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} />
        </ThemeProvider>
      );

      const panel = sidebar.find('[data-test="panel"]').first();
      expect(panel.prop('selected')).toBeDefined();
      expect(panel.prop('selected')).toBe(true);
      // expect(sidebar).toMatchSnapshot();
    });

    it('expected first panel to be selected (have selected prop)', () => {
      const sidebar = mount(
        <ThemeProvider theme={theme}>
          <Sidebar titles={titles} />
        </ThemeProvider>
      );

      const panel = sidebar.find('[data-test="panel"]').at(1);
      expect(panel.prop('selected')).toBeDefined();
      expect(panel.prop('selected')).toBe(false);
      panel.simulate('click');
      expect(sidebar).toMatchSnapshot();
    });
  });
});
