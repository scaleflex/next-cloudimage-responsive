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
    doNotReplaceUrl ? '' : `https://${cName}`,
    isIncludesApiVersion ? `/${apiVersion}/` : '',
    src,
    src.includes('?') ? '&' : '?',
    width ? `w=${width}&` : '',
    lowPreview ? 'blur=80&' : '',
    params || '',
  ].join('');
};

export { parseImageSrc };
