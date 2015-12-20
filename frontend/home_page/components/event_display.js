import { PropTypes, Component } from 'react';
import { syncState, removeBinding } from '_client/re_base';
import { EventGrid } from '../../events/components';
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

    return <div>Hello</div>;
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
