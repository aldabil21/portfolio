export const stripHtml = (html?: string) => {
  const result = html?.replace(/(<([^>]+)>)/gi, '') || '';
  return result?.trim();
};
