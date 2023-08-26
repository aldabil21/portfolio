import * as React from 'react';

export function Card({
  title,
  cta,
  href,
}: {
  title: string;
  cta: string;
  href: string;
}): JSX.Element {
  return (
    <a
      className='comp-group comp-mt-4 comp-rounded-lg comp-border comp-border-transparent comp-overflow-hidden comp-bg-origin-border comp-bg-gradient-to-r comp-from-brandred comp-to-brandblue comp-text-[#6b7280]'
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      <div className='comp-p-4 comp-bg-zinc-900 comp-h-full'>
        <p className='comp-inline-block comp-text-xl comp-text-white'>{title}</p>
        <div className='comp-text-xs comp-mt-4 group-hover:comp-underline'>{cta} →</div>
      </div>
    </a>
  );
}
