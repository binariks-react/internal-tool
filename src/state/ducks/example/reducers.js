import types from './types';

const initialState = {};

const example = (state = initialState, action) => {
  switch (action.type) {
  case types.EXAMPLE_ACTION:
    return initialState;
  default:
    return state;
  }
};

export default example;
