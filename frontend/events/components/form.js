import { Component, PropTypes } from 'react';
import moment from 'moment';
import { pick } from '_utils';
import styles from './grid.css';
import { makeEventSlug } from '../utils';

export default class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = pick(props.event, ['title', 'date']);
    ['_validateAndSubmit'].forEach((key) => this[key] = this[key].bind(this));
  }

  render() {
    return (
      <form onSubmit={this._validateAndSubmit}>
        Edit event
        <div>
          <label>Slug</label>
          {this._getSlug()}
        </div>
        <div>
          <label>Title</label>
          <input
            type='text'
            value={this.state.title}
            onChange={this._updateState.bind(this, 'title')}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type='text'
            value={this.state.date}
            onChange={this._updateState.bind(this, 'date')}
          />
        </div>
        <div>
          <label>Image</label>
          {this.props.event.imageUrl}
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

    this.props.onEdit(Object.assign(pick(this.state, ['date', 'title']), {
      slug: this._getSlug(),
    }));
  }

  _getSlug() {
    return makeEventSlug(pick(this.state, ['date', 'title']));
  }
}

EventForm.propTypes = {
  event: PropTypes.object.isRequired,
};
