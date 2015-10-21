import { Component } from 'react';
import AdminLogin from './login';
import ref from '../../firebase_ref';

export default class AdminPageContent extends Component {
  render() {
    if (!ref.getAuth()) { return <AdminLogin /> }

    return <div>Logged in!</div>;
  }
}
