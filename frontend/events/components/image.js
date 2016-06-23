import { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './image.css';

const EventImage = ({ className, event }) => (
  <div
    className={classNames({
      [styles.image]: true,
      [className]: className,
    })}
    style={{ backgroundImage: `url(${event.imageUrl})` }}
  />
);

EventImage.propTypes = {
  className: PropTypes.string,
  event: PropTypes.object.isRequired,
};

export default EventImage;
