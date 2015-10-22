import { Component, PropTypes } from 'react';
import moment from 'moment';
import styles from './grid.css';

export default class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.event.title,
    };
    ['_validateAndSubmit'].forEach((key) => this[key] = this[key].bind(this));
  }

  render() {
    return (
      <form onSubmit={this._validateAndSubmit}>
        Edit event
        <div>
          <label>Title</label>
          <input
            type='text'
            value={this.state.title}
            onChange={this._updateState.bind(this, 'title')}
          />
        </div>
        <input type='submit' value='Edit event' />
      </form>
    );
  }

  _updateState(key, event) {
    this.setState({ [key]: event.target.value });
  }

  _validateAndSubmit() {
    // Don't allow page navigation
    event.preventDefault();

    this.props.onEdit({ title: this.state.title });
  }
}

EventForm.propTypes = {
  event: PropTypes.object.isRequired,
};
