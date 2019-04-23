import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostWrapper = styled.div`
  overflow: hidden;
  margin: 0 16px 0 0;
  height: 100%;
  min-width: calc(50% - 16px);
  max-width: calc(50% - 16px);
  display: flex;
  flex-direction: row;
  border-radius: 18px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.postShadow};
`;

const PostMain = styled.div`
  position: relative;
  min-height: 100%;
  min-width: 35%;
  background-image: url("https://picsum.photos/200/300?random");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const PostType = styled.span`
  height: 21px;
  padding: 0 12px;
  border-radius: 11px;
  background-color: ${props => props.color};
  position: absolute;
  top: 15px;
  left: 15px;
  vertical-align: middle;
  line-height: 21px;
  font-style: normal;
  font-weight: 900;
  font-size: 9.5px;
  color: #FFFFFF;
`;

const ByImage = styled.img`
  margin: 0 11px 0 0;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  border: white 2px solid;
  box-shadow: ${props => props.theme.shadows.avatarShadow}
`;

const DescrWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostDescr = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px);
  padding: 24px 19.5px;
  min-width: calc(65% - 39px);
  overflow: hidden;
  & div {
    height: 50%;
    overflow-y: hidden;
  }
  & span {
    margin: 0 auto;
    line-height: 1.3;
    font-size: 13px;
    max-width: 100%;
    height: 50px;
    color: ${props => props.isColor ? props.theme.colors.secondary : props.theme.colors.white}
  }
`;

const PostTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: normal;
  letter-spacing: -1.52632px;
  color: #2B394F;
  margin: 0;
`;

const PostFooter= styled.div`
  padding: 0 25px;
  box-shadow: ${props => props.theme.colors.postFooter};
  border-top: ${props => props.theme.colors.darkGrey} 1px solid;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40%;
  width: 100%;
  & div {
    display: flex;
    flex-direction: column;
  }
`;

const ByName = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  line-height: normal;
  color: ${props => props.theme.colors.secondary};
`;

const ByTime = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: normal;
  color: ${props => props.theme.colors.secondary};
`;

const HorizontalPostsBox = (props) => {
  const container = useRef(null);
  const [isColor, setColor] = useState(false);

  useEffect(() => {
    const divH = container.current.clientHeight;
    const span = container.current.querySelector('span');
    while (span.offsetHeight > divH) {
      span.textContent = span.textContent.replace(/\W*\s(\S)*$/, '...');
      setColor(true);
    }
  }, []);
  return (
    <PostWrapper {...props}>
      <PostMain>
        <PostType color={props.color}>{props.type.toUpperCase()}</PostType>
      </PostMain>
      <DescrWrapper>
        <PostDescr isColor={isColor}>
          <div>
            <PostTitle>
              Title
            </PostTitle>
          </div>
          <div ref={container}>
            <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor i
          ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </div>
        </PostDescr>
        <PostFooter>
          <ByImage src={`https://picsum.photos/200/300?image=${props.index}`} />
          <div>
            <ByName>By Name</ByName>
            <ByTime>21 March 2011</ByTime>
          </div>
        </PostFooter>
      </DescrWrapper>
    </PostWrapper>
  );
};

const propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  index: PropTypes.number,
};
const defaultProps = {
  type: '',
  color: '',
  index: 0,
};

HorizontalPostsBox.propTypes = propTypes;
HorizontalPostsBox.defaultProps = defaultProps;


export default HorizontalPostsBox;
