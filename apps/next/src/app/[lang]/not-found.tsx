import { cookies } from 'next/headers';
import Error404 from '@/components/errors/error-404';

const NotFound = () => {
  const cookie = cookies();
  const lang = (cookie.get('lang')?.value || 'en-US') as Languages;

  return <Error404 lang={lang} />;
};

export default NotFound;
