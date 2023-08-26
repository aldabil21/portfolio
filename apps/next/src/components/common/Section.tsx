import { ElementType, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = { as?: ElementType } & React.HTMLProps<HTMLDivElement>;
const Section = forwardRef<HTMLDivElement, Props>(function Section(
  { children, className, as, ...props },
  ref
) {
  const Component = as || 'section';

  return (
    <Component ref={ref} className={twMerge('container p-4', className)} {...props}>
      {children}
    </Component>
  );
});

export default Section;
