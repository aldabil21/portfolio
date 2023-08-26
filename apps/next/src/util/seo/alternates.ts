import { languages } from '@/i18n/settings';

export const hrefLangAlternates = (path = '') => {
  // replace leading slash
  const cleanPath = path ? `/${path.replace(/^\//, '')}` : '';
  const alternates: { [k: string]: string } = {
    'x-default': `${process.env.NEXT_PUBLIC_BASE_URL}${cleanPath}`,
  };

  for (const lang of languages) {
    alternates[lang] = `/${lang}${cleanPath}`;
  }

  return alternates;
};
