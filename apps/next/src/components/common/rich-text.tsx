import type { ReactNode } from 'react';

/** Matches markdown-style links in translation copy, e.g. `[webook.com](https://webook.com)`. */
const LINK_PATTERN = /\[(?<label>[^\]]+)\]\((?<href>https?:\/\/[^\s)]+)\)/g;

type Props = {
  children: string;
};

/**
 * Renders translation copy that may contain markdown-style links. Strings without
 * the syntax pass straight through, so plain descriptions are unaffected.
 *
 * Keep `description.1` free of links: it also feeds the project card and the SEO
 * description, both of which render the raw string.
 */
export const RichText = ({ children }: Props) => {
  const matches = Array.from(children.matchAll(LINK_PATTERN));

  if (!matches.length) {
    return <>{children}</>;
  }

  const nodes: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match) => {
    const [full, label, href] = match;
    const start = match.index;

    if (start > cursor) {
      nodes.push(children.slice(cursor, start));
    }

    nodes.push(
      <a
        className='text-primary hover:text-primary-light font-medium underline
          underline-offset-4 transition'
        href={href}
        key={`${href}-${start}`}
        rel='noreferrer'
        target='_blank'
      >
        {label}
      </a>
    );

    cursor = start + full.length;
  });

  if (cursor < children.length) {
    nodes.push(children.slice(cursor));
  }

  return <>{nodes}</>;
};
