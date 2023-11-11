import { getTranslation } from '../../i18n';

type Props = {
  lang: Languages;
};

const WhatCanIHelpYouWith = async ({ lang }: Props) => {
  const { t } = await getTranslation(lang);
  return (
    <section className='container space-y-8 px-4 py-12'>
      <h2 className='text-center text-2xl md:text-4xl'>{t('help.title')}</h2>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <div
          className='animate-card-gradient from-primary-light dark:from-primary-dark to-secondary-light dark:to-secondary-dark
          dark:shadow-primary/10 rounded-lg border bg-gradient-to-r bg-[length:400%] p-[3px] shadow-xl dark:border-gray-900'
        >
          <div className='h-full w-full space-y-4 rounded-md bg-gray-100 p-4 dark:bg-gray-900'>
            <p className='text-center text-xl font-bold'>{t('help.technical')}</p>
            <p className=''>{t('help.technical_desc')}</p>
          </div>
        </div>

        <div
          className='animate-card-gradient from-primary-light dark:from-primary-dark to-secondary-light dark:to-secondary-dark
          dark:shadow-primary/10 rounded-lg border bg-gradient-to-r bg-[length:400%] p-[3px] shadow-xl dark:border-gray-900'
        >
          <div className='h-full w-full space-y-4 rounded-md bg-gray-100 p-4 dark:bg-gray-900'>
            <p className='text-center text-xl font-bold'>{t('help.project')}</p>
            <p className=''>{t('help.project_desc')}</p>
          </div>
        </div>

        <div
          className='animate-card-gradient from-primary-light dark:from-primary-dark to-secondary-light dark:to-secondary-dark
          dark:shadow-primary/10 rounded-lg border bg-gradient-to-r bg-[length:400%] p-[3px] shadow-xl dark:border-gray-900'
        >
          <div className='h-full w-full space-y-4 rounded-md bg-gray-100 p-4 dark:bg-gray-900'>
            <p className='text-center text-xl font-bold'>{t('help.continuous')}</p>
            <p className=''>{t('help.continuous_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatCanIHelpYouWith;
