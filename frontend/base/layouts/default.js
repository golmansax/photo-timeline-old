import React, { Component, PropTypes } from 'react';

export default class DefaultLayout extends Component {
  render() {
    return (
      /* eslint-disable max-len */
      <html>
        <head>
          <title>{this.props.title}</title>
          <link
            type='text/css'
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
          />
          <meta name='viewport' content='width=device-width, user-scalable=no' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        </head>
        <body>
          {this.props.children}
          <script src={`/assets/${this.props.name}.client_entry.js`} />
        </body>
      </html>
      /* eslint-enable max-len */
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
