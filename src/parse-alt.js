const parseAlt = (name) => {
  if (!name) return;

  const index = name.indexOf('.');

  return name.slice(0, index);
};

export {
  parseAlt,
};
