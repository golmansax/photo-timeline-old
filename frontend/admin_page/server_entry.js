import { Component } from 'react';
import { DefaultLayout } from '../base/layouts';
import { makeServerEntry } from '../base/utils';

class AdminPage extends Component {
  render() {
    return (
      <DefaultLayout title='My Photo Timeline – Admin' name='admin_page'>
        <div id='content' />
      </DefaultLayout>
    );
  }
}

export default makeServerEntry(AdminPage);
