import { render } from 'react-dom';
import { UserLoginForm } from '../users/components';
import { isLoggedIn } from '_client/firebase_ref';
import { makeClientEntry, getElementById } from '_frontend/utils';
import { reloadPage } from '_frontend/actions';
import loggedInRoutes from './routes';

const loggedOutRoutes = <UserLoginForm onLogin={reloadPage} />;

render(
  makeClientEntry(isLoggedIn() ? loggedInRoutes : loggedOutRoutes),
  getElementById('content')
);
