import { Component, PropTypes } from 'react';
import moment from 'moment';
import EventImage from './image';
import styles from './grid.css';

export default class EventList extends Component {
  render() {
    return (
      <div className={styles.grid}>
        {this.props.events.map(this._renderEvent)}
      </div>
    );
  }

  _renderEvent(event) {
    return (
      <div className={styles.gridItem} key={event.key}>
        <div>{event.title}</div>
        <div>{moment(event.date).format('MMMM Do YYYY')}</div>
        <EventImage {...{event}} className={styles.image} />
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};
