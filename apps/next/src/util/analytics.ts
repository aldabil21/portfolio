const IS_PROD = process.env.NEXT_PUBLIC_ENV === 'production';

const pushToDataLayer = (obj: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    const dataLayer = window.dataLayer as unknown[] | undefined;
    if (dataLayer) {
      dataLayer.push(obj);
      if (!IS_PROD) {
        console.log('Pushed to dataLayer:', obj);
      }
    }
  }
};

export const gtmShareEvent = (method: string, id: string, contentType = '') => {
  pushToDataLayer({
    event: 'share',
    method,
    id,
    content_type: contentType,
  });
};
