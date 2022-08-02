import { INFO_REGEX, WIDTH_PARAMS } from '../constants';


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
  const isIncludesWidthParam = WIDTH_PARAMS.some((widthParam) => src.includes(widthParam));
  const _params = (lowPreview && params) ? params.replace(INFO_REGEX, '') : params;

  return [
    !doNotReplaceUrl && cName ? `https://${cName}` : '',
    isIncludesApiVersion ? `/${apiVersion}/` : '',
    src,
    src.includes('?') ? '&' : '?',
    width && !isIncludesWidthParam ? `w=${width}&` : '',
    lowPreview ? 'blur=80&' : '',
    _params || '',
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
