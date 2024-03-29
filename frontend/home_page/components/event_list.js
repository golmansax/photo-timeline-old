import { PropTypes } from 'react';
import moment from 'moment';
import { groupBy } from '_array_utils';
import { A } from '_frontend/components';

const Event = ({ event }) => (
  <div>
    <A route={`events/${event.key}`}>{event.title}</A>
  </div>
);

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

const EventList = ({ events }) => {
  const eventsByYear = groupBy(events, (event) => (
    moment(event.date).get('year')
  ));

  const years = Object.keys(eventsByYear).sort().reverse();

  return (
    <div>
      {years.map((year) => (
        <div key={year}>
          <div>{year}</div>
          {eventsByYear[year].map((event) => (
            <Event key={event.key} event={event} />
          ))}
        </div>
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;
