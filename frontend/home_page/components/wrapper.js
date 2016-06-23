import { cloneElement, PropTypes, Component } from 'react';
import { bindToState, removeBinding } from '_client/re_base';

class HomePageWrapper extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    events: null,
  };

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

  render = () => {
    if (!this.state.events) { return <div>Loading...</div>; }

    const events = [...this.state.events];
    events.reverse();

    return cloneElement(this.props.children, { events });
  };
}

export default HomePageWrapper;
