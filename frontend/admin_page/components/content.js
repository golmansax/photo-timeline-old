import { childrenPropType } from '_frontend/prop_types';
import { UserLogoutButton } from '../../users/components';

const AdminPageContent = ({ children }) => (
  <div>
    Logged in!
    <UserLogoutButton />
    {children}
  </div>
);

AdminPageContent.propTypes = { children: childrenPropType.isRequired };

export default AdminPageContent;
