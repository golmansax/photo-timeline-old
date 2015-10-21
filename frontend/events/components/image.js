import { Component, PropTypes } from 'react';

export default class EventImage extends Component {
  render() {
    return (
      <img
        className={this.props.className}
        src={this.props.event.imageUrl}
      />
    );
  }
}

EventImage.propTypes = {
  className: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
};
