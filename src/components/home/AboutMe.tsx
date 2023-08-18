import { getTranslation } from '@/i18n';
import Section from '../common/Section';

type Props = {
  lang: Languages;
};

const AboutMe = async ({ lang }: Props) => {
  const { t } = await getTranslation(lang, 'home');

  return (
    <Section className='max-w-6xl space-y-6 py-12 text-center text-2xl leading-relaxed'>
      <p>{t('home:about_me_1')}</p>
      <p>{t('home:about_me_2')}</p>
    </Section>
  );
};

export default AboutMe;
