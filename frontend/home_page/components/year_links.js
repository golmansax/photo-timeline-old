import { Component } from 'react';
import moment from 'moment';
import { A } from '_frontend/components';
import { listenTo, removeBinding } from '_client/re_base';

const renderYear = (year) => (
  <A key={year} route={`/years/${year}`}>{year}</A>
);

class HomeYearLinks extends Component {
  constructor(props) {
    super(props);
    this.state = { years: null };
  }

  componentWillMount() {
    this._binding = listenTo('events', {
      context: this,
      asArray: true,
      queries: { orderByChild: 'date' },
      then: (events) => {
        const years = [];
        events.forEach((event) => {
          const myYear = moment(event.date).get('year');
          if (years.length === 0 || years[years.length - 1] !== myYear) {
            years.push(myYear);
          }
        });

        this.setState({ years });
      },
    });
  }

  componentWillUnmount() {
    removeBinding(this._binding);
  }

  render() {
    if (this.state.years === null) { return <div>Loading...</div>; }

    return (
      <div>
        <A route='/'>Home</A>
        {this.state.years.map(renderYear)}
      </div>
    );
  }
}

export default HomeYearLinks;
