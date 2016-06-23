import { PropTypes, Component } from 'react';
import { EventImage } from '../../events/components';
import moment from 'moment';
import styles from './event_display.css';
import HomePageLayout from './layout';

class HomeEventDisplay extends Component {
  static propTypes = {
    events: PropTypes.array,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  };

  render() {
    const event = this.props.events.find((event) => (
      event.key === this.props.params.id
    ));

    return (
      <HomePageLayout {...this.props} mobileContentLayout='modal'>
        <div className={styles.parent}>
          <div className={styles.info}>
            <div>{event.title}</div>
            <div>{moment(event.date).format('MMMM Do YYYY')}</div>
            <div>{event.location}</div>
          </div>
          <EventImage event={event} className={styles.image} />
        </div>
      </HomePageLayout>
    );
  }
}

export default HomeEventDisplay;
