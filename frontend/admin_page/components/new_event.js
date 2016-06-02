import { PropTypes, Component } from 'react';
import { A } from '_frontend/components';
import { alert } from '_frontend/actions';
import { bindAll } from '_utils';
import { EventForm } from '../../events/components';
import { saveEvent } from '../../events/actions';

class AdminNewEvent extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    bindAll(this, ['_renderForm', '_createEvent']);
  }

  render() {
    return (
      <div>
        <A route='/'>Back to admin home</A>
        {this._renderForm()}
      </div>
    );
  }

  _renderForm() {
    return <EventForm event={{}} onEdit={this._createEvent} />;
  }

  _createEvent(data) {
    saveEvent(data.slug, data).then(() => {
      alert('Successfully added event!');
      this.context.router.push(`/events/${data.slug}`);
    });
  }
}

export default AdminNewEvent;
