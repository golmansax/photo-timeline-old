import { DefaultLayout } from '_frontend/layouts';
import { makeServerEntry } from '_frontend/utils';

const AdminPage = () => (
  <DefaultLayout title='My Photo Timeline – Admin' name='admin_page'>
    <div id='content' />
  </DefaultLayout>
);

export default makeServerEntry(AdminPage);
