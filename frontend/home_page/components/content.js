import { Component } from 'react';
import { bindToState } from '../../re_base';
import { EventList } from '../../events/components';

export default class HomePageContent extends Component {
  constructor(props) {
    super(props);
    this.state = { events: null };
  }

  componentWillMount() {
    bindToState('events', {
      context: this,
      state: 'events',
      asArray: true,
      queries: { orderByChild: 'date' },
    });
  }

  render() {
    if (this.state.events === null) { return <div>Loading...</div>; }

    return (
      <div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}
