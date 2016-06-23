import { cloneElement, PropTypes, Component } from 'react';
import classNames from 'classnames';
import { UserLogoutButton } from '../../users/components';
import EventList from './event_list';
import styles from './layout.css';

class HomePageLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    events: PropTypes.array.isRequired,
    mobileContentLayout: PropTypes.oneOf(['hide', 'modal']).isRequired,
  };

  static defaultProps = {
    mobileContentLayout: 'hide',
  };

  render = () => {
    const { events, mobileContentLayout } = this.props;
    return (
      <div className={styles.parent}>
        <div className={styles.leftColumn}>
          <UserLogoutButton />
          <EventList events={events} />
        </div>
        <div
          className={classNames({
            [styles.rightColumn]: true,
            [styles[mobileContentLayout]]: true,
          })}
          >
          {cloneElement(this.props.children, { events })}
        </div>
      </div>
    );
  };
}

export default HomePageLayout;
