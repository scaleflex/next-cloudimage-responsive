/**
 * @param {string} name
 * @param {string} filename
 * @param {string} css
 * @returns {string}
 */
function generateScopedName(name, filename) {
  const relativeFilename = filename.replace(`${__dirname}\\`, '');
  const hash = hashCode(relativeFilename);

  return `${normalizeCssClassName(name)}-${hash}`;
}

/**
 * @author https://blog.trannhat.xyz/generate-a-hash-from-string-in-javascript/
 * @param {string} key
 * @returns {string}
 * @private
 */
function hashCode(key) {
  const hash = key
    .split('')
    .reduce((a, b) => {
      // eslint-disable-next-line no-bitwise
      a = ((a << 5) - a) + b.charCodeAt(0);
      // eslint-disable-next-line no-bitwise
      return a & a;
    }, 0);

  return Math
    .abs(hash)
    .toString()
    .substr(0, 5);
}

/**
 * @param {string} className
 * @returns {string}
 * @private
 */
function normalizeCssClassName(className) {
  return className
    .split(/(?=[A-Z])/)
    .map((s) => s.toLowerCase())
    .join('-');
}

export {
  generateScopedName,
};
