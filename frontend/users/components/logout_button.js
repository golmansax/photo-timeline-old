import { alert, reloadPage } from '_frontend/actions';
import { logOut } from '_client/firebase_ref';

function logOutAndReload() {
  logOut();
  alert('Successfully logged out');
  reloadPage();
}

const UserLogoutButton = () => (
  <button onClick={logOutAndReload}>Log out</button>
);

export default UserLogoutButton;
