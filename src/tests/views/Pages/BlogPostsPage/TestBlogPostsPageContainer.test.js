import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from 'enzyme';
import theme from 'views/App/theme';
import BlogPostsContainer from 'views/Pages/BlogPostsPage/BlogPostsPageContainer';
import 'jest-styled-components';

describe('TestBlogPostsContainer', () => {
  it('snapshot', () => {
    const testPage = render(
      <ThemeProvider theme={theme}>
        <BlogPostsContainer />
      </ThemeProvider>
    );
    expect(testPage).toMatchSnapshot();
  });
});
