import { exampleActions, exampleTypes } from 'state/ducks/example';

describe('exampleActions', () => {
  it('exampleAction', () => {
    const action = exampleActions.exampleAction();
    expect(action).toEqual({
      type: exampleTypes.EXAMPLE_ACTION,
    });
  });
  it('exampleAction2', () => {
    const action = exampleActions.exampleAction2(12, 13);
    expect(action).toEqual({
      type: exampleTypes.EXAMPLE_ACTION2,
      payload: {
        res1: 12,
        res2: 13,
      },
    });
  });
});
