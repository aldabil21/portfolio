import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { scrollIntoElementId } from 'utils/dom';
import { Reveal } from '../animations';
import { Button } from '../button';
import { ChevronIcon } from '../icons';

type Props = {
  lang: string;
  titles: string[];
  hello: string;
  name: string;
  senior: string;
  years: string;
  projects: string;
  aboutMe: string;
  recentProjects: string;
};

export const HomeBanner = ({
  lang,
  titles,
  hello,
  name,
  senior,
  years,
  projects,
  aboutMe,
  recentProjects,
}: Props) => {
  const [title, setTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className='relative mx-auto mt-10 max-w-6xl'>
      <div className='animate-dashed-line-vertical bg-dashed-line-vertical absolute -top-5 left-2 w-px md:left-7' />
      <div className='animate-dashed-line-vertical bg-dashed-line-vertical animation-delay-500 absolute -top-5 right-2 w-px md:right-7' />
      <div className='animate-dashed-line-horizontal bg-dashed-line-horizontal absolute left-0 top-0 h-px' />

      <div className='relative mx-auto h-5 w-1'>
        <div className='animate-dashed-line-vertical bg-dashed-line-vertical animation-delay-300 absolute -top-5 left-0 w-px' />
      </div>

      <div className='relative'>
        <div className='space-y-4 px-6 pb-14 pt-8 md:px-16'>
          <Reveal as='h2' direction='bottom' lang={lang}>
            {hello}
          </Reveal>
          <Reveal
            as='h1'
            className='text-4xl md:text-6xl'
            delay={0.1}
            direction='bottom'
            lang={lang}
          >
            {name}
          </Reveal>
          <Reveal as='p' className='relative text-2xl' delay={0.2} direction='bottom' lang={lang}>
            {senior}
            <AnimatePresence>
              <motion.span
                animate={{ top: 0, opacity: 1 }}
                className='absolute px-1.5'
                exit={{ top: -15, opacity: 0 }}
                initial={{ top: 15, opacity: 0 }}
                key={title}
                transition={{ duration: 0.3 }}
              >
                {titles[title]}
              </motion.span>
            </AnimatePresence>
          </Reveal>
        </div>
        <div className='animate-dashed-line-horizontal bg-dashed-line-horizontal animation-delay-300 absolute bottom-0 left-0 h-px' />
      </div>

      <div className='relative mx-auto flex flex-col md:flex-row'>
        <div className='grow space-y-4 px-6 py-8 ltr:md:pl-16 rtl:md:pr-16'>
          <Reveal className='flex items-baseline gap-4' delay={0.4} direction='left' lang={lang}>
            <p className='text-5xl font-bold'>10+</p>
            <p className='text-xl'>{years}</p>
          </Reveal>

          <Reveal className='flex items-baseline gap-4' delay={0.5} direction='left' lang={lang}>
            <p className='text-5xl font-bold'>80+</p>
            <p className='text-xl'>{projects}</p>
          </Reveal>
        </div>
        <div className='grow space-y-8 px-6 pb-10 pt-6 md:pt-10'>
          <Reveal className='flex items-center gap-2' delay={0.4} direction='left' lang={lang}>
            <Button
              className='!px-0 !ring-0'
              onClick={() => {
                scrollIntoElementId('about');
              }}
              shape='text'
              theme='white'
            >
              <ChevronIcon className='rtl:rotate-180' />
              <p className='px-4 text-xl'>{aboutMe}</p>
            </Button>
          </Reveal>

          <Reveal className='flex items-center gap-2' delay={0.5} direction='left' lang={lang}>
            <Button
              className='!px-0 !ring-0'
              onClick={() => {
                scrollIntoElementId('projects');
              }}
              shape='text'
              theme='white'
            >
              <ChevronIcon className='rtl:rotate-180' />
              <p className='px-4 text-xl'>{recentProjects}</p>
            </Button>
          </Reveal>
        </div>

        <div
          className='animate-dashed-line-vertical bg-dashed-line-vertical animation-delay-700 absolute -top-1
          left-1/2 hidden w-px -translate-x-1/2 md:block'
        />
      </div>

      {/* Bottom line */}
      <div className='pb-6 pt-4'>
        <div className='animate-dashed-line-horizontal bg-dashed-line-horizontal animation-delay-700 absolute bottom-10 left-0 h-px' />
      </div>
    </section>
  );
};
