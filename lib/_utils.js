export function slugify(str) {
  if (!str) { return ''; }
  return str.toLowerCase()
    .replace(/í/g, 'i')
    .replace(/[^\da-z]+/g, ' ')
    .trim()
    .replace(/[ ]/g, '-');
}

export function pick(obj, keys) {
  const newObj = {};
  keys.forEach((key) => (newObj[key] = obj[key]));
  return newObj;
}

export function bindAll(context, keys) {
  /* eslint-disable no-param-reassign */
  keys.forEach((key) => (context[key] = context[key].bind(context)));
  /* eslint-enable no-param-reassign */
}
