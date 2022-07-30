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

const parseImageSrc = ({
  cName,
  doNotReplaceUrl,
  apiVersion,
  src,
  width,
  params,
  lowPreview,
}) => {
  const isIncludesApiVersion = apiVersion && !doNotReplaceUrl;

  return [
    !doNotReplaceUrl && cName ? `https://${cName}` : '',
    isIncludesApiVersion ? `/${apiVersion}/` : '',
    src,
    src.includes('?') ? '&' : '?',
    width ? `w=${width}&` : '',
    lowPreview ? 'blur=80&' : '',
    params || '',
  ].join('');
};

const parseAlt = (name) => {
  if (!name) return;

  const index = name.indexOf('.');

  return name.slice(0, index);
};

export {
  parseParams,
  parseImageSrc,
  parseAlt,
};
