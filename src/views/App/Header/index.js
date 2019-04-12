import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Select from 'views/Components/Controls/Select';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: auto;
  height: 70px;
  line-height: 70px;
  box-shadow: ${props => props.theme.shadows.hover.dark};
`;

const Input = styled.input.attrs({ type: 'text' })`
  flex: 1;
  border: none;
`;

const IconBell = styled.div`
  position: relative;
  border-left: 1px solid ${props => props.theme.colors.lightGrey};
  padding: 0 25px;
`;

const Icon = styled.i`
  color: ${props => props.theme.colors.text};
`;

const NotificationsCount = styled.span`
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  line-height: 17px;
  background-color: #c4183c;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  top: 29px;
  left: 40px;
  transition: all .3s;
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 215px;
  height: 100%;
  border-left: 1px solid ${props => props.theme.colors.lightGrey};
`;

const Image = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin: 0 15px 0 25px;
`;

const Header = (props) => {
  const { newNotifications, imgSrc, selectOptions, selectPlaceholder } = props;
  return (
    <Wrapper>
      <Icon className="material-icons">
        search
      </Icon>
      <Input placeholder="Search for something..." />
      <IconBell>
        <Icon className="material-icons">
          notifications
        </Icon>
        {
          newNotifications && <NotificationsCount>{newNotifications}</NotificationsCount>
        }
      </IconBell>
      <UserSection>
        <Image src={`${imgSrc}`} />
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
  newNotifications: null,
  imgSrc: '',
  selectPlaceholder: null,
};

Header.propTypes = {
  newNotifications: PropTypes.number,
  imgSrc: PropTypes.string,
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  selectPlaceholder: PropTypes.string,
};

export default Header;
