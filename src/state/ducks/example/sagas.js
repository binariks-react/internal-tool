import types from './types';
import { takeEvery, all } from 'redux-saga/effects';


export const exampleSagaAction = function*() {
  // do smthing
};

export const watchExampleAction = function*() {
  yield takeEvery(types.EXAMPLE_ACTION, exampleSagaAction);
};

export default function* exampleSaga() {
  yield all([watchExampleAction()]);
}
