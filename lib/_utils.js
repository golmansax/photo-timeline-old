export function slugify(str) {
  if (!str) { return ''; }
  return str.toLowerCase().replace(/[^\da-z']+/g, '-');
}

export function pick(obj, keys) {
  const newObj = {};
  keys.forEach((key) => newObj[key] = obj[key]);
  return newObj;
}

export function bindAll(context, keys) {
  keys.forEach((key) => context[key] = context[key].bind(context));
}
