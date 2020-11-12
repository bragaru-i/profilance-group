import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import NotFoundPage from './UI/NotFound/NotFoundPage';

import AllNews from './News/AllNews';
import AddArticle from './News/components/AddArticle/AddArticle';
import Article from './News/components/Article/Article';

const ROUTES = [
  { path: '/profilance-group/', key: 'ROOT', exact: true, component: HomePage },

  {
    path: '/profilance-group/news',
    key: 'NEWS',
    component: RenderRoutes,
    routes: [
      {
        path: '/profilance-group/news',
        key: 'NEWS_ROOT',
        exact: true,
        component: AllNews,
      },
      {
        path: '/profilance-group/news/add',
        key: 'NEWS_ADD',
        exact: true,
        component: AddArticle,
      },
      {
        path: '/profilance-group/news/:newsid',
        key: `A_PARTICULAR_NEW`,
        exact: true,
        component: Article,
      },
    ],
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
}

export default ROUTES;
