import { PropTypes } from 'react';
import moment from 'moment';
import { A } from '_frontend/components';
import { removeEvent } from '../actions';

function askToRemoveEvent(event) {
  if (confirm(`Are you sure you want to remove '${event.title}'?`)) {
    removeEvent(event.key).then(() => alert('Successfully removed!'));
  }
}

const renderEvent = (event) => (
  <div key={event.key}>
    <div>{event.title} – {moment(event.date).format('MMMM Do YYYY')}</div>
    <A route={`/events/${event.key}`}>[edit]</A>
    <A onClick={askToRemoveEvent.bind(null, event)}>[remove]</A>
  </div>
);

const EventList = ({ events }) => (
  <div>{events.map(renderEvent)}</div>
);

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;
