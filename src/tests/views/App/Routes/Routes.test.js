import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from 'views/App/Routes/Routes';

describe('Routes', () => {
  it('snapshot', () => {
    const routes = shallow(
      <Routes />
    );
    expect(toJson(routes)).toMatchSnapshot();
  });
});
