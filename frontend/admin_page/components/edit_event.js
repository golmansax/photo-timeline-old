import { Component } from 'react';
import { A } from '_frontend/components';
import { syncState, removeBinding } from '_client/re_base';
import { EventForm } from '../../events/components';

export default class AdminEditEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { event: null };

    [
      '_renderForm', '_updateEvent'
    ].forEach((key) => this[key] = this[key].bind(this));
  }

  componentWillMount() {
    this._binding = syncState(`events/${this.props.params.id}`, {
      context: this,
      state: 'event',
    });
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
  }
}
