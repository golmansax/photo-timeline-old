import { Component, PropTypes } from 'react';
import { authWithPassword } from '_client/firebase_ref';

class UserLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    ['_validateAndSubmit'].forEach((key) => (this[key] = this[key].bind(this)));
  }

  render() {
    return (
      <form onSubmit={this._validateAndSubmit}>
        Sign-in
        <div>
          <label>Email</label>
          <input
            type='text'
            value={this.state.email}
            onChange={this._updateState.bind(this, 'email')}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            value={this.state.password}
            onChange={this._updateState.bind(this, 'password')}
          />
        </div>
        <input type='submit' value='Sign in' />
      </form>
    );
  }

  _updateState(key, event) {
    this.setState({ [key]: event.target.value });
  }

  _validateAndSubmit(event) {
    // Don't allow page navigation
    event.preventDefault();

    const message = this._getValidationMessage();
    if (message) {
      alert(message);
      return;
    }

    authWithPassword({
      email: this.state.email,
      password: this.state.password,
    }, (error) => {
      if (error) {
        alert(error.message);
      } else {
        alert(`Successfully logged in with ${this.state.email}`);
        this.props.onLogin();
      }
    });
  }

  _getValidationMessage() {
    if (!this.state.email) {
      return 'Please enter a valid email';
    } else if (!this.state.password) {
      return 'Please enter a password';
    }

    return null;
  }
}

UserLoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default UserLoginForm;
