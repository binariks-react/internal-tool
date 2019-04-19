import React from 'react';
import styled from 'styled-components';
import PostsWrapper from 'views/Components/BlogPostsPage/PostsWrapper';

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  width: calc(100% - 34px);
  padding: 30px 17px;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

const TitleH4 = styled.h4`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: normal;
  letter-spacing: 3.61px;
  color: #818EA3;
`;

const TitleH3 = styled.h3`
  margin: 0 0 15px 0;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: normal;
  letter-spacing: -1.45px;
  color: #3D5170;
`;

const Posts1 = [
  { type: 'business', color: '#212529' },
  { type: 'travel', color: '#00B8D8' },
  { type: 'tech', color: '#674EEC' },
  { type: 'travel', color: '#FFB400' },
  { type: 'travel', color: '#FFB400' },
  { type: 'travel', color: '#FFB400' },
  { type: 'travel', color: '#FFB400' },
];
const Posts3 = [{ type: 'business', color: '#212529' }];
const Posts2 = [
  { type: 'business', color: '#212529' },
  { type: 'travel', color: '#00B8D8' },
  { type: 'travel', color: '#00B8D8' },
];


const BlogPostsPage = () => (
  <Wrapper>
    <TitleH4>COMPONENTS</TitleH4>
    <TitleH3>Blog Posts</TitleH3>
    <PostsWrapper posts={Posts1} />
    <PostsWrapper posts={Posts3} />
    <PostsWrapper posts={Posts2} />
  </Wrapper>
);

export default BlogPostsPage;
