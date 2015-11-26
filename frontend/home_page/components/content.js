import { UserLogoutButton } from '../../users/components';
import HomeYearLinks from './year_links';

const HomePageContent = ({ children }) => (
  <div>
    <UserLogoutButton />
    <HomeYearLinks />
    {children}
  </div>
);

export default HomePageContent;
