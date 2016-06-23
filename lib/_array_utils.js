export const groupBy = (array: Array, func: ((val: any) => string)): Object => (
  array.reduce((memo, val) => {
    const key = func(val);

    if (!memo[key]) { memo[key] = []; } // eslint-disable-line no-param-reassign
    memo[key].push(val);

    return memo;
  }, {})
);
