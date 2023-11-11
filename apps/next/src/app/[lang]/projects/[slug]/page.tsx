import React from 'react';
import type { Metadata } from 'next';
import { projectsList } from 'utils/projects';
import { notFound } from 'next/navigation';
import { ExternalLinkIcon } from 'ui/icons';
import { getTranslation } from '../../../../i18n';
import Button from '@/components/button';
import Image from 'next/image';
import { projectMetadata } from '../../../../util/seo/metadata';
import { Breadcrumb } from '../../../../components/common/breadcrumb';

const getProject = (slug: string) => {
  const project = projectsList.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }
  return project;
};

export const generateMetadata = async ({
  params,
}: {
  params: { lang: Languages; slug: string };
}): Promise<Metadata> => {
  const project = getProject(params.slug);
  return projectMetadata(params.lang, project);
};

const page: NextPage<{ params: { slug: string } }> = async ({ params }) => {
  const project = getProject(params.slug);
  const { t } = await getTranslation(params.lang, ['projects', 'common']);

  return (
    <div className='grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 lg:px-0'>
      <section className='container max-w-xl py-10'>
        <Breadcrumb
          items={[
            { title: t('home'), link: '' },
            { title: t('projects'), link: 'projects' },
            { title: t(`projects:${project.project}.title`), link: '#' },
          ]}
          lang={params.lang}
        />

        <div className='sticky top-10 space-y-6'>
          <h1 className=''>{t(`projects:${project.project}.title`)}</h1>
          <Button
            as={project.live ? 'a' : 'button'}
            className='text-sm'
            disabled={!project.live}
            href={project.live}
            rel='noreferrer'
            shape='solid'
            target='_blank'
            theme='primary'
          >
            {project.live ? (
              <>
                {t('projects:visit_project')}
                <ExternalLinkIcon className='h-4 w-4' />
              </>
            ) : (
              t('projects:project_not_live')
            )}
          </Button>
          {project.description.map((d) => (
            <p className='text-lg' key={d}>
              {t(`projects:${project.project}.description.${d}`)}
            </p>
          ))}

          <div className='flex flex-wrap gap-4 py-2'>
            {t(`projects:${project.project}.technologies`)
              .split(',')
              .map((tech) => (
                <span className='bg-secondary/20 rounded-sm px-4 py-1 text-sm' key={tech}>
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </section>

      <aside className='shadow-primary-dark mt-4 shadow-2xl'>
        {/* Create array from project numberOfImages */}
        {Array.from({ length: project.numberOfImages }).map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className='relative' key={i}>
            <Image
              alt={t(`projects:${project.project}.title`)}
              className=''
              height={800}
              src={`/images/${project.project}/${i + 1}.png`}
              width={1728}
            />
          </div>
        ))}
      </aside>
    </div>
  );
};

export default page;
