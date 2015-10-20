import { Component } from 'react';
import { DefaultLayout } from '../base/layouts';

export default class HomePage extends Component {
  render() {
    return (
      <DefaultLayout title='My Impact Pledge' name='home_page'>
        <div id='content' />
      </DefaultLayout>
    );
  }
}
