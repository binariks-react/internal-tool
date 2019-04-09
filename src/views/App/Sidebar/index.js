import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ width }) => width || '100px'};
  display: block;
  height: 100%;
  background-color: tomato;
`;

const Sidebar = () => {
  const [style, setStyle] = useState();
  const myRef = useRef(null);
  useEffect(() => {
    setStyle(window.getComputedStyle(myRef.current).width);
  }, []);

  return (
    <Wrapper ref={myRef} className="wrapper" width="400px" >{`${style}----`}</Wrapper>
  );
};

export default Sidebar;
