import { Component } from 'react';
import { bindToState, removeBinding } from '_client/re_base';
import { A } from '_frontend/components';
import { EventList } from '../../events/components';

export default class AdminEventList extends Component {
  constructor(props) {
    super(props);
    this.state = { events: null };
  }

  componentWillMount() {
    this._binding = bindToState('events', {
      context: this,
      state: 'events',
      asArray: true,
      queries: { orderByChild: 'date' },
    });
  }

  componentWillUnmount() {
    removeBinding(this._binding);
  }

  render() {
    if (this.state.events === null) { return <div>Loading...</div>; }
    return (
      <div>
        <EventList events={this.state.events} />
        <A route='/create-event'>Blah</A>
      </div>
    );
  }
}
