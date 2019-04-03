import types from './types';

const exampleAction = () => ({
  type: types.EXAMPLE_ACTION,
});

const exampleAction2 = (res1, res2) => ({
  type: types.EXAMPLE_ACTION2,
  payload: {
    res1,
    res2,
  },
});


export default {
  exampleAction,
  exampleAction2,
};
