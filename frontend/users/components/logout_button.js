import { Component } from 'react';
import { logOut } from '_client/firebase_ref';

export default class UserLogoutButton extends Component {
  render() {
    return (
      <button onClick={this._logOut}>Log out</button>
    );
  }

  _logOut() {
    logOut();
    alert('Successfully logged out');
    window.location.reload();
  }
}
