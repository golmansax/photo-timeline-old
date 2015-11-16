import { Component } from 'react';
import { bindToState, removeBinding } from '_client/re_base';
import { EventGrid } from '../../events/components';
import { UserLogoutButton } from '../../users/components';

class HomePageContent extends Component {
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
        <UserLogoutButton />
        <EventGrid events={this.state.events} />
      </div>
    );
  }
}

export default HomePageContent;
