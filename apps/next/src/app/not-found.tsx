import Layout from '@/components/layout';
import { cookies } from 'next/headers';
import Error404 from '@/components/errors/error-404';

const NotFound = () => {
  const cookie = cookies();
  const lang = (cookie.get('lang')?.value || 'en-US') as Languages;

  return (
    <Layout lang={lang}>
      <Error404 lang={lang} />
    </Layout>
  );
};

export default NotFound;
