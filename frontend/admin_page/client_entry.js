import { render } from 'react-dom';
import {
  AdminPageContent,
  AdminLogin,
  AdminEventList,
  AdminEditEvent,
  AdminNewEvent,
} from './components';
import { Router, IndexRoute, Route, Link } from 'react-router';
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

const loggedOutRoutes = <AdminLogin />;

render(
  isLoggedIn() ? loggedInRoutes : loggedOutRoutes,
  document.getElementById('content')
);
