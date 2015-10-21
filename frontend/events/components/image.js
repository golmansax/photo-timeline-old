import { Component, PropTypes } from 'react';

export default class EventImage extends Component {
  render() {
    console.log(this.props.event.date);
    return <img src={this.props.event.imageUrl} />;
  }
}

EventImage.PropTypes = {
  event: PropTypes.object.isRequired,
};
