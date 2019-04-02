import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import ducks from './ducks';

const { reducers, sagas } = ducks;

const sagaMiddleware = createSagaMiddleware(...sagas);

export default function configureStore(initialState = {}, history) {
  const rootReducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      applyMiddleware(routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
}
