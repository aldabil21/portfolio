'use client';
import { HomeBanner } from 'ui/home';
import { useTranslation } from '../../i18n/client';

type Props = {
  lang: Languages;
};

const HomeBannerComp = ({ lang }: Props) => {
  const { t } = useTranslation(lang, 'home');
  return (
    <HomeBanner
      aboutMe={t('home:about_me')}
      hello={t('home:hello')}
      lang={lang}
      name={t('home:abdulraoof')}
      projects={t('home:projects')}
      recentProjects={t('home:recent_projects')}
      titles={[
        t('home:engineering_lead'),
        t('home:solution_architect'),
        t('home:cms_cloud_creator'),
      ]}
      years={t('home:years')}
    />
  );
};

export default HomeBannerComp;
