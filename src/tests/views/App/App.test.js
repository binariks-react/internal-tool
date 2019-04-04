import React from 'react';
import { shallow } from 'enzyme';
import App from 'views/App/App';

describe('App', () => {
  it('snapshot', () => {
    const app = shallow(
      <App />
    );
    expect(app).toMatchSnapshot();
  });
});
