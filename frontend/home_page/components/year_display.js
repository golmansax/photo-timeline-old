import { PropTypes, Component } from 'react';
import { bindToState, removeBinding } from '_client/re_base';
import { EventGrid } from '../../events/components';

class HomeYearDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { events: null };
    this._bindToEventsFromYear = this._bindToEventsFromYear.bind(this);
  }

  componentWillMount() {
    this._binding = this._bindToEventsFromYear(this.props.params.year);
  }

  componentWillReceiveProps({ params }) {
    if (params.year && params.year !== this.props.params.year) {
      removeBinding(this._binding);
      this._binding = this._bindToEventsFromYear(params.year);
    }
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

  _bindToEventsFromYear(year) {
    return bindToState('events', {
      context: this,
      state: 'events',
      asArray: true,
      queries: {
        orderByChild: 'date',
        startAt: `${year}-01-01`,
        endAt: `${year}-12-31`,
      },
    });
  }
}

HomeYearDisplay.propTypes = {
  params: PropTypes.shape({
    year: PropTypes.number.isRequired,
  }),
};

export default HomeYearDisplay;
