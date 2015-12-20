import { PropTypes, Component } from 'react';
import { syncState, removeBinding } from '_client/re_base';
import { EventImage } from '../../events/components';
import moment from 'moment';
import { bindAll } from '_utils';

class HomeEventDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { event: null };
    bindAll(this, ['_bindToEvent']);
  }

  componentWillMount() {
    this._binding = this._bindToEvent(this.props.params.id);
  }

  componentWillReceiveProps({ params }) {
    if (params.id && params.id !== this.props.params.id) {
      removeBinding(this._binding);
      this._binding = this._bindToEvent(params.id);
    }
  }

  componentWillUnmount() {
    removeBinding(this._binding);
  }

  render() {
    if (this.state.event === null) { return <div>Loading...</div>; }
    const { event } = this.state;

    return (
      <div>
        <div>{event.title}</div>
        <div>{moment(event.date).format('MMMM Do YYYY')}</div>
        <div>{event.location}</div>
        <EventImage event={event} />
      </div>
    );
  }

  _bindToEvent(id) {
    return syncState(`events/${id}`, {
      context: this,
      state: 'event',
    });
  }
}

HomeEventDisplay.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

export default HomeEventDisplay;
