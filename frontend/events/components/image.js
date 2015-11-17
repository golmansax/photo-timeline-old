import { PropTypes } from 'react';

const EventImage = ({ className, event }) => (
  <img className={className} src={event.imageUrl} />
);

EventImage.propTypes = {
  className: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
};

export default EventImage;
