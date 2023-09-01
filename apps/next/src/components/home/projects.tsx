'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { Reveal } from 'ui/animations';
import Section from '../common/section';
import { useTranslation } from '../../i18n/client';
import Button from '../button';
import Link from 'next/link';
import { projectsList } from 'utils/projects';

type Props = {
  lang: Languages;
  title?: string;
};

const Projects = ({ lang, title }: Props) => {
  const { t } = useTranslation(lang, ['projects', 'home']);
  const [inView, setInView] = useState(0);
  const rotateY = useMotionValue(0);
  const rotateX = useMotionValue(5);
  const rotateZ = useMotionValue(5);
  const left = useSpring('0' as unknown as never, {
    stiffness: 100,
    damping: 15,
  });
  const ROTATE = lang === 'ar' ? 30 : -30;
  const ANGLE = lang === 'ar' ? 3 : -3;

  useEffect(() => {
    rotateY.set(ROTATE);
    rotateX.set(ANGLE);
    rotateZ.set(ANGLE);
    left.set(lang === 'ar' ? '-50%' : '50%');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section className='space-y-6 py-12' id='projects'>
      <h2 className='text-center text-4xl font-bold'>{title || t('home:recent_projects')}</h2>
      <div className='relative'>
        {/* Monitor */}
        <div className='sticky top-10 -z-10 hidden w-full lg:block'>
          <div className='absolute w-full'>
            <motion.div
              className='relative inline-block h-full max-h-[700px] w-[50%] max-w-[800px] overflow-hidden'
              layout
              layoutId='image'
              style={{
                rotateY,
                left,
                rotateX,
                rotateZ,
              }}
              transformTemplate={(_, transform) => `perspective(2000px) ${transform}`}
            >
              <Image
                alt=''
                className='relative z-20'
                height={700}
                src='/images/frame.png'
                width={800}
              />
              <AnimatePresence>
                <motion.div
                  animate={{ top: '0%', opacity: 1 }}
                  className='absolute z-10 h-full w-full overflow-hidden'
                  exit={{ top: '-15%', opacity: 0 }}
                  initial={{ top: '15%', opacity: 0 }}
                  key={inView}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    alt={t(`projects:${projectsList[inView].project}.title`)}
                    className='mx-auto h-full max-h-[80%] max-w-[94%] object-contain'
                    fill
                    sizes='(max-width: 1024px) 100vw, 800px'
                    src={projectsList[inView].thumbnail}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
        {/* List */}
        {projectsList.map((p, i) => (
          <div
            className={`flex flex-col items-center gap-6 pb-10 lg:pb-2
            ${i % 2 > 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            key={p.project}
          >
            <Reveal
              className='flex-1 space-y-2 lg:py-52'
              direction='bottom'
              lang={lang}
              onViewportEnter={() => {
                setInView(i);
                rotateY.set(i % 2 === 0 ? ROTATE : -ROTATE);
                rotateX.set(i % 2 === 0 ? -ANGLE : 0);
                rotateZ.set(i % 2 === 0 ? -ANGLE : ANGLE);
                if (lang === 'ar') {
                  left.set(i % 2 === 0 ? '-50%' : '0%');
                } else {
                  left.set(i % 2 === 0 ? '50%' : '0%');
                }
              }}
              once={false}
              threshold={0.7}
            >
              <Image
                alt={t(`projects:${p.project}.title`)}
                className='pb-6 lg:hidden'
                height={300}
                src={p.thumbnail}
                width={800}
              />
              <h3 className='text-2xl font-semibold'>{t(`projects:${p.project}.title`)}</h3>
              <p className='line-clamp-4 text-lg'>{t(`projects:${p.project}.description.1`)}</p>

              <div className='flex flex-wrap gap-4 py-2'>
                {t(`projects:${p.project}.technologies`)
                  .split(',')
                  .map((tech) => (
                    <span className='bg-secondary/20 rounded-sm px-4 py-1 text-sm' key={tech}>
                      {tech}
                    </span>
                  ))}
              </div>

              <div className='mx-auto max-w-xs py-8 text-center'>
                <Button as={Link} className='w-full' href={`/projects/${p.slug}`} theme='secondary'>
                  {t('home:visit_project')}
                </Button>
              </div>
            </Reveal>
            <div className='hidden flex-1 lg:block' />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
