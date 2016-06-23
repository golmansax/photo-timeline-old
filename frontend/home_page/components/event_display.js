import { PropTypes } from 'react';
import { EventImage } from '../../events/components';
import moment from 'moment';
import styles from './event_display.css';
import HomePageLayout from './layout';

const HomeEventDisplay = (props) => {
  const { events, params } = props;
  const myEvent = events.find((event) => (
    event.key === params.id
  ));

  return (
    <HomePageLayout {...props} mobileContentLayout='modal'>
      <div className={styles.parent}>
        <div className={styles.info}>
          <div>{myEvent.title}</div>
          <div>{moment(myEvent.date).format('MMMM Do YYYY')}</div>
          <div>{myEvent.location}</div>
        </div>
        <EventImage event={myEvent} className={styles.image} />
      </div>
    </HomePageLayout>
  );
};

HomeEventDisplay.propTypes = {
  events: PropTypes.array,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default HomeEventDisplay;
