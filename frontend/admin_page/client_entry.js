import { render } from 'react-dom';
import {
  AdminPageContent,
  AdminEventList,
  AdminEditEvent,
  AdminNewEvent,
} from './components';
import { UserLoginForm } from '../users/components';
import { Router, IndexRoute, Route } from 'react-router';
import { isLoggedIn } from '_client/firebase_ref';
import { reloadPage } from '_frontend/actions';
import { makeClientEntry, getElementById } from '_frontend/utils';

const loggedInRoutes = (
  <Router>
    <Route path='/' component={AdminPageContent}>
      <IndexRoute component={AdminEventList} />
      <Route path='events/:id' component={AdminEditEvent} />
      <Route path='create-event' component={AdminNewEvent} />
    </Route>
  </Router>
);

const loggedOutRoutes = <UserLoginForm onLogin={reloadPage} />;

render(
  makeClientEntry(isLoggedIn() ? loggedInRoutes : loggedOutRoutes),
  getElementById('content')
);
