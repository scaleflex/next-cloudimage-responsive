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

const injectToUrl = (entryUrl, path, skipEndSlash = false) => {
  if (entryUrl.endsWith('/')) return `${entryUrl}${path}`;

  if (!entryUrl) return path;

  if (skipEndSlash) return `${entryUrl}/${path}`;

  return `${entryUrl}/${path}/`;
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
  const allowApiVersion = apiVersion && !doNotReplaceURL;
  const isIncludesWidthParam = WIDTH_PARAMS.some((widthParam) => src.includes(widthParam));
  const _params = (lowPreview && params) ? params.replace(INFO_REGEX, '') : params;

  let mainUrl = (!doNotReplaceURL && cName) ? `https://${cName}` : '';


  if (allowApiVersion) {
    mainUrl = injectToUrl(mainUrl, apiVersion);
  }

  mainUrl = injectToUrl(mainUrl, src, true);

  return [
    mainUrl,
    mainUrl.includes('?') ? '&' : '?',
    width && !isIncludesWidthParam ? `w=${width}&` : '',
    lowPreview ? 'blur=80&' : '',
    _params || '',
  ].join('');
};


export {
  parseParams,
  parseImageSrc,
};
