/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { HeaderPage, FooterPage } from './components';
import routes from './config/routes';
import { isUserAuthenticated } from './utils/cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserAuthenticated()) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <HeaderPage />
          <Switch>
            {routes.map((route) => {
              if (route.isPublic) {
                return (
                  <Route
                    path={route.path}
                    component={route.component}
                    key={route.path}
                  />
                );
              }
              return (
                <PrivateRoute
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            })}
          </Switch>
          <FooterPage />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
