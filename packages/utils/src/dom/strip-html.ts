export const stripHtml = (html?: string) => {
  // eslint-disable-next-line prefer-named-capture-group
  const result = html?.replace(/(<([^>]+)>)/gi, '') || '';
  return result.trim();
};
