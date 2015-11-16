import { Component, PropTypes } from 'react';
import moment from 'moment';
import { bindAll } from '_utils';
import { A } from '_frontend/components';
import { childRef } from '_client/firebase_ref';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    bindAll(this, ['_renderEvent']);
  }

  render() {
    return (
      <div>
        {this.props.events.map(this._renderEvent)}
      </div>
    );
  }

  _renderEvent(event) {
    return (
      <div key={event.key}>
        <div>{event.title} – {moment(event.date).format('MMMM Do YYYY')}</div>
        <A route={`/events/${event.key}`}>[edit]</A>
        <A onClick={this._removeEvent.bind(this, event)}>[remove]</A>
      </div>
    );
  }

  _removeEvent(event) {
    if (confirm(`Are you sure you want to remove '${event.title}'?`)) {
      childRef(`events/${event.key}`).remove(() => {
        alert('Successfully removed!');
      });
    }
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};
