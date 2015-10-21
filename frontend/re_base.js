import ReBase from 're-base';
import { FIREBASE_APP } from './config';
export default ReBase.createClass(`https://${FIREBASE_APP}.firebaseio.com`);
