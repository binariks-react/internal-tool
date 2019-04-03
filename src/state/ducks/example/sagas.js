import types from './types';
import actions from './actions';
import { takeEvery, all, put } from 'redux-saga/effects';


export const exampleSagaAction = function*() {
  const res1 = yield Promise.resolve(12);
  const res2 = yield Promise.resolve(13);
  yield put(actions.exampleAction2(res1, res2));
};

export const watchExampleAction = function*() {
  yield takeEvery(types.EXAMPLE_ACTION, exampleSagaAction);
};

export default function* exampleSaga() {
  yield all([watchExampleAction()]);
}
