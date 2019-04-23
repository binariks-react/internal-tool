import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TestPage from 'views/Pages/TestPage/TestPageContainer';
import BlogPostsPage from 'views/Pages/BlogPostsPage/BlogPostsPage';

const routes = [
  {
    path: '/',
    exact: true,
    component: TestPage,
  },
  {
    path: '/posts',
    component: BlogPostsPage,
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
