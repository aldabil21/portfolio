'use client';
import { useTranslation } from '@/i18n/client';
import { HomeBanner } from 'ui/home';

type Props = {
  lang: Languages;
};

const HomeBannerComp = ({ lang }: Props) => {
  const { t } = useTranslation(lang, 'home');

  return (
    <HomeBanner
      lang={lang}
      titles={[t('home:web_developer'), t('home:full_stack'), t('home:js_developer')]}
      hello={t('home:hello')}
      name={t('home:abdulraoof')}
      senior={t('home:senior')}
      years={t('home:years')}
      projects={t('home:projects')}
      aboutMe={t('home:about_me')}
      recentProjects={t('home:recent_projects')}
    />
  );
};

export default HomeBannerComp;
