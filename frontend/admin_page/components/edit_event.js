import { Component, PropTypes } from 'react';
import reactMixin from 'react-mixin';
import { History } from 'react-router';
import { A } from '_frontend/components';
import { bindToState, removeBinding } from '_client/re_base';
import { bindAll } from '_utils';
import { EventForm } from '../../events/components';
import { saveEvent, removeEvent } from '../../events/actions';

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

  _alertSuccess = (id) => {
    alert('Successfully edited event!');
    this.history.pushState(null, `/events/${id}`);
  };

  _updateEvent(data) {
    const editedEvent = Object.assign({}, this.state.event, data);
    if (editedEvent.slug === this.props.params.id) {
      saveEvent(this.props.params.id, editedEvent)
        .then(this._alertSuccess.bind(null, this.props.params.id));

      return;
    }

    // If slug has changed, delete old event and save new one
    let returnedCallbacks = 0;
    const callback = () => {
      if (++returnedCallbacks === 2) {
        this._alertSuccess(editedEvent.slug);
      }
    };

    removeEvent(this.props.params.id).then(callback);
    saveEvent(editedEvent.slug, editedEvent).then(callback);
  }

  _bindToEvent(id) {
    return bindToState(`events/${id}`, {
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

reactMixin.onClass(AdminEditEvent, History);

export default AdminEditEvent;
