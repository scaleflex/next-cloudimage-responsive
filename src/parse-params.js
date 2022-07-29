const parseParams = (params) => {
  let _params = params;
  const isObject = !!params && typeof params === 'object';

  if (isObject) {
    _params = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
  }

  return _params;
};

export { parseParams };
