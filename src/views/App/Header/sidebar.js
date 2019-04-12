import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  min-width: 300px;
  height: 100vh;
  border-right: 1px solid #333;
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #333;
  text-align: center;
  line-height: 70px;
  cursor: pointer;
  color: #222;
`;

const Panel = styled.div.attrs({ 'data-test': 'panel' })`
  display: flex;
  align-items: center;
  height: 60px;
  border-left: ${({ selected, ...props }) => (
    selected ? '5px solid tomato' : '5px solid transparent'
  )};
  border-bottom: 1px solid #333;
  padding-left: 30px;
  line-height: 60px;
  cursor: pointer;
  background-color: ${({ selected }) => selected ? '#555' : '#fff'};
  color: ${({ selected }) => selected ? 'tomato' : '#222'};
  transition: all .3s;
  
  &:hover {
    background-color: #333;
  }
`;

const Icon = styled.i`
  margin-right: 10px;
`;


const Sidebar = ({ titles, onClick, preventDefault, stopPropagation }) => {
  const [selectedKey, setSelectedKey] = useState(titles.length && titles[0].title.replace(/\s/g, ''));

  const handleClick = key => (e) => {
    if (preventDefault) e.preventDefault();
    if (stopPropagation) e.stopPropagation();
    setSelectedKey(key);
    onClick(e);
  };

  return (
    <Wrapper className="wrapper">
      <Header>Dashboards</Header>
      {
        !!titles.length &&
        titles.map(({ title, icon }) => {
          const key = title.replace(/\s/g, '');
          return (
            <Panel
              key={key}
              selected={selectedKey === key}
              onClick={handleClick(key)}
            >
              <Icon className="material-icons">
                { icon }
              </Icon>
              <span>{title}</span>
            </Panel>
          );
        })
      }
    </Wrapper>
  );
};

Sidebar.defaultProps = {
  titles: [],
  onClick: () => {},
  preventDefault: true,
  stopPropagation: true,
};

Sidebar.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func,
  preventDefault: PropTypes.bool,
  stopPropagation: PropTypes.bool,
};

export default Sidebar;
