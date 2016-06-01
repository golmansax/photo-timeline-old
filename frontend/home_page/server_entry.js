import { DefaultLayout } from '_frontend/layouts';
import { makeServerEntry } from '_frontend/utils';

const HomePage = () => (
  <DefaultLayout title='My Photo Timeline' name='home_page'>
    <div id='content' />
  </DefaultLayout>
);

export default makeServerEntry(HomePage);
