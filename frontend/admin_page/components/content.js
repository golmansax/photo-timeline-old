import { Component } from 'react';
import AdminLogin from './login';
import ref from 'client/firebase_ref';

export default class AdminPageContent extends Component {
  render() {
    if (!ref.getAuth()) { return <AdminLogin />; }

    return (
      <div>
        Logged in!
        <button onClick={this._logOut}>Log out</button>
      </div>
    );
  }

  _logOut() {
    ref.unauth();
    alert('Successfully logged out');
    window.location.reload();
  }
}
