import React from 'react';
import { shallow } from 'enzyme';
import Routes from 'views/App/Routes/Routes';

describe('Routes', () => {
  it('snapshot', () => {
    const routes = shallow(
      <Routes />
    );
    expect(routes).toMatchSnapshot();
  });
});
