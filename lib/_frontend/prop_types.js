import { PropTypes } from 'react';

const childrenTypes = [
  PropTypes.element,
  PropTypes.string,
];
childrenTypes.push(PropTypes.arrayOf(PropTypes.oneOfType(childrenTypes)));

export const childrenPropType = PropTypes.oneOfType(childrenTypes);
