import { render } from 'react-dom';
import {
  AdminPageContent,
  AdminLogin,
  AdminEventList,
  AdminEventForm,
} from './components';
import { Router, IndexRoute, Route, Link } from 'react-router';
import { isLoggedIn } from 'client/firebase_ref';

const loggedInRoutes = (
  <Router>
    <Route path='/' component={AdminPageContent}>
      <IndexRoute component={AdminEventList} />
      <Route path='events/:id' component={AdminEventForm} />
    </Route>
  </Router>
);

const loggedOutRoutes = <AdminLogin />;

render(
  isLoggedIn() ? loggedInRoutes : loggedOutRoutes,
  document.getElementById('content')
);
