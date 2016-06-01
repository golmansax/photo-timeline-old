import { Component } from 'react';
import { bindToState, removeBinding } from '_client/re_base';
import { EventGrid } from '../../events/components';

class HomeMainDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { events: null };
  }

  componentWillMount() {
    this._binding = bindToState('events', {
      context: this,
      state: 'events',
      asArray: true,
      queries: { orderByChild: 'date', limitToLast: 1 },
    });
  }

  componentWillUnmount() {
    removeBinding(this._binding);
  }

  render() {
    if (this.state.events === null) { return <div>Loading...</div>; }

    return (
      <EventGrid events={this.state.events} />
    );
  }
}

export default HomeMainDisplay;
