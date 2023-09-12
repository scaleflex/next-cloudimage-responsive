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
  doNotReplaceURL,
  apiVersion,
  src,
  width,
  params,
  lowPreview,
}) => {
  const isIncludesApiVersion = apiVersion && !doNotReplaceURL;
  const isIncludesWidthParam = WIDTH_PARAMS.some((widthParam) => src.includes(widthParam));
  const _params = (lowPreview && params) ? params.replace(INFO_REGEX, '') : params;

  return [
    (!doNotReplaceURL && cName) ? `https://${cName}` : '',
    isIncludesApiVersion ? `/${apiVersion}/` : '',
    (doNotReplaceURL || src.startsWith('/')) ? '' : '/',
    src,
    src.includes('?') ? '&' : '?',
    width && !isIncludesWidthParam ? `w=${width}&` : '',
    lowPreview ? 'blur=80&' : '',
    _params || '',
  ].join('');
};


export {
  parseParams,
  parseImageSrc,
};
