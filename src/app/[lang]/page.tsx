import ThemeSwitcher from '@/components/common/ThemeSwitcher';
import { getTranslation } from '@/i18n';

const Page: NextPage = async ({ params: { lang } }) => {
  const { t } = await getTranslation(lang);

  return (
    <>
      <main>
        <h1 className='text-primary'>{t('title')}</h1>
        <ThemeSwitcher />
      </main>
    </>
  );
};

export default Page;
