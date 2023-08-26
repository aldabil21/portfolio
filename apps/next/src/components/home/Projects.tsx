'use client';
import { useEffect, useState } from 'react';
import Section from '../common/Section';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from '@/i18n/client';
import { Reveal } from 'shared-components/animations';

type Props = {
  lang: Languages;
};

const DUMMY = [
  {
    id: 1,
    title: 'Project name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi similique aperiam voluptatem, cumque illum facilis in facere provident, eum deleniti dolor! Est veritatis pariatur aliquid magnam praesentium, voluptate quos deserunt amet adipisci rerum nesciunt blanditiis minima velit voluptates corporis officia sed consequuntur cupiditate reprehenderit fugiat vero sequi itaque a. Eos.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: '/images/frmf/1.png',
  },
  {
    id: 2,
    title: 'Project name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi similique aperiam voluptatem, cumque illum facilis in facere provident, eum deleniti dolor! Est veritatis pariatur aliquid magnam praesentium, voluptate quos deserunt amet adipisci rerum nesciunt blanditiis minima velit voluptates corporis officia sed consequuntur cupiditate reprehenderit fugiat vero sequi itaque a. Eos.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: '/images/ertiqa/1.png',
  },
  {
    id: 3,
    title: 'Project name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi similique aperiam voluptatem, cumque illum facilis in facere provident, eum deleniti dolor! Est veritatis pariatur aliquid magnam praesentium, voluptate quos deserunt amet adipisci rerum nesciunt blanditiis minima velit voluptates corporis officia sed consequuntur cupiditate reprehenderit fugiat vero sequi itaque a. Eos.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: '/images/frmf/1.png',
  },
  {
    id: 4,
    title: 'Project name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi similique aperiam voluptatem, cumque illum facilis in facere provident, eum deleniti dolor! Est veritatis pariatur aliquid magnam praesentium, voluptate quos deserunt amet adipisci rerum nesciunt blanditiis minima velit voluptates corporis officia sed consequuntur cupiditate reprehenderit fugiat vero sequi itaque a. Eos.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: '/images/ertiqa/1.png',
  },
  {
    id: 5,
    title: 'Project name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi similique aperiam voluptatem, cumque illum facilis in facere provident, eum deleniti dolor! Est veritatis pariatur aliquid magnam praesentium, voluptate quos deserunt amet adipisci rerum nesciunt blanditiis minima velit voluptates corporis officia sed consequuntur cupiditate reprehenderit fugiat vero sequi itaque a. Eos.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: '/images/frmf/1.png',
  },
  {
    id: 6,
    title: 'Project name',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi similique aperiam voluptatem, cumque illum facilis in facere provident, eum deleniti dolor! Est veritatis pariatur aliquid magnam praesentium, voluptate quos deserunt amet adipisci rerum nesciunt blanditiis minima velit voluptates corporis officia sed consequuntur cupiditate reprehenderit fugiat vero sequi itaque a. Eos.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    image: '/images/ertiqa/1.png',
  },
];

const Projects = ({ lang }: Props) => {
  const { t } = useTranslation(lang, 'home');
  const [inView, setInView] = useState(0);
  const rotateY = useMotionValue(0);
  const left = useSpring('0' as unknown as never, {
    stiffness: 100,
    damping: 15,
  });
  const ROTATE = lang === 'ar' ? -30 : 30;

  useEffect(() => {
    rotateY.set(-ROTATE);
    left.set(lang === 'ar' ? '-50%' : '50%');
    // eslint-disable-next-line
  }, []);

  return (
    <Section id='projects' className='py-12'>
      <h2 className='text-center'>{t('home:recent_projects')}</h2>
      <div className='relative'>
        {/* Monitor */}
        <div className='sticky top-10 hidden w-full lg:block'>
          <div className='absolute w-full'>
            <motion.div
              className='relative inline-block h-full max-h-[700px] w-[50%] max-w-[800px] overflow-hidden'
              layout
              layoutId='image'
              transformTemplate={(_, transform) => `perspective(2000px) ${transform}`}
              style={{ rotateY, left }}
            >
              <Image
                src='/images/frame.png'
                alt=''
                width={800}
                height={700}
                className='relative z-10'
              />
              <Image
                src={DUMMY[inView].image}
                alt={DUMMY[inView].title}
                fill
                sizes='(max-width: 1024px) 100vw, 800px'
                className='mx-auto h-full max-h-[80%] max-w-[94%] overflow-y-auto object-cover'
              />
            </motion.div>
          </div>
        </div>
        {/* List */}
        {DUMMY.map((project, i) => (
          <div
            key={project.id}
            className={`flex flex-col items-center gap-6
              ${i % 2 > 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
          >
            <Reveal
              direction='bottom'
              lang={lang}
              className='flex-1 space-y-2 py-52'
              once={false}
              onViewportEnter={() => {
                setInView(i);
                rotateY.set(i % 2 === 0 ? -ROTATE : ROTATE);
                if (lang === 'ar') {
                  left.set(i % 2 === 0 ? '-50%' : '0%');
                } else {
                  left.set(i % 2 === 0 ? '50%' : '0%');
                }
              }}
              threshold={0.8}
            >
              <h3 className='text-xl font-semibold'>{project.title}</h3>
              <p className='text-lg'>{project.description}</p>
              <div className='flex flex-wrap justify-center gap-4'>
                {project.technologies.map((tech) => (
                  <span key={tech} className='bg-secondary/20 rounded-sm px-4 py-1 text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            <div className='hidden flex-1 lg:block'></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
