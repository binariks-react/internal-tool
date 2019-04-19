/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PostBox from 'views/Components/BlogPostsPage/PostBox';
import HorizontalPostsBox from './HorizontalPostBox';

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 5px 0;
  min-height: ${props => props.posts && props.posts.length && props.posts.length > 2 ? 370 : 202}px;
`;

const Wrapper = styled.div`
  //min-height: ${props => props.posts && props.posts.length && props.posts.length > 2 ? 370 : 202}px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 45px 20px 45px 20px;
  margin: -40px -20px;
  overflow-x: hidden;
  justify-content: ${props => props.posts && props.posts.length === 1 ? 'center' : 'flex-start'};
`;

const ToRightBtn = styled.div.attrs({ 'data-test': '1' })`
  height: calc(100% - 10px);
  width: 30px;
  position: absolute;
  right: -16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    &:hover {
      opacity: 0.8;
    }
    border-radius: 18px;
    transition: 1s;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    opacity: 0.2;
  }
  & span {
    font-size: 40px;
    color: #000;
  }
`;

const ToleftBtn = styled.div`
  height: calc(100% - 10px);
  width: 30px;
  position: absolute;
  left: -16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & div {
    &:hover {
      opacity: 0.8;
    }
    border-radius: 18px;
    transition: 1s;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    opacity: 0.2;
  }
  & span {
    transform: rotate(180deg);
    font-size: 40px;
    color: #000;
  }
`;


const PostsWrapper = (props) => {
  const wrapper = useRef(null);
  const [postIndex, setPostIndex] = useState(0);
  const getWidth = () => {
    if (100/props.posts.length < 25) {
      return ((wrapper.current.clientWidth- 16)/4);
    }
  };
  const slideToRight = (e) => {
    const arr = props.posts.slice(postIndex+1, postIndex + 5);
    if (arr.length >= 4) {
      setPostIndex(postIndex+1);
    }
    e.preventDefault();
    e.stopPropagation();
  };
  useEffect(() => {
    if (props.posts.length > 4 && wrapper.current.scrollTo) {
      wrapper.current.scrollTo({ left: getWidth()*postIndex, behavior: 'smooth' });
    }
  }, [postIndex]);
  return (
    <Container {...props}>
      <Wrapper {...props} ref={wrapper}>
        {!!props.posts.length && props.posts.length > 2 && props.posts.map((i, index) => (
          <PostBox
            index={index}
            key={`${index}PostV`}
            type={i.type}
            color={i.color}
            length={props.posts.length}
          />
        ))}
        {!!props.posts.length && props.posts.length <= 2 && props.posts.map((i, index) => (
          <HorizontalPostsBox
            index={index}
            key={`${index}PostH`}
            type={i.type}
            color={i.color}
            length={props.posts.length}
          />
        ))}
        {props.posts.length > 4 &&
      <ToRightBtn onClick={slideToRight}>
        <div></div>
        <span>></span>
      </ToRightBtn>}
        {postIndex > 0 &&
        <ToleftBtn onClick={(e) => {
          setPostIndex(postIndex-1);
          e.preventDefault();
          e.stopPropagation();
        }}
        >
          <div></div>
          <span>></span>
        </ToleftBtn>}
      </Wrapper>
    </Container>
  );
};

const propTypes = {
  posts: PropTypes.array,
  type: PropTypes.string,
};

const defaultProps = {
  posts: [],
  type: '',
};

PostsWrapper.propTypes = propTypes;
PostsWrapper.defaultProps = defaultProps;


export default PostsWrapper;
