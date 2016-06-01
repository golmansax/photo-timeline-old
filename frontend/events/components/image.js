import { PropTypes } from 'react';

const EventImage = ({ className, event }) => (
  <img role='presentation' className={className} src={event.imageUrl} />
);

EventImage.propTypes = {
  className: PropTypes.string,
  event: PropTypes.object.isRequired,
};

export default EventImage;
