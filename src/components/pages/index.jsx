/** @format */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '<core>/routing';
import { HamburgerProvider } from '@/state/HamburgerContext';

// import GlobalContext from '<state>/GlobalContext';

const BaseRoutes = () => (
  // <GlobalContext>
  <HamburgerProvider>
    <Switch>
      {routes.default.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </HamburgerProvider>
  // </GlobalContext>
);

export default BaseRoutes;
