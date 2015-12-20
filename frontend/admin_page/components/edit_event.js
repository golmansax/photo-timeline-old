import { Component, PropTypes } from 'react';
import { A } from '_frontend/components';
import { syncState, removeBinding } from '_client/re_base';
import { bindAll } from '_utils';
import { EventForm } from '../../events/components';

class AdminEditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { event: null };

    bindAll(this, ['_renderForm', '_updateEvent', '_bindToEvent']);
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
    return (
      <div>
        <A route='/'>Back to admin home</A>
        {this._renderForm()}
      </div>
    );
  }

  _renderForm() {
    if (this.state.event === null) { return <div>Loading...</div>; }
    return <EventForm event={this.state.event} onEdit={this._updateEvent} />;
  }

  _updateEvent(data) {
    const newEvent = Object.assign({}, this.state.event, data);
    this.setState({ event: newEvent });
    alert('Successfully edited event!');
    window.location.reload();
  }

  _bindToEvent(id) {
    return syncState(`events/${id}`, {
      context: this,
      state: 'event',
    });
  }
}

AdminEditEvent.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};

export default AdminEditEvent;
