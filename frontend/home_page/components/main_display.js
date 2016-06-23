import { PropTypes, Component } from 'react';

class HomeMainDisplay extends Component {
  static propTypes = {
    events: PropTypes.array,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  componentWillMount = () => {
    this.context.router.push(`/events/${this.props.events[0].key}`);
  };

  render = () => null;
}

export default HomeMainDisplay;
