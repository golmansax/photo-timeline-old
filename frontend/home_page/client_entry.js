import { render } from 'react-dom';
import { HomePageContent } from './components';
import { UserLoginForm } from '../users/components';
import { isLoggedIn } from '_client/firebase_ref';
import { makeClientEntry } from '_frontend/utils';

const loggedInRoutes = (
  <HomePageContent />
);

const loggedOutRoutes = (
  <UserLoginForm onLogin={() => window.location.reload()} />
);

render(
  makeClientEntry(isLoggedIn() ? loggedInRoutes : loggedOutRoutes),
  document.getElementById('content')
);
