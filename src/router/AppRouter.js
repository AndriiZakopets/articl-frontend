import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppLayout from 'components/layouts/AppLayout';
import AuthLayout from 'components/layouts/AuthLayout';
import Home from 'pages/Home';
import Article from 'pages/Article';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import * as AuthManager from 'services/AuthManager';
import paths from './paths';

const commonRoutes = [
  {
    path: paths.home,
    Component: Home,
    exact: true,
  },
  {
    path: paths.article,
    Component: Article,
    exact: true,
  },
];

const protectedRoutes = [];

const authRoutes = [
  {
    path: paths.login,
    Component: Login,
    exact: true,
  },
  {
    path: paths.signUp,
    Component: SignUp,
    exact: true,
  },
];

export default function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(AuthManager.isLoggedIn);
  const [user, setUser] = useState(null);

  useEffect(() => {
    return AuthManager.onLoginStatusChange(setIsLoggedIn);
  }, []);

  return isLoggedIn ? (
    <AppLayout>
      <Switch>
        {[...commonRoutes, ...protectedRoutes].map(
          ({ path, Component: C, exact }) => (
            <Route key={path} exact={exact} path={path}>
              <C user={user} />
            </Route>
          ),
        )}
        <Redirect to={paths.home} />
      </Switch>
    </AppLayout>
  ) : (
    <AuthLayout>
      <Switch>
        {[...commonRoutes, ...authRoutes].map(
          ({ path, Component: C, exact }) => (
            <Route key={path} exact={exact} path={path}>
              <C />
            </Route>
          ),
        )}
        <Redirect to={paths.login} />
      </Switch>
    </AuthLayout>
  );
}
