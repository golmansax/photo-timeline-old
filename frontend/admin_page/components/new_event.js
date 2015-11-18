import { Component } from 'react';
import reactMixin from 'react-mixin';
import { History } from 'react-router';
import { A } from '_frontend/components';
import { bindAll } from '_utils';
import { post } from '_client/re_base';
import { EventForm } from '../../events/components';

class AdminNewEvent extends Component {
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
    post(`events/${data.slug}`, {
      data,
      then: () => {
        alert('Successfully added event!');
        this.history.pushState(null, `/events/${data.slug}`);
      },
    });
  }
}

reactMixin.onClass(AdminNewEvent, History);

export default AdminNewEvent;
