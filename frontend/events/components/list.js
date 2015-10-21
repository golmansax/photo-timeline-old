import { Component, PropTypes } from 'react';
import moment from 'moment';
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
    return (
      <div key={event.key}>
        <div>{moment(event.date).format('MMMM Do YYYY')}</div>
        <EventImage {...{event}} />
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};
