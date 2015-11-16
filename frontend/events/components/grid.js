import { Component, PropTypes } from 'react';
import moment from 'moment';
import EventImage from './image';
import styles from './grid.css';

const renderEvent = (event) => (
  <div className={styles.gridItem} key={event.key}>
    <div>{event.title}</div>
    <div>{moment(event.date).format('MMMM Do YYYY')}</div>
    <div>{event.location}</div>
    <EventImage {...{event}} className={styles.image} />
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
