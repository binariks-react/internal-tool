import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from 'views/App/App';

describe('App', () => {
  it('snapshot', () => {
    const app = shallow(
      <App />
    );
    expect(toJson(app)).toMatchSnapshot();
  });
});
