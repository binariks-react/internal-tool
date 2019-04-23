/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount, render } from 'enzyme';
import theme from 'views/App/theme';
import 'jest-styled-components';
import PostsWrapper from '../../../../views/Components/BlogPostsPage/PostsWrapper';

describe('TestPostsWrapper', () => {
  describe('snapshot', () => {
    it('posts > 2', () => {
      const posts = [
        { type: 'business', color: '#212529' },
        { type: 'travel', color: '#00B8D8' },
        { type: 'tech', color: '#674EEC' },
        { type: 'travel', color: '#FFB400' },
        { type: 'travel', color: '#FFB400' },
        { type: 'travel', color: '#FFB400' },
        { type: 'travel', color: '#FFB400' },
      ];
      const testPage = render(
        <ThemeProvider theme={theme}>
          <PostsWrapper posts={posts} />
        </ThemeProvider>
      );
      expect(testPage).toMatchSnapshot();
    });
    it('posts <= 2', () => {
      const posts = [
        { type: 'business', color: '#212529' },
        { type: 'travel', color: '#00B8D8' },
      ];
      const testPage = render(
        <ThemeProvider theme={theme}>
          <PostsWrapper posts={posts} />
        </ThemeProvider>
      );
      expect(testPage).toMatchSnapshot();
    });
    it('posts === 1', () => {
      const posts = [{ type: 'business', color: '#212529' }];
      const testPage = render(
        <ThemeProvider theme={theme}>
          <PostsWrapper posts={posts} />
        </ThemeProvider>
      );
      expect(testPage).toMatchSnapshot();
    });
  });
  describe('func', () => {
    it('regular', () => {
      const posts = [
        { type: 'business', color: '#212529' },
        { type: 'travel', color: '#00B8D8' },
        { type: 'travel', color: '#00B8D8' },
        { type: 'travel', color: '#00B8D8' },
        { type: 'travel', color: '#00B8D8' },
        { type: 'travel', color: '#00B8D8' },
      ];
      const postWrapper = mount(
        <ThemeProvider theme={theme}>
          <PostsWrapper posts={posts} />
        </ThemeProvider>
      );
      postWrapper.find('[data-test="1"]').simulate('click');
    });
    it('horizontal', () => {
      const posts = [
        { type: 'business', color: '#212529' },
        { type: 'travel', color: '#00B8D8' },
      ];
      const postWrapqper = mount(
        <ThemeProvider theme={theme}>
          <PostsWrapper posts={posts} />
        </ThemeProvider>
      );
      // postWrapper.find('[data-test="1"]').simulate('click');
    });
  });
});
