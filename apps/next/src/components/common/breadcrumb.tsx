'use client';
import Link from 'next/link';
import { Reveal } from 'ui/animations';
import { ChevronIcon } from 'ui/icons';

type BreadcrumbItem = {
  title: string;
  link: string;
};

type Props = {
  items: BreadcrumbItem[];
  lang: Languages;
};

export const Breadcrumb = ({ lang, items }: Props) => {
  return (
    <nav aria-label='Breadcrumb' className='pb-2 text-sm italic'>
      <ul className='flex flex-wrap items-center gap-1'>
        {items.map((item, i) => (
          <Reveal
            as='li'
            className='flex items-center'
            delay={i * 0.1}
            direction='left'
            key={item.link}
            lang={lang}
          >
            {/* last item */}
            {i === items.length - 1 ? (
              <span aria-current='page' className='px-1 py-2'>
                {item.title}
              </span>
            ) : (
              <Link className='hover:text-primary-light px-1 py-2' href={`/${lang}/${item.link}`}>
                {item.title}
              </Link>
            )}
            {i < items.length - 1 && (
              <Reveal as='span' delay={i * 0.15} direction='left' lang={lang}>
                <ChevronIcon className='h-4 w-4' />
              </Reveal>
            )}
          </Reveal>
        ))}
      </ul>
    </nav>
  );
};
