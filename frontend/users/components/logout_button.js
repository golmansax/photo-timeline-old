import { logOut } from '_client/firebase_ref';

function logOutAndReload() {
  logOut();
  alert('Successfully logged out');
  window.location.reload();
}

const UserLogoutButton = () => (
  <button onClick={logOutAndReload}>Log out</button>
);

export default UserLogoutButton;
