import { getTranslation } from '@/i18n';

const Page: NextPage = async ({ params: { lang } }) => {
  const { t } = await getTranslation(lang);

  return (
    <>
      <main>
        <h1>{t('title')}</h1>
      </main>
    </>
  );
};

export default Page;
