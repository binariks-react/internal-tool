import { exampleReducer, exampleActions } from 'state/ducks/example';

describe('exampleReducer', () => {
  it('inits', () => {
    const state = exampleReducer(undefined, {});
    expect(state).toEqual({});
  });

  it('EXAMPLE_ACTION', () => {
    const action = exampleActions.exampleAction();
    const state = exampleReducer(undefined, action);
    expect(state).toEqual({});
  });
});
