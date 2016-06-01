import { PropTypes } from 'react';
import { UserLogoutButton } from '../../users/components';
import HomeYearLinks from './year_links';

const HomePageContent = ({ children }) => (
  <div>
    <UserLogoutButton />
    <HomeYearLinks />
    {children}
  </div>
);

HomePageContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageContent;
