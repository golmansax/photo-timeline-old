/* eslint-disable max-len, no-process-env */

// NOTE: don't include this file in any file from frontend/
export { NODE_ENV } from '../server/config';
export const FIREBASE_URL = `https://${process.env.FIREBASE_APP}.firebaseio.com`;
