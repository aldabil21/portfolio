import { Metadata } from 'next';
import { getTranslation } from '@/i18n';
import { languages } from '@/i18n/settings';
import { hrefLangAlternates } from './alternates';

export const homeMetadata = async (lang: Languages): Promise<Metadata> => {
  const { t } = await getTranslation(lang);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
    title: {
      template: `%s | ${t('seo.title')}`,
      default: t('seo.title').toString(),
    },
    description: t('seo.description'),
    robots: process.env.NEXT_PUBLIC_ENV !== 'production' ? 'noindex, nofollow' : undefined,
    twitter: {
      card: 'summary_large_image',
      site: '@whitelabel',
    },
    openGraph: {
      siteName: t('seo.title').toString(),
      title: t('seo.title').toString(),
      type: 'website',
      url: '/',
      locale: lang,
      alternateLocale: languages,
      images: [
        {
          url: '/images/default-cover.jpg',
          alt: t('common:seo.alt').toString(),
        },
      ],
    },
    icons: {
      icon: '/favicon.ico',
    },
    manifest: '/manifest.json',
    themeColor: '#CC0816',
    alternates: {
      languages: hrefLangAlternates(),
    },
  };
};
