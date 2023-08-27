import type { ElementType } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = { as?: ElementType } & React.HTMLProps<HTMLDivElement>;
const Section = forwardRef<HTMLDivElement, Props>(function Section(
  { children, className, as, ...props },
  ref
) {
  const Component = as || 'section';

  return (
    <Component className={twMerge('container p-4', className)} ref={ref} {...props}>
      {children}
    </Component>
  );
});

export default Section;
