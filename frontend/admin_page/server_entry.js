import { Component } from 'react';
import { DefaultLayout } from 'core/layouts';
import { makeServerEntry } from 'core/utils';

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
