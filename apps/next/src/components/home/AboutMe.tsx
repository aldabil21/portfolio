import { getTranslation } from '@/i18n';
import Section from '../common/Section';
import Button from '../button';
import { DownloadIcon } from 'ui/icons';

type Props = {
  lang: Languages;
};

const AboutMe = async ({ lang }: Props) => {
  const { t } = await getTranslation(lang, 'home');

  return (
    <Section
      id='about'
      className='max-w-6xl space-y-6 py-12 text-center text-xl leading-relaxed md:text-3xl'
    >
      <p>{t('home:about_me_1')}</p>
      <p>{t('home:about_me_2')}</p>

      <Button
        theme='primary'
        className='gap-2 text-lg'
        as='a'
        href='/pdf/CV.pdf'
        download='Abdulraoof.pdf'
      >
        <DownloadIcon />
        {t('home:download_cv')}
      </Button>
    </Section>
  );
};

export default AboutMe;
