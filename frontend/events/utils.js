import moment from 'moment';
import { slugify } from '_utils';

export function makeEventSlug({ title, date }) {
  return `${moment(date).format('YYYY-MM-DD')}-${slugify(title)}`;
}
