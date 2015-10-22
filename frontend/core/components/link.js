import { Component, PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import classNames from 'classnames';

export default class Link extends Component {
  render() {
    const myClass = classNames({
      [this.props.className]: !!this.props.className,
    });

    if (this.props.route) {
      // A React Router link
      return <RouterLink {...this.props} to={this.props.route} />;
    }

    return (
      <div>{this.props.children}</div>
    );
  }
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  className: PropTypes.string,
  route: PropTypes.string,
};
