import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';
import configureStore from './state/store';

const history = createBrowserHistory();

const reduxStore = configureStore(window.REDUX_INITIAL_DATA, history);

ReactDOM.render(
  <Provider store={reduxStore}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

