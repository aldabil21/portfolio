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
      <ul className='flex items-center gap-1'>
        {items.map((item, i) => (
          <Reveal
            as='li'
            className='line-clamp-1 inline-flex items-center truncate'
            delay={i * 0.1}
            direction='left'
            key={item.link}
            lang={lang}
          >
            {i > 0 && <ChevronIcon className='h-4 w-4 shrink-0 rtl:rotate-180' />}
            {/* last item */}
            {i === items.length - 1 ? (
              <span aria-current='page' className='px-1 py-2'>
                {item.title}
              </span>
            ) : (
              <Link
                className='hover:text-primary-light line-clamp-1 block w-full p-4 px-1 ltr:pr-3 rtl:pl-3'
                href={`/${lang}/${item.link}`}
              >
                {item.title}
              </Link>
            )}
          </Reveal>
        ))}
      </ul>
    </nav>
  );
};
