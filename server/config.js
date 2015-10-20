/* eslint-disable no-process-env */

export const NODE_ENV = process.env.NODE_ENV || 'development';
if (NODE_ENV === 'development') { require('dotenv').load(); }

export const PORT = process.env.PORT || 3000;
