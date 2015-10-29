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

const loggedInRoutes = (
  <Router>
    <Route path='/' component={AdminPageContent}>
      <IndexRoute component={AdminEventList} />
      <Route path='events/:id' component={AdminEditEvent} />
      <Route path='create-event' component={AdminNewEvent} />
    </Route>
  </Router>
);

const loggedOutRoutes = (
  <UserLoginForm onLogin={() => window.location.reload()} />
);

render(
  isLoggedIn() ? loggedInRoutes : loggedOutRoutes,
  document.getElementById('content')
);
