import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TestPage from 'views/Pages/TestPage/TestPageContainer';

const routes = [
  {
    path: '/',
    exact: true,
    component: TestPage,
  },
];

const Routes = () => (
  <Switch>
    {
      routes.map(r => (
        <Route
          key={r.path}
          path={r.path}
          exact={r.exact}
          component={r.component}
        />))
    }
  </Switch>
);

export default Routes;
