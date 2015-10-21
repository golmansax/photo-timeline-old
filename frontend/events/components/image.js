import { Component, PropTypes } from 'react';

export default class EventImage extends Component {
  render() {
    return <img src={this.props.event.imageUrl} />;
  }
}

EventImage.propTypes = {
  event: PropTypes.object.isRequired,
};
