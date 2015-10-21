/* eslint-disable no-process-env */

const NODE_ENV = process.env.NODE_ENV || 'development';
export const isDevelopment = () => NODE_ENV === 'development';
export const isProduction = () => NODE_ENV === 'production';

if (isDevelopment()) { require('dotenv').load(); }

export const PORT = process.env.PORT || 3000;
