import React from 'react';
import type { Metadata } from 'next';
import Section from '@/components/common/section';
import { Breadcrumb } from '@/components/common/breadcrumb';
import Projects from '@/components/home/projects';
import { getTranslation } from '../../../i18n';
import { hrefLangAlternates } from '../../../util/seo/alternates';
import WhatCanIHelpYouWith from '@/components/common/help-with';

export const generateMetadata = async ({
  params,
}: {
  params: { lang: Languages };
}): Promise<Metadata> => {
  const { t } = await getTranslation(params.lang, ['projects', 'common']);
  return {
    title: t('projects'),
    description: t('seo.description'),
    alternates: {
      languages: hrefLangAlternates('/projects'),
    },
  };
};

const page: NextPage<{ params: { slug: string } }> = async ({ params }) => {
  const { t } = await getTranslation(params.lang, ['projects', 'common']);

  return (
    <>
      <Section className='flex flex-col items-center'>
        <Breadcrumb
          items={[
            { title: t('home'), link: '' },
            { title: t('projects'), link: 'projects' },
          ]}
          lang={params.lang}
        />
        <h1>{t('projects')}</h1>
      </Section>
      <Projects lang={params.lang} title=' ' />
      <WhatCanIHelpYouWith lang={params.lang} />
    </>
  );
};

export default page;
