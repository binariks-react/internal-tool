import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'views/Pages/SubscribersSection/HomePage/HomePage';

const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
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
