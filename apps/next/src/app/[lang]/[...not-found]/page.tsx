import type { Metadata } from 'next';
// import { getTranslation } from '@/i18n';

export const metadata: Metadata = {
  title: 'Error 404',
  robots: 'noindex nofollow',
};

const NotFound: NextPage =  () => {
  // const { t } = await getTranslation(lang);
  return (
    <main>
      <h1>404</h1>
    </main>
  );
};

export default NotFound;
