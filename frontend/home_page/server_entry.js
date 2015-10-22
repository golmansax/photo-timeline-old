import { Component } from 'react';
import { DefaultLayout } from 'core/layouts';
import { makeServerEntry } from 'core/utils';

class HomePage extends Component {
  render() {
    return (
      <DefaultLayout title='My Photo Timeline' name='home_page'>
        <div id='content' />
      </DefaultLayout>
    );
  }
}

export default makeServerEntry(HomePage);
