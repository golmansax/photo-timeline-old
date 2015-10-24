import { PropTypes } from 'react';

export const children = PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.element),
]);
