import { cloneElement, PropTypes, Component } from 'react';
import { bindToState, removeBinding } from '_client/re_base';
import { UserLogoutButton } from '../../users/components';
import EventList from './event_list';
import styles from './layout.css';

class HomePageLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    events: null,
  };

  componentWillMount() {
    this._binding = bindToState('events', {
      context: this,
      state: 'events',
      asArray: true,
      queries: { orderByChild: 'date' },
    });
  }

  componentWillUnmount() {
    removeBinding(this._binding);
  }

  render = () => {
    if (!this.state.events) { return <div>Loading...</div>; }

    const events = [...this.state.events];
    events.reverse();

    return (
      <div className={styles.parent}>
        <div className={styles.leftColumn}>
          <UserLogoutButton />
          <EventList events={events} />
        </div>
        <div className={styles.rightColumn}>
          {cloneElement(this.props.children, { events })}
        </div>
      </div>
    );
  };
}

export default HomePageLayout;
