import type { Metadata } from 'next';
import { getTranslation } from '../../i18n';
import { languages } from '../../i18n/settings';
import { hrefLangAlternates } from './alternates';
import type { Project } from 'utils/projects';

export const homeMetadata = async (lang: Languages): Promise<Metadata> => {
  const { t } = await getTranslation(lang);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ''),
    title: {
      template: `%s | ${t('title')}`,
      default: t('seo.title'),
    },
    description: t('seo.description'),
    robots: process.env.NEXT_PUBLIC_ENV !== 'production' ? 'noindex, nofollow' : undefined,
    twitter: {
      card: 'summary_large_image',
      site: '@aldabil21',
    },
    openGraph: {
      siteName: t('seo.title'),
      title: t('seo.title'),
      type: 'website',
      url: '/',
      locale: lang,
      alternateLocale: languages,
      images: [
        {
          url: '/images/default-cover.jpg',
          alt: t('common:seo.alt'),
        },
      ],
    },
    icons: {
      icon: '/favicon.ico',
    },
    manifest: '/manifest.json',
    themeColor: '#000112',
    alternates: {
      languages: hrefLangAlternates(),
    },
  };
};

export const projectMetadata = async (lang: Languages, project: Project): Promise<Metadata> => {
  const { t } = await getTranslation(lang, ['projects', 'common']);
  const title = t(`projects:${project.project}.title`);
  return {
    title,
    description: t(`projects:${project.project}.description.1`),
    openGraph: {
      siteName: t('seo.title'),
      title: `${title} | ${t('title')}`,
      type: 'website',
      url: `/project/${project.slug}`,
      locale: lang,
      alternateLocale: languages,
      images: [
        {
          url: project.thumbnail,
          alt: title,
        },
      ],
    },
    alternates: {
      languages: hrefLangAlternates(),
    },
  };
};
