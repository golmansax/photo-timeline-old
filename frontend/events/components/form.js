import { Component, PropTypes } from 'react';
import { bindAll, pick } from '_utils';
import { makeEventSlug } from '../utils';
import { ImageUpload } from '../../images/components';

export default class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = pick(props.event, ['title', 'date']);
    bindAll(this, ['_validateAndSubmit', '_updateImage']);
  }

  render() {
    return (
      <div>
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
        <ImageUpload onUpload={this._updateImage} />
      </div>
    );
  }

  _updateState(key, event) {
    this.setState({ [key]: event.target.value });
  }

  _updateImage(imageUrl) {
    this.props.onEdit({ imageUrl });
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
  onEdit: PropTypes.func,
};
