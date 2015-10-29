import { Component } from 'react';
import { children } from '_frontend/prop_types';
import { UserLogoutButton } from '../../users/components';

export default class AdminPageContent extends Component {
  render() {
    return (
      <div>
        Logged in!
        <UserLogoutButton />
        {this.props.children}
      </div>
    );
  }
}

AdminPageContent.propTypes = { children: children.isRequired };
