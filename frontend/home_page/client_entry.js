import { render } from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import {
  HomePageContent,
  HomeMainDisplay,
  HomeYearDisplay,
} from './components';
import { UserLoginForm } from '../users/components';
import { isLoggedIn } from '_client/firebase_ref';
import { makeClientEntry } from '_frontend/utils';

const loggedInRoutes = (
  <Router>
    <Route path='/' component={HomePageContent}>
      <IndexRoute component={HomeMainDisplay} />
      <Route path='year/:year' component={HomeYearDisplay} />
    </Route>
  </Router>
);

const loggedOutRoutes = (
  <UserLoginForm onLogin={() => window.location.reload()} />
);

render(
  makeClientEntry(isLoggedIn() ? loggedInRoutes : loggedOutRoutes),
  document.getElementById('content')
);
