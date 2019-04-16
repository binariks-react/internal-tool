import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import theme from 'views/App/theme';
import Header from 'views/App/Header/Header';
import 'jest-styled-components';

describe('Header', () => {
  it('should be rendered once and have all elements', () => {
    const header = mount(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const wrapper = header.find('[data-test="wrapper"]');
    const input = header.find('[data-test="input"]');
    const notifications = header.find('[data-test="notifications"]');
    const userSection = header.find('[data-test="userSection"]');
    expect(wrapper.length).toEqual(1);
    expect(input.length).toEqual(1);
    expect(notifications.length).toEqual(1);
    expect(userSection.length).toEqual(1);
    expect(header).toMatchSnapshot();
  });

  it('should not be rendered notifications number if there is none passed as prop', () => {
    const header = mount(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const notificationsCount = header.find('[data-test="notificationCount"]');
    expect(notificationsCount.length).toBe(0);
  });

  it('should be rendered notifications number when prop passed', () => {
    const header = mount(
      <ThemeProvider theme={theme}>
        <Header notifications={12} />
      </ThemeProvider>
    );

    const notificationsCount = header.find('[data-test="notificationCount"]');
    expect(notificationsCount.length).toBe(1);
    expect(header).toMatchSnapshot();
  });
});
