'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '../../i18n/client';

const NotFound: NextError = () => {
  const params = useParams();
  const lang = (params.lang || 'en') as Languages;
  const { t } = useTranslation(lang, 'common');

  return (
    <div>
      <h2>{t('common:title')}</h2>
      <p>Could not find requested resource</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
};

export default NotFound;
