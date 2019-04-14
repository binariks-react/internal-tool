import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from 'views/Components/Controls/Select';

const Wrapper = styled.div.attrs({ 'data-test': 'wrapper' })`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  height: 70px;
  line-height: 70px;
  padding-left: 20px;
  box-shadow: ${props => props.theme.shadows.hover.dark};
`;

const Input = styled.input.attrs({ type: 'text', 'data-test': 'input' })`
  font-family: Roboto;
  font-size: 1rem;
  flex: 1;
  border: none;
  margin-left: 5px;
  height: 98%;
  outline: none;
`;

const NotificationWrapper = styled.div.attrs({ 'data-test': 'notifications' })`
  display: flex;
  align-items: center;
  height: 70px;
  position: relative;
  cursor: pointer;
  border-left: 1px solid ${props => props.theme.colors.lightGrey};
  padding: 0 25px;
`;

const SearchIcon = styled.i`
  color: ${props => props.theme.colors.icon};
`;

const NotificationIcon = styled.i`
  color: ${props => props.theme.colors.text};
`;

const NotificationsCount = styled.span.attrs({ 'data-test': 'notificationCount' })`
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  line-height: 17px;
  background-color: #c4183c;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  top: 35px;
  left: 40px;
  transition: all .3s;
`;

const UserSection = styled.div.attrs({ 'data-test': 'userSection' })`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 215px;
  height: 100%;
  border-left: 1px solid ${props => props.theme.colors.lightGrey};
`;

const UserImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin: 0 15px 0 25px;
`;

const Header = (props) => {
  const { notifications } = props;
  const imgSrc = 'https://source.unsplash.com/random/50x50';
  const selectPlaceholder = 'Sierra Brooks';
  const selectOptions = [
    {
      value: 1,
      label: 'First',
    },
    {
      value: 2,
      label: 'Second',
    },
    {
      value: 3,
      label: 'Third',
    },
  ];

  return (
    <Wrapper>
      <SearchIcon className="material-icons">
        search
      </SearchIcon>
      <Input placeholder="Search for something..." />
      <NotificationWrapper>
        <NotificationIcon className="material-icons">
          notifications
        </NotificationIcon>
        {
          notifications && <NotificationsCount>{notifications}</NotificationsCount>
        }
      </NotificationWrapper>
      <UserSection>
        <UserImage src={`${imgSrc}`} />
        <Select
          options={selectOptions}
          placeholder={selectPlaceholder}
          style={{ width: '100%', height: '100%', border: 'none', outline: 'none', marginRight: '10px' }}
        />
      </UserSection>
    </Wrapper>
  );
};

Header.defaultProps = {
  notifications: null,
};

Header.propTypes = {
  notifications: PropTypes.number,
};

export default Header;
