import { Component } from 'react';
import { PhotoSwipe } from 'react-photoswipe';
import { bindToState, removeBinding } from '_client/re_base';
import { EventGrid } from '../../events/components';

class HomeMainDisplay extends Component {
  state = {
    events: null,
    isOpen: false,
  };

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

    const images = this.state.events.map((event) => ({
      src: event.imageUrl,
      title: event.title,
      w: 1200,
      h: 900,
    }));
    return (
      <div>
        <EventGrid events={this.state.events} />
        <button onClick={this._onOpen}>Open</button>
        <PhotoSwipe
          isOpen={this.state.isOpen}
          items={images}
        />
      </div>
    );
  }

  _onOpen = () => this.setState({ isOpen: true });
  _onClose = () => this.setState({ isOpen: false });
}

export default HomeMainDisplay;
