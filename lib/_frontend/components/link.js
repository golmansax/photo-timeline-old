import { PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import { childrenPropType } from '_frontend/prop_types';

const Link = ({ route, children, ...otherProps }) => {
  if (route) {
    // A React Router link
    return (
      <RouterLink {...otherProps} to={route}>
        {children}
      </RouterLink>
    );
  }

  return <a {...otherProps}>{children}</a>;
};

Link.propTypes = {
  children: childrenPropType,
  route: PropTypes.string,
};

export default Link;
