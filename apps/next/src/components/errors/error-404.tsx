import { getTranslation } from '../../i18n';
import Button from '@/components/button';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  lang: Languages;
};

const Error404 = async ({ lang }: Props) => {
  const { t } = await getTranslation(lang, 'common');

  return (
    <section className='container flex max-w-6xl flex-col-reverse items-center gap-8 px-4 py-20 sm:flex-row'>
      <div className='grow space-y-10 text-center'>
        <h1>{t('common:errors.404')}</h1>
        <Button
          as={Link}
          className='mx-auto w-full max-w-xs text-lg font-bold'
          href={`/${lang}`}
          replace
        >
          {t('common:home')}
        </Button>
      </div>

      <div className='grow'>
        <Image
          alt='Travolta confused'
          className='mx-auto'
          height={476}
          src='/images/travolta.gif'
          width={490}
        />
      </div>
    </section>
  );
};

export default Error404;
