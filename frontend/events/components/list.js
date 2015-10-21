import { Component, PropTypes } from 'react';
import EventImage from './image';

export default class EventList extends Component {
  render() {
    return (
      <div>
        {this.props.events.map(this._renderEvent)}
      </div>
    );
  }

  _renderEvent(event) {
    return <div key={event.key}><EventImage {...{event}} /></div>;
  }
}

EventList.PropTypes = {
  events: PropTypes.array.isRequired,
};
