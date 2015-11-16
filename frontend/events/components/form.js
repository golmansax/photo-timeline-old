import { Component, PropTypes } from 'react';
import { bindAll, pick } from '_utils';
import { makeEventSlug } from '../utils';
import { ImageUpload } from '../../images/components';

const EDITABLE_ATTRS = ['title', 'date', 'location', 'imageUrl'];

export default class EventForm extends Component {
  constructor(props) {
    super(props);

    this.state = pick(props.event, EDITABLE_ATTRS);
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
            <label>Location</label>
            <input
              type='text'
              value={this.state.location}
              onChange={this._updateState.bind(this, 'location')}
            />
          </div>
          <div>
            <label>Image</label>
            <input
              type='text'
              value={this.state.imageUrl}
              onChange={this._updateState.bind(this, 'imageUrl')}
            />
          </div>
          <input type='submit' value='Edit event' />
        </form>
        <ImageUpload onUpload={this._updateImage} imageId={this._getSlug()} />
      </div>
    );
  }

  _updateState(key, event) {
    this.setState({ [key]: event.target.value });
  }

  _updateImage(imageUrl) {
    this.props.onEdit({ imageUrl });
  }

  _validateAndSubmit(event) {
    // Don't allow page navigation
    event.preventDefault();

    const editedAttrs = Object.assign(pick(this.state, EDITABLE_ATTRS), {
      slug: this._getSlug(),
    });

    Object.keys(editedAttrs).forEach((attr) => {
      if (editedAttrs[attr] === this.props.event[attr]) {
        Reflect.deleteProperty(editedAttrs, attr);
      }
    });

    this.props.onEdit(editedAttrs);
  }

  _getSlug() {
    return makeEventSlug(pick(this.state, EDITABLE_ATTRS));
  }
}

EventForm.propTypes = {
  event: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
};
