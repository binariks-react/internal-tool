import { exampleSelectors } from 'state/ducks/example';

describe('exampleSelectors', () => {
  it('exampleSelector', () => {
    const state = {
      exmaple: { state: 123 },
      notExample: {},
    };
    const exampleState = exampleSelectors.exampleSelector(state);
    expect(exampleState).toEqual(state.example);
  });
});
