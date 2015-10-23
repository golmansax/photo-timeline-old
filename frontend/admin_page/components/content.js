import { Component } from 'react';
import { logOut } from '_client/firebase_ref';

export default class AdminPageContent extends Component {
  render() {
    return (
      <div>
        Logged in!
        <button onClick={this._logOut}>Log out</button>
        {this.props.children}
      </div>
    );
  }

  _logOut() {
    logOut();
    alert('Successfully logged out');
    window.location.reload();
  }
}
