require('babel/register');

// Hack to make JSX not need React
global.React = require('react');

require('./').listen(require('./config').PORT);
