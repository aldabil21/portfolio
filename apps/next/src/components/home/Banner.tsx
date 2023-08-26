'use client';
import Reveal from '../animation/Reveal';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ChevronIcon from '../svgs/chevron';
import { useTranslation } from '@/i18n/client';
import Button from '../button/Button';
import { scrollIntoElementId } from '@/util/scrollIntoView';

type Props = {
  lang: Languages;
};

const TITLES = ['web_developer', 'full_stack', 'js_developer'];

const HomeBanner = ({ lang }: Props) => {
  const [title, setTitle] = useState(0);
  const { t } = useTranslation(lang, 'home');

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prev) => (prev + 1) % TITLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative mx-auto mt-10 max-w-6xl'>
      <div className='absolute -top-5 left-2 w-px animate-dashed-line-vertical bg-dashed-line-vertical md:left-7' />
      <div className='absolute -top-5 right-2 w-px animate-dashed-line-vertical bg-dashed-line-vertical animation-delay-500 md:right-7' />
      <div className='absolute left-0 top-0 h-px animate-dashed-line-horizontal bg-dashed-line-horizontal' />

      <div className='relative mx-auto h-5 w-1'>
        <div className='absolute -top-5 left-0 w-px animate-dashed-line-vertical bg-dashed-line-vertical animation-delay-300' />
      </div>

      <div className='relative'>
        <div className='space-y-4 px-6 pb-14 pt-8 md:px-16'>
          <Reveal lang={lang} direction='bottom' as='h2'>
            {t('home:hello')}
          </Reveal>
          <Reveal
            lang={lang}
            direction='bottom'
            as='h1'
            className='text-4xl md:text-6xl'
            delay={0.1}
          >
            {t('home:abdulraoof')}
          </Reveal>
          <Reveal lang={lang} direction='bottom' as='p' className='relative text-2xl' delay={0.2}>
            {t('home:senior')}
            <AnimatePresence>
              <motion.span
                className='absolute px-1.5'
                key={title}
                initial={{ top: 15, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                exit={{ top: -15, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {t(`home:${TITLES[title]}`)}
              </motion.span>
            </AnimatePresence>
          </Reveal>
        </div>
        <div className='absolute bottom-0 left-0 h-px animate-dashed-line-horizontal bg-dashed-line-horizontal animation-delay-300' />
      </div>

      <div className='relative mx-auto flex flex-col md:flex-row'>
        <div className='grow space-y-4 px-6 py-8 ltr:md:pl-16 rtl:md:pr-16'>
          <Reveal lang={lang} direction='left' className='flex items-baseline gap-4' delay={0.4}>
            <p className='text-5xl font-bold'>10+</p>
            <p className='text-xl'>{t('home:years')}</p>
          </Reveal>

          <Reveal lang={lang} direction='left' className='flex items-baseline gap-4' delay={0.5}>
            <p className='text-5xl font-bold'>80+</p>
            <p className='text-xl'>{t('home:projects')}</p>
          </Reveal>
        </div>
        <div className='grow space-y-8 px-6 pb-10 pt-6 md:pt-12'>
          <Reveal lang={lang} direction='left' className='flex items-center gap-2' delay={0.4}>
            <Button
              theme='white'
              shape='text'
              className='px-0'
              onClick={() => {
                scrollIntoElementId('about');
              }}
            >
              <ChevronIcon className='rtl:rotate-180' />
              <p className='px-4 text-xl'>{t('home:about_me')}</p>
            </Button>
          </Reveal>

          <Reveal lang={lang} direction='left' className='flex items-center gap-2' delay={0.5}>
            <Button
              theme='white'
              shape='text'
              className='px-0'
              onClick={() => {
                scrollIntoElementId('projects');
              }}
            >
              <ChevronIcon className='rtl:rotate-180' />
              <p className='px-4 text-xl'>{t('home:recent_projects')}</p>
            </Button>
          </Reveal>
        </div>

        <div className='absolute -top-1 left-1/2 hidden w-px -translate-x-1/2 animate-dashed-line-vertical bg-dashed-line-vertical animation-delay-700 md:block' />
      </div>

      {/* Bottom line */}
      <div className='pb-6 pt-4'>
        <div className='absolute bottom-10 left-0 h-px animate-dashed-line-horizontal bg-dashed-line-horizontal animation-delay-700' />
      </div>
    </section>
  );
};

export default HomeBanner;
