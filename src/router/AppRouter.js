import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppLayout from 'components/layouts/AppLayout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import paths from './paths';

export default function AppRouter() {
  const [user, setUser] = useState(null);

  return (
    <AppLayout {...{ user }}>
      <Switch>
        <Route exact path={paths.home}>
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path={paths.login}>
          <Login />
        </Route>
        <Route exact path={paths.signUp}>
          <SignUp />
        </Route>
      </Switch>
    </AppLayout>
  );
}
