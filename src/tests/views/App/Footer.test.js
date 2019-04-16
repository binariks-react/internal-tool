import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import theme from 'views/App/theme';
import Footer from 'views/App/Footer/Footer';
import 'jest-styled-components';

describe('Footer', () => {
  it('should be rendered once and have all elements', () => {
    const footer = mount(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    const wrapper = footer.find('[data-test="wrapper"]');
    const pageList = footer.find('[data-test="pageList"]');
    const copyright = footer.find('[data-test="copyright"]');
    expect(wrapper.length).toEqual(1);
    expect(pageList.length).toEqual(1);
    expect(copyright.length).toEqual(1);
    expect(footer).toMatchSnapshot();
  });
});
