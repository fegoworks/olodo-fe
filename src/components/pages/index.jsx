/** @format */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '<core>/routing';

import { HamburgerProvider } from '<state>/HamburgerContext';
import { BooksContextProvider } from '<state>/BooksContext';
import { CartContextProvider } from '<state>/CartContext';

// import GlobalContext from '<state>/GlobalContext';

const BaseRoutes = () => (
  <BooksContextProvider>
    <CartContextProvider>
      <HamburgerProvider>
        <Switch>
          {routes.default.map(({ exact, path, component }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              component={component}
            />
          ))}
        </Switch>
      </HamburgerProvider>
    </CartContextProvider>
  </BooksContextProvider>
);

export default BaseRoutes;
