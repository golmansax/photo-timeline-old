import { Component, PropTypes } from 'react';
import { bindAll } from '_utils';
import { post } from '_client/http';

export default class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    bindAll(this, ['_validateAndSubmit', '_updateState']);
  }

  render() {
    return (
      <form onSubmit={this._validateAndSubmit}>
        Upload image
        <input type='file' onChange={this._updateState} />
        <input type='submit' value='Upload image' />
      </form>
    );
  }

  _validateAndSubmit(event) {
    // Don't use HTML post
    event.preventDefault();

    if (!this.state.file) {
      alert('No file chosen');
      return;
    }

    const formData = new FormData();
    formData.append('image', this.state.file);
    formData.append('imageId', this.props.imageId);

    post({ url: '/create-image', formData }).then(({ data }) => {
      this.props.onUpload(data.url);
    });
  }

  _updateState(event) {
    const file = event.target.files[0];
    if (!file.name.match(/\.jpe?g/i)) {
      alert('Must choose a jpg file');
      event.preventDefault();
      return;
    }

    this.setState({ file });
  }
}

ImageUpload.propTypes = {
  imageId: PropTypes.string.isRequired,
  onUpload: PropTypes.func,
};
