import { exampleActions, exampleTypes, exampleSaga } from 'state/ducks/example';
import { exampleSagaAction, watchExampleAction } from 'state/ducks/example/sagas';
import { takeEvery, all, put } from 'redux-saga/effects';

describe('exampleSaga', () => {
  it('exampleSagaAction', () => {
    const gen = exampleSagaAction();
    const res1 = 100;
    const res2 = 200;
    gen.next();
    gen.next(res1);
    expect(gen.next(res2).value).toEqual(put(exampleActions.exampleAction2(res1, res2)));
    expect(gen.next().done).toBe(true);
  });
  it('watchExampleAction', () => {
    const gen = watchExampleAction();
    expect(gen.next().value).toEqual(takeEvery(exampleTypes.EXAMPLE_ACTION, exampleSagaAction));
  });
  it('exampleSaga', () => {
    const gen = exampleSaga();
    expect(gen.next().value).toEqual(all([watchExampleAction()]));
  });
});
