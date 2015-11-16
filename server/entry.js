require('../lib/setup');

// Hack to make JSX not need React
global.React = require('react');

require('./').default.listen(require('./config').PORT);
