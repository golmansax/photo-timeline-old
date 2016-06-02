import { PropTypes } from 'react';
import { childrenPropType } from '_frontend/prop_types';

const DefaultLayout = ({ name, title, children }) => (
  /* eslint-disable max-len */
  <html>
    <head>
      <title>{title}</title>
      <link
        type='text/css'
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
      />
      <link
        type='text/css'
        rel='stylesheet'
        href='/static/react-photoswipe/dist/photoswipe.css'
      />
      <link
        type='text/css'
        rel='stylesheet'
        href={`/assets/${name}.client.css`}
      />
      <meta name='viewport' content='width=device-width, user-scalable=no' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
    </head>
    <body>
      {children}
      <script src={`/assets/${name}.client_entry.js`} />
    </body>
  </html>
  /* eslint-enable max-len */
);

DefaultLayout.propTypes = {
  children: childrenPropType.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DefaultLayout;
