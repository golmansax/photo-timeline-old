import { PropTypes } from 'react';
import { A } from '_frontend/components';
import moment from 'moment';
import EventImage from './image';
import styles from './grid.css';

const renderEvent = (event) => (
  <div className={styles.gridItem} key={event.key}>
    <div><A route={`/events/${event.key}`}>{event.title}</A></div>
    <div>{moment(event.date).format('MMMM Do YYYY')}</div>
    <div>{event.location}</div>
    <EventImage event={event} className={styles.image} />
  </div>
);

const EventGrid = ({ events }) => (
  <div className={styles.grid}>
    {events.map(renderEvent)}
  </div>
);

EventGrid.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventGrid;
