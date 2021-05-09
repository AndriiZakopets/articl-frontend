import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import paths from './paths';

export default function RootRouter() {
  return (
    <Router>
      <Switch>
        <Route path={paths.home} exact component={Home} />
        <Route path={paths.login} exact component={Login} />
        <Route path={paths.signup} exact component={SignUp} />
        <Redirect to={paths.home} />
      </Switch>
    </Router>
  );
}
