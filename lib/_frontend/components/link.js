import { Component, PropTypes } from 'react';
import { Link as RouterLink } from 'react-router';
import children from '_frontend/prop_types';

export default class Link extends Component {
  render() {
    if (this.props.route) {
      // A React Router link
      return (
        <RouterLink {...this.props} to={this.props.route}>
          {this.props.children}
        </RouterLink>
      );
    }

    return (
      <a {...this.props}>{this.props.children}</a>
    );
  }
}

Link.propTypes = {
  children,
  route: PropTypes.string,
};
