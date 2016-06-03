import { Component, PropTypes } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { PhotoSwipe } from 'react-photoswipe';
import { A } from '_frontend/components';
import moment from 'moment';
import EventImage from './image';
import styles from './grid.css';

const EventGridItem = ({ event, onClick }) => (
  <div className={styles.gridItem}>
    <div><A href='#' onClick={onClick}>{event.title}</A></div>
    <div>{moment(event.date).format('MMMM Do YYYY')}</div>
    <div>{event.location}</div>
    <A href='#' onClick={onClick}>
      <EventImage event={event} className={styles.image} />
    </A>
  </div>
);

class EventGrid extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
  };

  state = {
    photoswipeOpen: false,
    selectedIndex: 0,
  };

  render = () => (
    <div>
      <div className={styles.grid}>
        {this.props.events.map((event, index) => (
          <EventGridItem
            key={event.key}
            event={event}
            onClick={this._openPhotoswipe.bind(this, index)}
          />
        ))}
      </div>
      <PhotoSwipe
        isOpen={this.state.photoswipeOpen}
        onClose={this._closePhotoswipe}
        items={this.props.events.map((event) => ({
          src: event.imageUrl,
          title: renderToStaticMarkup(
            <div>{event.title}</div>
          ),
          w: 1200,
          h: 900,
        }))}
        options={{
          index: this.state.selectedIndex,

          // Turn it off until we get it to work with React Router
          history: false,
        }}
      />
    </div>
  );

  _openPhotoswipe = (selectedIndex, event) => {
    event.preventDefault();
    this.setState({ photoswipeOpen: true, selectedIndex });
  };

  _closePhotoswipe = () => this.setState({ photoswipeOpen: false });
}

export default EventGrid;
