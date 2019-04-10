import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getColor = (color, props) => (
  props ? props.theme.colors[color] : ({ theme: { colors } }) => colors[color]
);

const getActiveColor = (color, props) => {
  if (props) return props.theme.colors.activeColors[color];
  // return ({ theme: { colors: { activeColors } } }) => activeColors[color];
};

const getHoverColors = color =>
  // if (props) return props.theme.colors.activeColors[color];
  ({ theme: { colors: { hoverColors } } }) => hoverColors[color]
;

const Wrapper = styled.div`
  width: 300px;
  display: block;
  height: 100vh;
  border-right: 1px solid ${getColor('lightGrey')};
`;

const Header = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${getColor('lightGrey')};
  text-align: center;
  line-height: 70px;
  color: ${getColor('text')};
`;

const Panel = styled.div.attrs({ 'data-test': 'panel' })`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-left: ${({ selected, ...props }) => (
    selected ? `5px solid ${getColor('primary', props)}` : '5px solid transparent'
  )};
  border-bottom: 1px solid ${getColor('lightGrey')};
  padding-left: 30px;
  line-height: 60px;
  background-color: ${({ selected, ...props }) => selected ? getActiveColor('lightGrey', props) : getColor('white', props)};
  color: ${({ selected, ...props }) => selected ? getColor('primary', props) : getColor('text', props)};
  
  &:hover {
    background-color: ${getHoverColors('lightGrey')};
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
