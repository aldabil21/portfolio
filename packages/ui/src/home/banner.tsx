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
    <section className='ui-relative ui-mx-auto ui-mt-10 ui-max-w-6xl'>
      <div className='ui-animate-dashed-line-vertical ui-bg-dashed-line-vertical ui-absolute -ui-top-5 ui-left-2 ui-w-px md:ui-left-7' />
      <div className='ui-animate-dashed-line-vertical ui-bg-dashed-line-vertical ui-animation-delay-500 ui-absolute -ui-top-5 ui-right-2 ui-w-px md:ui-right-7' />
      <div className='ui-animate-dashed-line-horizontal ui-bg-dashed-line-horizontal ui-absolute ui-left-0 ui-top-0 ui-h-px' />

      <div className='ui-relative ui-mx-auto ui-h-5 ui-w-1'>
        <div className='ui-animate-dashed-line-vertical ui-bg-dashed-line-vertical ui-animation-delay-300 ui-absolute -ui-top-5 ui-left-0 ui-w-px' />
      </div>

      <div className='ui-relative'>
        <div className='ui-space-y-4 ui-px-6 ui-pb-14 ui-pt-8 md:ui-px-16'>
          <Reveal as='h2' direction='bottom' lang={lang}>
            {hello}
          </Reveal>
          <Reveal
            as='h1'
            className='ui-text-4xl md:ui-text-6xl'
            delay={0.1}
            direction='bottom'
            lang={lang}
          >
            {name}
          </Reveal>
          <Reveal
            as='p'
            className='ui-relative ui-text-2xl'
            delay={0.2}
            direction='bottom'
            lang={lang}
          >
            {senior}
            <AnimatePresence>
              <motion.span
                animate={{ top: 0, opacity: 1 }}
                className='ui-absolute ui-px-1.5'
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
        <div className='ui-animate-dashed-line-horizontal ui-bg-dashed-line-horizontal ui-animation-delay-300 ui-absolute ui-bottom-0 ui-left-0 ui-h-px' />
      </div>

      <div className='ui-relative ui-mx-auto ui-flex ui-flex-col md:ui-flex-row'>
        <div className='ui-grow ui-space-y-4 ui-px-6 ui-py-8 ltr:md:ui-pl-16 rtl:md:ui-pr-16'>
          <Reveal
            className='ui-flex ui-items-baseline ui-gap-4'
            delay={0.4}
            direction='left'
            lang={lang}
          >
            <p className='ui-text-5xl ui-font-bold'>10+</p>
            <p className='ui-text-xl'>{years}</p>
          </Reveal>

          <Reveal
            className='ui-flex ui-items-baseline ui-gap-4'
            delay={0.5}
            direction='left'
            lang={lang}
          >
            <p className='ui-text-5xl ui-font-bold'>80+</p>
            <p className='ui-text-xl'>{projects}</p>
          </Reveal>
        </div>
        <div className='ui-grow ui-space-y-8 ui-px-6 ui-pb-10 ui-pt-6 md:ui-pt-10'>
          <Reveal
            className='ui-flex ui-items-center ui-gap-2'
            delay={0.4}
            direction='left'
            lang={lang}
          >
            <Button
              className='!ui-px-0'
              onClick={() => {
                scrollIntoElementId('about');
              }}
              shape='text'
              theme='white'
            >
              <ChevronIcon className='rtl:ui-rotate-180' />
              <p className='ui-px-4 ui-text-xl'>{aboutMe}</p>
            </Button>
          </Reveal>

          <Reveal
            className='ui-flex ui-items-center ui-gap-2'
            delay={0.5}
            direction='left'
            lang={lang}
          >
            <Button
              className='!ui-px-0'
              onClick={() => {
                scrollIntoElementId('projects');
              }}
              shape='text'
              theme='white'
            >
              <ChevronIcon className='rtl:ui-rotate-180' />
              <p className='ui-px-4 ui-text-xl'>{recentProjects}</p>
            </Button>
          </Reveal>
        </div>

        <div
          className='ui-animate-dashed-line-vertical ui-bg-dashed-line-vertical ui-animation-delay-700 ui-absolute -ui-top-1
          ui-left-1/2 ui-hidden ui-w-px -ui-translate-x-1/2 md:ui-block'
        />
      </div>

      {/* Bottom line */}
      <div className='ui-pb-6 ui-pt-4'>
        <div className='ui-animate-dashed-line-horizontal ui-bg-dashed-line-horizontal ui-animation-delay-700 ui-absolute ui-bottom-10 ui-left-0 ui-h-px' />
      </div>
    </section>
  );
};
