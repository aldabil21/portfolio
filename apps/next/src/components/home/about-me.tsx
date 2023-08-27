import { DownloadIcon } from 'ui/icons';
import Section from '../common/section';
import Button from '../button';
import { getTranslation } from '../../i18n';

type Props = {
  lang: Languages;
};

const AboutMe = async ({ lang }: Props) => {
  const { t } = await getTranslation(lang, 'home');

  return (
    <Section
      className='max-w-6xl space-y-6 py-12 text-center text-xl leading-relaxed md:text-3xl'
      id='about'
    >
      <p>{t('home:about_me_1')}</p>
      <p>{t('home:about_me_2')}</p>

      <Button
        as='a'
        className='gap-2 text-lg'
        download='Abdulraoof.pdf'
        href='/pdf/CV.pdf'
        theme='primary'
      >
        <DownloadIcon />
        {t('home:download_cv')}
      </Button>
    </Section>
  );
};

export default AboutMe;
