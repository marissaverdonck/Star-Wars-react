export const getFirstLetter = text => {
  if (typeof text !== 'string') return '';
  if (!text) return '';
  return text.charAt(0).toUpperCase();
};

export const urlPath = (url, activeSubject) => {
  if (url && activeSubject && url.includes(activeSubject)) {
    const positionOfSubject = url.search(activeSubject);
    const typeAndId = url.slice(positionOfSubject);
    return typeAndId;
  } else {
    return undefined;
  }
};

export const removeUnderscores = text => {
  if (typeof text !== 'string') return '';
  if (!text) return '';
  return text.replace(/_/g, ' ');
};
